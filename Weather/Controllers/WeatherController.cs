using Microsoft.AspNetCore.Mvc;
using Weather.Services;

namespace WeatherApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class WeatherController : ControllerBase
    {
        private readonly WeatherService _weatherService;

        public WeatherController(WeatherService weatherService)
        {
            _weatherService = weatherService;
        }

        [HttpGet("{city}")]
        public async Task<IActionResult> GetWeather(string city)
        {
            var weatherData = await _weatherService.GetWeatherAsync(city);
            if (string.IsNullOrEmpty(weatherData))
            {
                return NotFound("City not found or API error.");
            }

            return Ok(weatherData);
        }
    }
}