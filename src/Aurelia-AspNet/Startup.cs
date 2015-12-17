namespace AureliaAspNet
{
    using Microsoft.AspNet.Builder;
    using Microsoft.AspNet.Hosting;
    using Microsoft.Extensions.DependencyInjection;
    using System;
    using System.IdentityModel.Tokens;
    using System.IdentityModel.Tokens.Jwt;
    using System.Security.Cryptography;
    using AureliaAspNet.Configuration;
    using AureliaAspNet.Services;
    using Microsoft.AspNet.Authentication.JwtBearer;
    using Microsoft.AspNet.Authorization;
    using Microsoft.AspNet.Diagnostics;
    using Microsoft.AspNet.Http;
    using Microsoft.Extensions.Configuration;
    using Microsoft.Extensions.Logging;
    using Newtonsoft.Json;
    using Newtonsoft.Json.Serialization;

    public static class ConfigurationKeys
    {
        public const string FacebookSecret = "FacebookSecret";
        public const string GoogleSecret = "GoogleSecret";
        public const string RsaXml = "RSAXml";
    }

    public class Startup
    {
        RsaSecurityKey rsaSecurityKey = null;
        SigningCredentials signingCredentials = null;
        const string TokenAudience = "client";
        const string TokenIssuer = "AureliaAspNet";

        public IConfigurationRoot Configuration { get; set; }

        public Startup(IHostingEnvironment env)
        {
            var builder = new ConfigurationBuilder()
                .AddJsonFile("appsettings.json")
                .AddUserSecrets()
                .AddEnvironmentVariables();
            this.Configuration = builder.Build();

            this.GenerateRsaKeys();
        }

        private void GenerateRsaKeys()
        {
            string xml = this.Configuration[ConfigurationKeys.RsaXml];
            using (RSACryptoServiceProvider rsa = new RSACryptoServiceProvider(2048))
            {
                rsa.FromXmlString(xml);
                this.rsaSecurityKey = new RsaSecurityKey(rsa.ExportParameters(includePrivateParameters: true));

                this.signingCredentials =
                    new SigningCredentials(this.rsaSecurityKey, JwtAlgorithms.RSA_SHA256);

                rsa.PersistKeyInCsp = false;
            }
        }

        public void ConfigureServices(IServiceCollection services)
        {
            services.AddInstance(this.signingCredentials);
            services.AddSingleton<IUserService, MockUserService>();
            services.AddInstance<IConfigurationRoot>(this.Configuration);

            services.Configure<JwtBearerOptions>(bearer =>
            {
                bearer.TokenValidationParameters.IssuerSigningKey = this.rsaSecurityKey;
                bearer.TokenValidationParameters.ValidAudience = TokenAudience;
                bearer.TokenValidationParameters.ValidIssuer = TokenIssuer;
            });

            services.AddAuthorization(auth =>
            {
                auth.AddPolicy("Bearer", new AuthorizationPolicyBuilder()
                    .AddAuthenticationSchemes(JwtBearerDefaults.AuthenticationScheme)
                    .RequireAuthenticatedUser().Build());
            });

            services.AddMvc().AddJsonOptions(options =>
            {
                options.SerializerSettings.ContractResolver =
                    new CamelCasePropertyNamesContractResolver();
            });
        }

        public void Configure(IApplicationBuilder app, IHostingEnvironment env, ILoggerFactory loggerFactory)
        {
            loggerFactory.AddConsole(Configuration.GetSection("Logging"));
            loggerFactory.AddDebug();

            app.UseIISPlatformHandler();

            // Register a simple error handler to catch token expiries and change them to a 401, 
            // and return all other errors as a 500. This should almost certainly be improved for
            // a real application.
            app.UseExceptionHandler(appBuilder =>
            {
                appBuilder.Use(async (context, next) =>
                {
                    var error = context.Features[typeof(IExceptionHandlerFeature)] as IExceptionHandlerFeature;
                    // This should be much more intelligent - at the moment only expired 
                    // security tokens are caught - might be worth checking other possible 
                    // exceptions such as an invalid signature.
                    if (error != null && error.Error is SecurityTokenExpiredException)
                    {
                        context.Response.StatusCode = 401;
                        // What you choose to return here is up to you, in this case a simple 
                        // bit of JSON to say you're no longer authenticated.
                        context.Response.ContentType = "application/json";
                        await context.Response.WriteAsync(
                            JsonConvert.SerializeObject(
                                new { authenticated = false, tokenExpired = true }));
                    }
                    else if (error?.Error != null)
                    {
                        context.Response.StatusCode = 500;
                        context.Response.ContentType = "application/json";
                        // TODO: Shouldn't pass the exception message straight out, change this.
                        await context.Response.WriteAsync(
                            JsonConvert.SerializeObject
                            (new { success = false, error = error.Error.Message }));
                    }
                    // We're not trying to handle anything else so just let the default 
                    // handler handle.
                    else await next();
                });
            });

            app.UseJwtBearerAuthentication(options =>
            {
                // Basic settings - signing key to validate with, audience and issuer.
                options.TokenValidationParameters.IssuerSigningKey = this.rsaSecurityKey;
                options.TokenValidationParameters.ValidAudience = TokenAudience;
                options.TokenValidationParameters.ValidIssuer = TokenIssuer;

                // When receiving a token, check that we've signed it.
                options.TokenValidationParameters.ValidateSignature = true;

                // When receiving a token, check that it is still valid.
                options.TokenValidationParameters.ValidateLifetime = true;

                // This defines the maximum allowable clock skew - i.e. provides a tolerance on the 
                // token expiry time when validating the lifetime. As we're creating the tokens locally
                // and validating them on the same machines which should have synchronised 
                // time, this can be set to zero. Where external tokens are used, some leeway here 
                // could be useful.
                options.TokenValidationParameters.ClockSkew = TimeSpan.Zero;
            });

            app.UseStaticFiles();

            app.UseMvc(routes =>
            {
                routes.MapRoute(
                    name: "api",
                    template: "api/{action}",
                    defaults: new { controller = "Show" });

                routes.MapRoute(
                    name: "authenticate-callback",
                    template: "authenticate",
                    defaults: new { controller = "Authentication", action = "Callback" });

                routes.MapRoute(
                    name: "authenticate-client",
                    template: "auth/{action}",
                    defaults: new { controller = "Authentication" });

                routes.MapRoute(
                    name: "spa-fallback",
                    template: "{*anything}",
                    defaults: new { controller = "Home", action = "Index" });
            });
        }

        public static void Main(string[] args) => WebApplication.Run<Startup>(args);
    }
}
