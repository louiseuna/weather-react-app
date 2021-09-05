import React, { useState } from "react";
import axios from "axios";

export default function Form(event) {
  const [city, setCity] = useState("");
  const [loaded, setLoaded] = useState(false);
  const [weather, setWeather] = useState("");

  function displayWeather(response) {
    setLoaded(true);
    setWeather({
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
        type="search"
        placeholder="Enter a city..."
        onChange={updateWeather}
      />
      <input type="submit" />
    </form>
  );

  if (loaded) {
    return (
      <div>
        {form}
        <ul class="weather-display">
          <li> Temperature: {weather.temperature}°C </li>
          <li> Humidity: {weather.humidity}% </li>
          <li> Windspeed: {weather.wind} km/hr </li>
          <li>
            {" "}
            <img src={weather.icon} alt="Weather Icon" />
          </li>
        </ul>
      </div>
    );
  } else {
    return form;
  }
}
