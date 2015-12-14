namespace AureliaAspNet.Models
{
    using Newtonsoft.Json;

    public class FacebookUser
    {
        [JsonProperty("id")]
        public string Id { get; set; }

        [JsonProperty("name")]
        public string Name { get; set; }
    }
}