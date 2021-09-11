import React, { useState } from "react";
import axios from "axios";
import FormattedDate from "./FormattedDate.js";
import WeatherInfo from "./WeatherInfo";

export default function Form(event) {
  const [city, setCity] = useState("");
  const [loaded, setLoaded] = useState(false);
  const [weather, setWeather] = useState("");

  function displayWeather(response) {
    setLoaded(true);
    console.log(response.data.dt);
    setWeather({
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
    let apiKey = "c284e41e5087d96e9a0af3b148134460";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
    axios.get(apiUrl).then(displayWeather);
  }

  function updateWeather(event) {
    setCity(event.target.value);
  }

  let form = (
    <form onSubmit={submitCity}>
      <input
        className="search-form"
        autoFocus="on"
        type="search"
        placeholder="Enter a city to find out..."
        onChange={updateWeather}
      />
      <input className="submit-button" type="submit" value="Search" />
    </form>
  );

  if (loaded) {
    return (
      <div className="container">
        {form}
        <WeatherInfo />
        <ul className="weather-display">
          <li>
            <h2 className="city-display">{weather.city}</h2>
          </li>
          <li className="date">
            Last updated: <FormattedDate date={weather.date} />
          </li>
          <li className="description">{weather.description}</li>
          <li className="temp">
            {" "}
            {weather.temperature}
            <span className="celsius units">°C</span>{" "}
          </li>
          <li className="humidity">
            {" "}
            Humidity: {weather.humidity}
            <span>%</span>
          </li>
          <li className="wind">
            {" "}
            Windspeed: {weather.wind}
            <span className="units"> km/hr</span>
          </li>
          <img src={weather.icon} alt="Weather Icon" />
        </ul>
      </div>
    );
  } else {
    const apiKey = "c284e41e5087d96e9a0af3b148134460";
    let city = "London";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
    axios.get(apiUrl).then(displayWeather);

    return "Loading...";
    // return form;
  }
}
