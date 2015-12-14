namespace AureliaAspNet.Models
{
    using Newtonsoft.Json;

    public class FacebookAuthTokenResponse
    {
        [JsonProperty("access_token")]
        public string AccessToken { get; set; }
    }
}