namespace AureliaAspNet.Controllers
{
    using System.IdentityModel.Tokens;
    using Microsoft.AspNet.Mvc;
    using System.IO;
    using System.Linq;
    using System.Net.Http;
    using System.Security.Claims;
    using System.Security.Principal;
    using System.Threading.Tasks;
    using AureliaAspNet.Models;
    using Microsoft.AspNet.Authentication.JwtBearer;
    using Microsoft.AspNet.Authorization;
    using Microsoft.Extensions.OptionsModel;
    using Newtonsoft.Json;
    using AureliaAspNet.Configuration;
    using AureliaAspNet.Services;
    using Microsoft.Extensions.Configuration;

    public class AuthenticationController : BaseApiController
    {
        private readonly IConfigurationRoot configuration;
        private readonly IUserService userService;
        const string AccessTokenUrl = "https://graph.facebook.com/v2.5/oauth/access_token";
        const string GraphApiUrl = "https://graph.facebook.com/v2.5/me";
        private readonly JwtBearerOptions bearerOptions;
        private readonly SigningCredentials signingCredentials;

        public AuthenticationController(IConfigurationRoot configuration, IUserService userService, IOptions<JwtBearerOptions> bearerOptions, SigningCredentials signingCredentials)
        {
            this.configuration = configuration;
            this.userService = userService;
            this.bearerOptions = bearerOptions.Value;
            this.signingCredentials = signingCredentials;
        }

        public IActionResult Callback(string code)
        {
            return this.Json(new { code });
        }

        [Authorize("Bearer")]
        public async Task<IActionResult> Me()
        {
            var id = this.GetLoggedInUserId();
            if (!string.IsNullOrEmpty(id))
            {
                var user = await this.userService.FindById(id);
                return this.Json(user);
            }

            return this.HttpNotFound();
        }

        [HttpPost]
        public async Task<IActionResult> Facebook([FromBody]FacebookAuthResponse authResponse)
        {
            using (var client = new HttpClient())
            {
                // Step 1. Exchange authorization code for access token.
                var queryStringParams = new
                {
                    code = authResponse.Code,
                    client_id = authResponse.ClientId,
                    client_secret = this.configuration[ConfigurationKeys.FacebookSecret],
                    redirect_uri = authResponse.RedirectUri
                };

                string queryString = UrlHelper.BuildParameters(queryStringParams);
                string url = AccessTokenUrl + "?" + queryString;

                var response = await client.GetAsync(url);
                if (response.IsSuccessStatusCode)
                {
                    string accessTokenJson = await response.Content.ReadAsStringAsync();
                    var authTokenResponse = JsonConvert.DeserializeObject<FacebookAuthTokenResponse>(accessTokenJson);

                    // Step 2. Retrieve profile information about the current user.
                    url = GraphApiUrl + "?" + UrlHelper.BuildParameters(new { access_token = authTokenResponse.AccessToken });

                    response = await client.GetAsync(url);
                    if (response.IsSuccessStatusCode)
                    {
                        string userJson = await response.Content.ReadAsStringAsync();
                        var facebookUser = JsonConvert.DeserializeObject<FacebookUser>(userJson);

                        var existingUser = await this.userService.FindByFacebookId(facebookUser.Id);

                        var authHeaders = this.Request.Headers["Authorization"];
                        if (authHeaders.Any())
                        {
                            if (existingUser != null)
                            {
                                return new HttpStatusCodeResult(409); // This facebook id is already associated with a user
                            }

                            var authCode = authHeaders.First();
                            if (!string.IsNullOrEmpty(authCode))
                            {
                                authCode = authCode.Split(' ').ElementAtOrDefault(1);
                                if (!string.IsNullOrEmpty(authCode))
                                {
                                    //var payload = DecodeJwtToken(authCode);
                                    //existingUser = await this.userService.FindByFacebookId(payload.Sub);
                                    //if (existingUser == null)
                                    //{
                                    //    return new HttpStatusCodeResult(400); // user not found
                                    //}

                                    //existingUser.FacebookId = facebookUser.Id;

                                    //if (string.IsNullOrEmpty(existingUser.Picture))
                                    //{
                                    //    existingUser.Picture = $"https://graph.facebook.com/{facebookUser.Id}//picture?type=large";
                                    //}

                                    //if (string.IsNullOrEmpty(existingUser.UserName))
                                    //{
                                    //    existingUser.UserName = facebookUser.Name;
                                    //}

                                    //await this.userService.Update(existingUser);
                                    //string token = this.CreateJwtToken(existingUser);
                                    //return this.Json(new { token });
                                }
                            }
                        }
                        else
                        {
                            // Step 3b. Create a new user account or return an existing one.
                            string token;
                            if (existingUser != null)
                            {
                                token = this.CreateJwtToken(existingUser);
                                return this.Json(new { token });
                            }

                            var user = new User
                            {
                                FacebookId = facebookUser.Id,
                                UserName = facebookUser.Name,
                                Picture = $"https://graph.facebook.com/{facebookUser.Id}//picture?type=large",
                            };

                            await this.userService.Add(user);
                            token = this.CreateJwtToken(user);
                            return this.Json(new { token });
                        }
                    }
                }
            }

            return this.HttpUnauthorized();
        }

        private string CreateJwtToken(User user)
        {
            var claims = new Claim[]
            {
                new Claim(ClaimTypes.Name, user.UserName),
                new Claim(ClaimTypes.NameIdentifier, user.Id),
            };

            ClaimsIdentity identity = new ClaimsIdentity(new GenericIdentity(user.UserName, "TokenAuth"), claims);
            var handler = bearerOptions.SecurityTokenValidators.OfType<System.IdentityModel.Tokens.Jwt.JwtSecurityTokenHandler>().First();

            var securityToken = handler.CreateToken(
                issuer: this.bearerOptions.TokenValidationParameters.ValidIssuer,
                audience: this.bearerOptions.TokenValidationParameters.ValidAudience,
                signingCredentials: this.signingCredentials,
                subject: identity);
            var token = handler.WriteToken(securityToken);
            return token;
        }
    }
}
