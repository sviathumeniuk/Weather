namespace Weather.Services
{
    public class WeatherService
    {
        private readonly string _apiKey;
        private readonly string _baseUrl;
        private readonly HttpClient _httpClient;

        public WeatherService(IConfiguration configuration, HttpClient httpClient)
        {
            _apiKey = configuration["WeatherApi:ApiKey"];
            _baseUrl = configuration["WeatherApi:BaseUrl"];
            _httpClient = httpClient;
        }

        public async Task<string> GetWeatherAsync(string city)
        {
            var url = $"{_baseUrl}?q={city}&appid={_apiKey}&units=metric&lang=uk";
            var response = await _httpClient.GetStringAsync(url);
            return response;
        }
    }
}