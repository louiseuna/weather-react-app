import React, { useState } from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";

export default function Form(props) {
  const [city, setCity] = useState(props.city);
  const [weather, setWeather] = useState({ ready: false });

  function handleResponse(response) {
    console.log(response.data.dt);
    setWeather({
      ready: true,
      setLoaded: true,
      date: new Date(response.data.dt * 1000),
      city: response.data.name,
      description: response.data.weather[0].description,
      temperature: Math.round(response.data.main.temp),
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
  }
  function submitCity(event) {
    event.preventDefault();
    search();
  }
  function updateCity(event) {
    setCity(event.target.value);
  }
  function search() {
    const apiKey = "c284e41e5087d96e9a0af3b148134460";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
  }

  if (weather.ready) {
    return (
      <div className="weather">
        <form onSubmit={submitCity}>
          <input
            className="search-form"
            autoFocus="on"
            type="search"
            placeholder="Enter a city to find out..."
            onChange={updateCity}
          />
          <input className="submit-button" type="submit" value="Search" />
        </form>
        <WeatherInfo data={weather} />
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
