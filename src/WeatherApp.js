import React from 'react';
import axios from 'axios';

const api={
    key:"e356fa72d1eddafd60fab8f755efc020",
    url:"https://api.openweathermap.org/data/2.5/"
  }
  
  function WeatherApp() {
  
    const [query,setQuery] = React.useState('');
    const [weather,setWeather] = React.useState('');
  
    const handleSearch = (e) =>{
      e.preventDefault();
      if(query){
        fetch(`${api.url}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then(resp=>resp.json())
        .then(result=>{setWeather(result);setQuery('');console.log(result)});
      }
    }
  
  
    const dateBuilder = (d) =>{
      let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
      let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  
      let day = days[d.getDay()];
      let month = months[d.getMonth()];
      let date = d.getDate();
      let year = d.getFullYear();
  
      return `${day}, ${date} ${month}, ${year}`
    }
  
    const setBG = () =>{
      if(typeof weather.main=="undefined") return "app";
      else if(weather.main.temp<=15) return "app cold";
      else if(weather.main.temp>15 && weather.main.temp<=25) return "app lcold";
      else if(weather.main.temp>25 && weather.main.temp<=35) return "app medium";
      else return "app warm";
    }
  
  
  
  
    return (
      <div className="wheather-app">
        <main>
          <div className="search-bar">
            <input className="search-box" type="text" placeholder="Search by City ..."
            onChange={(e)=>setQuery(e.target.value)} value={query}>
            </input>
            <button type="submit" className="search-btn" onClick={handleSearch}>
              Submit
            </button>
          </div>
  
          {(typeof weather.main != "undefined")?(
            <div>
              <div className="location-box">
                <h2 className="location">{weather.name}, {weather.sys.country}</h2>
                <p className="date">{dateBuilder(new Date())}</p>
                <div className="temp">{weather.main.temp}°C</div>
                <p className="type">{weather.weather[0].main}</p>
                <div className="other-dets">
                  <h4>Other details :</h4>
                  <p>Pressure: {weather.main.pressure} hPa</p>
                  <p>Humidity: {weather.main.humidity} %</p>
                  <p>Wind speed: {weather.wind.speed} m/s</p>
                </div>
              </div>
            </div>
          ):(
            <div>
              <h2>Weather Update Display Here, Search Your City</h2>
            </div>
          )}
        </main>
      </div>
    )
  }
  
export default WeatherApp;