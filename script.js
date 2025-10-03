 const API_KEY = '93a3bfa65ba9c786410da34adf9c1725';
            const URL = `https://api.openweathermap.org/data/2.5/weather?q=Taghazout,MA&units=metric&appid=${API_KEY}`;

            const result = document.getElementById("result");

            async function getWeather() {
                try {
                    const response = await fetch(URL);
                    if (!response.ok) throw new Error('Failed to get weather');

                    const data = await response.json();
                    const iconCode = ata.weather[0].icon;
                    const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
                    result.innerHTML = `d
                <div class="weather-card">
                    <h2>${data.name}, ${data.sys.country}</h2>
                    <img src="${iconUrl}">
                    <p class="temp">${Math.round(data.main.temp)}°C</p>
                    <p>${data.weather[0].description}</p>
                    <p>Humidity: ${data.main.humidity}%</p>
                    <p>Wind: ${data.wind.speed} m/s</p>
                    <p>Feels like: ${Math.round(data.main.feels_like)}°C</p>
                </div>
            `;
                    } catch (error) {
                    result.innerHTML = `<p class="error"> ${error.message}</p>`;
                }
            }

            getWeather();
