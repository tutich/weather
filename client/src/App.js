import logo from './logo.svg';
import './App.css';
import WeatherApp from './component/Weather';
import axios from 'axios';
import { useState } from 'react';

function App() {
 const [location, setLocation] = useState('');
 const [data, setData ] = useState({});
 const [search, setSearch] = useState('');


 const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=6ce75aae0419343244e05ec2db4be0df`
 const searchLocation = (event) => {
 if(event.key === 'Enter') {
  axios.get(url)
 .then((response) => {
  setData(response.data)
  console.log(response.data)
 })
 .catch(error => {
  console.error('Error fetching data:', error); 
  
  })
  setLocation('')
 }
 }



  return (
    <div className="App">
      <p>Hey John</p>
      <input 
      type='text'
      value={location}
      placeholder='Enter Location'onChange={event => setLocation(event.target.value)}
      onKeyDown={searchLocation}
      />
      <h1>{data.name}</h1>
      {data.main ?  <h3>{data.main.temp.toFixed()}° C</h3> : null}

      {data.weather ? <h4>{data.weather[0].main}</h4> : null}
     
      {data.name !== undefined &&
      <div class="search">
      <div class="feels">
        <p>Feels like</p>
        {data.main ? <p className='bold'>{data.main.feels_like.toFixed()} °C</p> : null }
      </div>
      
      <div class="humidity">
        {data.name ? <p className='bold'>{data.main.humidity}</p> : null}
        <p>Humidity</p>
      </div>
      
      <div class="wind">
        {data.wind ? <p className='bold'>{data.wind.speed} MPH</p> : null}
        <>Wind</>
      </div>
    </div>
      }

      
    
      
    </div>
  );
}

export default App;
