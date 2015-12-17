namespace AureliaAspNet.Models
{
    using Newtonsoft.Json;

    public class User : ModelBase
    {
        [JsonProperty]
        public string UserName { get; set; }
        [JsonProperty]
        public string FacebookId { get; set; }
        [JsonProperty]
        public string GoogleId { get; set; }
        [JsonProperty]
        public string Picture { get; set; }
    }
}