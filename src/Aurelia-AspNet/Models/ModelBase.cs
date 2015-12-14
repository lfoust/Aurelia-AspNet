namespace AureliaAspNet.Models
{
    using Newtonsoft.Json;

    public class ModelBase
    {
        [JsonProperty("id")]
        public string Id { get; set; }
    }
}