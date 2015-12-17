namespace AureliaAspNet.Controllers
{
    using System.IdentityModel.Tokens;
    using Microsoft.AspNet.Mvc;
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
    using System.Collections.Generic;
    using System;

    public class AuthenticationController : BaseApiController
    {
        private readonly IConfigurationRoot configuration;
        private readonly IUserService userService;
        const string FacebookAccessTokenUrl = "https://graph.facebook.com/v2.5/oauth/access_token";
        const string FacebookGraphApiUrl = "https://graph.facebook.com/v2.5/me";
        const string GoogleAccessTokenUrl = "https://accounts.google.com/o/oauth2/token";
        const string GooglePeopleApiUrl = "https://www.googleapis.com/plus/v1/people/me/openIdConnect";
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
        public async Task<IActionResult> Google([FromBody]AuthResponse authResponse)
        {
            using (var client = new HttpClient())
            {
                // Step 1. Exchange authorization code for access token.
                var queryStringParams = new
                {
                    code = authResponse.Code,
                    client_id = authResponse.ClientId,
                    client_secret = this.configuration[ConfigurationKeys.GoogleSecret],
                    redirect_uri = authResponse.RedirectUri,
                    grant_type = "authorization_code"
                };
                string queryString = UrlHelper.BuildParameters(queryStringParams);
                var request = new HttpRequestMessage
                {
                    RequestUri = new System.Uri(GoogleAccessTokenUrl),
                    Content = new StringContent(queryString),
                    Method = HttpMethod.Post
                };

                request.Content.Headers.ContentType = new System.Net.Http.Headers.MediaTypeHeaderValue("application/x-www-form-urlencoded");

                var response = await client.SendAsync(request);
                if (response.IsSuccessStatusCode)
                {
                    string accessTokenJson = await response.Content.ReadAsStringAsync();
                    var authTokenResponse = JsonConvert.DeserializeObject<AuthTokenResponse>(accessTokenJson);

                    var handler = new System.IdentityModel.Tokens.Jwt.JwtSecurityTokenHandler();
                    var securityToken = handler.ReadJwtToken(authTokenResponse.IdToken);
                    string googleId = this.TryGetClaim("sub", securityToken.Claims);
                    string email = this.TryGetClaim("email", securityToken.Claims);
                    string picture = this.TryGetClaim("picture", securityToken.Claims);
                    string name = this.TryGetClaim("name", securityToken.Claims);

                    // Step 3b. Create a new user account or return an existing one.
                    return await this.HandleExternalUser(googleId, email, name, picture, this.userService.FindByGoogleId, (user, id) => user.GoogleId = id);
                }
            }

            return this.HttpUnauthorized();
        }

        private string TryGetClaim(string type, IEnumerable<Claim> claims, string defaultValue = null)
        {
            var claim = claims.FirstOrDefault(c => c.Type.Equals(type, System.StringComparison.InvariantCultureIgnoreCase));
            if(claim != null)
            {
                return claim.Value;
            }

            return defaultValue;
        }

        [HttpPost]
        public async Task<IActionResult> Facebook([FromBody]AuthResponse authResponse)
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
                string url = FacebookAccessTokenUrl + "?" + queryString;

                var response = await client.GetAsync(url);
                if (response.IsSuccessStatusCode)
                {
                    string accessTokenJson = await response.Content.ReadAsStringAsync();
                    var authTokenResponse = JsonConvert.DeserializeObject<AuthTokenResponse>(accessTokenJson);

                    // Step 2. Retrieve profile information about the current user.
                    url = FacebookGraphApiUrl + "?" + UrlHelper.BuildParameters(new { access_token = authTokenResponse.AccessToken });

                    response = await client.GetAsync(url);
                    if (response.IsSuccessStatusCode)
                    {
                        string userJson = await response.Content.ReadAsStringAsync();
                        var facebookUser = JsonConvert.DeserializeObject<FacebookUser>(userJson);

                        var existingUser = await this.userService.FindByFacebookId(facebookUser.Id);

                        // Step 3b. Create a new user account or return an existing one.
                        return await this.HandleExternalUser(facebookUser.Id, "", facebookUser.Name, $"https://graph.facebook.com/{facebookUser.Id}//picture?type=large", this.userService.FindByFacebookId, (user, id) => user.FacebookId = id);
                    }
                }
            }

            return this.HttpUnauthorized();
        }

        private async Task<IActionResult> HandleExternalUser(string userId, string email, string name, string picture, 
            Func<string, Task<User>> findUser,
            Action<User, string> setId)
        {
            if(string.IsNullOrEmpty(userId))
            {
                return this.HttpUnauthorized();
            }

            var existingUser = await findUser(userId);

            string token;
            if (existingUser != null)
            {
                token = this.CreateJwtToken(existingUser);
                return this.Json(new { token });
            }

            string userName = string.IsNullOrEmpty(name) ? email : name;
            if(string.IsNullOrEmpty(userName))
            {
                userName = userId;
            }

            var user = new User
            {
                UserName = name,
                Picture = picture,
            };

            setId(user, userId);

            await this.userService.Add(user);
            token = this.CreateJwtToken(user);
            return this.Json(new { token });
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
