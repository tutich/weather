import React, { useState, useEffect } from 'react';
import { WiDaySunny, WiCloudy, WiRain, WiSnow } from 'react-icons/wi';

const WeatherApp = () => {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    // Fetch weather data from API
    const fetchWeatherData = async () => {
      // Make API call to get weather data
      // Replace 'YOUR_API_KEY' with your actual API key
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=London&appid=b61a8b10710cd82559fc113f8837ab10`);
      const data = await response.json();
      setWeather(data.weather[0].main); // Extract weather condition
    };

    fetchWeatherData();
  }, []);

  // Function to render weather icon based on weather condition
  const renderWeatherIcon = () => {
    switch (weather) {
      case 'Clear':
        return <WiDaySunny />;
      case 'Clouds':
        return <WiCloudy />;
      case 'Rain':
        return <WiRain />;
      case 'Snow':
        return <WiSnow />;
      default:
        return null;
    }
  };

  return (
    <div>
      {weather && (
        <div>
          <h2>Current Weather</h2>
          {renderWeatherIcon()}
          <p>Condition: {weather}</p>
        </div>
      )}
    </div>
  );
};

export default WeatherApp;
