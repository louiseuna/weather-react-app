import React, { useState } from "react";
import axios from "axios";

export default function WeatherApi(props) {
  let [temperature, setTemperature] = useState(null);
  function displayTemperature(response) {
    setTemperature(response.data.main.temp);
  }

  let url = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&units=metric&appid=c284e41e5087d96e9a0af3b148134460`;
  axios.get(url).then(displayTemperature);

  if (temperature) {
    return (
      <p>
        {" "}
        The temperature in {props.city} is {Math.round(temperature)}° C.
      </p>
    );
  } else {
    return <p> Fetching temperature for {props.city}...</p>;
  }
}
