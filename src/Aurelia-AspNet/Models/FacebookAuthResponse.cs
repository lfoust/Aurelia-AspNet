namespace AureliaAspNet.Models
{
    using Newtonsoft.Json;

    public class AuthResponse
    {
        [JsonProperty("code")]
        public string Code { get; set; }

        [JsonProperty("clientId")]
        public string ClientId { get; set; }

        [JsonProperty("redirectUri")]
        public string RedirectUri { get; set; }
    }
}