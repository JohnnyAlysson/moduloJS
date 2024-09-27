document.getElementById('botao').addEventListener('click', fetchWeather);

async function fetchWeather() {
    const url = 'https://api.weatherstack.com/current?access_key=54ea8451d0cb39b69b4c9f45547f22f9&query=Fortaleza';
    
    try {
        const response = await fetch(url);
        const data = await response.json();


        const location = `${data.location.name}, ${data.location.country}`;
        const temperature = `${data.current.temperature}°C`;
        const weatherDescription = data.current.weather_descriptions[0];
        const weatherIcon = data.current.weather_icons[0];

        document.getElementById('location').textContent = `Location: ${location}`;
        document.getElementById('temperature').textContent = `Temperature: ${temperature}`;
        document.getElementById('description').textContent = `Weather: ${weatherDescription}`;
        document.getElementById('weather-icon').src = weatherIcon;
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
}
