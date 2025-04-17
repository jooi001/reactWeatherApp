import React, { useEffect, useState } from 'react'
import './Weather.css'
import search_icon from '../assets/search.png'
import clear_icon from '../assets/clear.png';
import cloud_icon from '../assets/cloud.png';
import drizzle_icon from '../assets/drizzle.png';
import humid_icon from '../assets/humid.png';
import humidity_icon from '../assets/humidity.svg';
import rain_icon from '../assets/rain.png';
import snow_icon from '../assets/snow.png';
import wind_icon from '../assets/wind.png';
import windspeed_icon from '../assets/windspeed.svg';

const Weather = () => {

  const inputRef = React.useRef(null);
  const [weatherData, searchWeatherData] = useState(false);
  const allIcons = {
    "01d": clear_icon,
    "01n": clear_icon,
    "02d": clear_icon,
    "02n": clear_icon,
    "03d": cloud_icon,
    "03n": cloud_icon,
    "04d": cloud_icon,
    "04n": cloud_icon,
    "09d": drizzle_icon,
    "09n": drizzle_icon,
    "10d": rain_icon,
    "10n": rain_icon,
    "13d": snow_icon,
    "13n": snow_icon,
    "50d": humid_icon,
    "50n": humid_icon,
  }

  const search = async (city) => {
    if (!city) { // if no city is provided, return
      alert("Enter City Name");
      return;
    }

    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${import.meta.env.VITE_APP_ID}`;
      const response = await fetch(url); // fetch the weather data
      const data = await response.json(); // convert the response to JSON

      if (!response.ok) {
        alert(data.message);
        return;
      }

      console.log(data);
      const icon = allIcons[data.weather[0].icon] || clear_icon; // get the icon based on the weather condition
      searchWeatherData({
        temperature: Math.round(data.main.temp), // use imperial units
        humidity: data.main.humidity,
        icon: icon,
        location: data.name,
        windSpeed: data.wind.speed,
      })

    } catch (error) {
      searchWeatherData(false); // set weatherData to false if there is an error
      console.error("Error fetching weather data:");
    }
  }

  useEffect(() => {
    search("Fullerton") // default city
  }, [])


  return (
    <div className='weather'>
      <div className='search-bar'>
        <input ref={inputRef} type="text" placeholder='search' />
        <img src={search_icon} alt="" onClick={() => search(inputRef.current.value)} />
      </div>

      {/* weather icon section */}
      {weatherData ? <>
        <img src={weatherData.icon} alt="" className='weather-icon' />

        {/* details section */}

        <p className='temperature'>{weatherData.temperature}°f</p>
        <p className='location'>{weatherData.location}</p>
        <div className="weather-data">

          {/* humidity icon section */}
          <div className="col">
            <svg
              viewBox="0 0 512 512"
              xmlns="http://www.w3.org/2000/svg"
              width="60px"
              height="60px"
              fill="#fff" /* Set the fill color */
            >
              <path d="M311.4252,124.3267a94.9129,94.9129,0,0,0-79.9866,43.8776L257.6325,215.79h23.6224a30.3515,30.3515,0,0,1,43.5382-23.8223l20.302-20.3018a10,10,0,1,1,14.1416,14.1426l-20.386,20.3858a30.1305,30.1305,0,0,1,2.7449,9.5957H373.18a10,10,0,0,1,0,20H336.8637a30.3349,30.3349,0,0,1-50.877,0h-17.345l13.1277,23.8486q.1422.2578.2686.5234a102.9714,102.9714,0,0,1,9.8043,51.9134,94.8961,94.8961,0,1,0,19.5829-187.7483Z" />
              <circle cx="311.4252" cy="219.229" r="10.3704" />
              <path d="M259.2123,348.9116a82.73,82.73,0,0,0,4.8906-79.8935L193.46,140.6841a5.2123,5.2123,0,0,0-9.1319,0l-70.6426,128.334a83.1628,83.1628,0,0,0,145.5264,79.8935Zm-70.3174,15.7617a10,10,0,1,1,0-20,40.1644,40.1644,0,0,0,36.6324-56.63,10,10,0,1,1,18.2255-8.2344,60.1636,60.1636,0,0,1-54.8579,84.8642Z" />
            </svg>
            <div>
              <p>{weatherData.humidity}%</p>
              <span>Humidity</span>
            </div>
          </div>

          {/* wind icon section */}
          <div className="col">
            <svg
              viewBox="0 0 512 512"
              xmlns="http://www.w3.org/2000/svg"
              width="60px"
              height="60px"
              fill="#fff" /* Set the fill color */
            >
              <path d="M304.0825,349.9575H292.5317a10,10,0,0,1,0-20h11.5508a13.7286,13.7286,0,0,0,0-27.4571H130.5366a10,10,0,1,1,0-20H304.0825a33.7286,33.7286,0,0,1,0,67.4571Z" />
              <path d="M273.0825,229.5H66.4116a10,10,0,0,1,0-20H273.0825a13.7285,13.7285,0,0,0,0-27.457H261.5317a10,10,0,0,1,0-20h11.5508a33.7285,33.7285,0,0,1,0,67.457Z" />
              <path d="M375.1035,266.7411H97.4116a10,10,0,1,1,0-20H375.1035a24.4849,24.4849,0,1,0,0-48.97H358.3164a10,10,0,0,1,0-20h16.7871a44.4849,44.4849,0,1,1,0,88.97Z" />
            </svg>
            <div>
              <p>{weatherData.windSpeed} m/h</p>
              <span>Wind Speed</span>
            </div>
          </div>
        </div>
      </> : <></>}
    </div>
  )
}

export default Weather
