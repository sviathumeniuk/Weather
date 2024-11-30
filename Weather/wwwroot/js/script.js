async function getWeather() {
    const city = document.getElementById("city").value.trim();
    const resultDiv = document.getElementById("weatherResult");

    if (!city) {
        resultDiv.innerHTML = "Будь ласка, введіть назву міста.";
        return;
    }

        const response = await fetch(`http://localhost:5007/api/weather/${city}`);
        
        if (!response.ok) {
            throw new Error('Помилка при отриманні погоди');
        }

        const data = await response.json();

        if (data.error) {
            resultDiv.innerHTML = data.error;
        } else {
            const cityName = data.name;
            const country = data.sys.country;
            const temperature = data.main.temp;
            const tempMin = data.main.temp_min;
            const tempMax = data.main.temp_max;
            const pressure = data.main.pressure;
            const humidity = data.main.humidity;
            const description = data.weather[0].description;
            const windSpeed = data.wind.speed;
            const windDeg = data.wind.deg;
            const clouds = data.clouds.all;
            const sunrise = new Date(data.sys.sunrise * 1000).toLocaleTimeString();
            const sunset = new Date(data.sys.sunset * 1000).toLocaleTimeString();

            resultDiv.innerHTML = `
                <strong>${cityName}, ${country}</strong><br>
                Температура: ${temperature}°C<br>
                Мінімальна температура: ${tempMin}°C<br>
                Максимальна температура: ${tempMax}°C<br>
                Атмосферний тиск: ${pressure} hPa<br>
                Вологість: ${humidity}%<br>
                Опис погоди: ${description}<br>
                Швидкість вітру: ${windSpeed} м/с<br>
                Напрямок вітру: ${windDeg}°<br>
                Хмарність: ${clouds}%<br>
                Схід сонця: ${sunrise}<br>
                Захід сонця: ${sunset}
            `;
        }
}