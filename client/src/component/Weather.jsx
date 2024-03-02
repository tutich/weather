import React, { useState, useEffect } from 'react';
  
//   {
//     "coord":{"lon":36.8167,"lat":-1.2833},
//     "weather":[{"id":803,"main":"Clouds","description":"broken clouds","icon":"04d"}],
//     "base":"stations",
//     "main":{"temp":293.77,"feels_like":293.92,"temp_min":293.77,"temp_max":297.02,"pressure":1024,"humidity":78},
//     "visibility":10000,
//     "wind":{"speed":5.14,"deg":50},
//     "clouds":{"all":75},
//     "dt":1709362639,
//     "sys":{"type":1,"id":2543,"country":"KE","sunrise":1709350861,"sunset":1709394539},
//     "timezone":10800,"id":184745,"name":"Nairobi","cod":200
//  }









  
  
  
  
  
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
