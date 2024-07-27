import React, { useState } from 'react';
import './Weather.css';

const Weather = () => {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);

  const fetchWeather = async () => {
    if (city === '') return;

    const apiKey = 'd5b0dae649252ff9de67bbc086e235d8'; 

    try {
     
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
      const data = await response.json();

      if (response.ok) {
        setWeather(data);
        setError(null);
      } else {
        setWeather(null);
        setError('Unable to fetch weather data.');
      }
    } catch (err) {
      setWeather(null);
      setError('An error occurred while fetching the weather data.');
    }
  };

  return (
    <div className="weather-container">
      <input 
        type="text" 
        value={city} 
        onChange={(e) => setCity(e.target.value)} 
        placeholder="Enter city" 
      />
      <button onClick={fetchWeather}>Get Weather</button>
      {error && <p className="error">{error}</p>}
      {weather && (
        <div className="weather-info">
          <h3>{weather.name}</h3>
          <p>Temperature: {weather.main.temp} °C</p>
          <p>Feels Like: {weather.main.feels_like} °C</p>
          <p>Humidity: {weather.main.humidity} %</p>
          <p>Weather: {weather.weather[0].description}</p>
          <p>Wind Speed: {weather.wind.speed} m/s</p>
          <p>Pressure: {weather.main.pressure} hPa</p>
        </div>
      )}
    </div>
  );
};

export default Weather;
