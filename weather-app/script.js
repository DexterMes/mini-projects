document.getElementById("getWeather").addEventListener("click", async function () {
	const apiKey = "2297c0ca7baf4d9069f20968e450b3bd"; // Add Api Key

	const city = document.getElementById("location").value;
	const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

	if (city) {
		try {
			const response = await fetch(url);
			const data = await response.json();
			console.log(data);

			if (data.cod === 200) {
				const weatherInfo = `
                  <h3>${data.name}, ${data.sys.country}</h3>
                  <p>Temperature: ${data.main.temp}°C</p>
                  <p>Weather: ${data.weather[0].description}</p>
                  <p>Humidity: ${data.main.humidity}%</p>
                  <p>Wind Speed: ${data.wind.speed} m/s</p>
              `;
				document.getElementById("weatherInfo").innerHTML = weatherInfo;
			} else document.getElementById("weatherInfo").innerHTML = `<p>City not found. Please try again.</p>`;
		} catch (error) {
			document.getElementById("weatherInfo").innerHTML = `<p>Error fetching data. Please try again later.</p>`;
		}
	} else document.getElementById("weatherInfo").innerHTML = `<p>Please enter a city name.</p>`;
});
