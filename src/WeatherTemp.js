import React, { useState } from "react";

export default function WeatherTemp(props) {
  const [unit, setUnit] = useState("celsius");

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }
  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }
  function fahrenheit() {
    return props.celsius * 1.8 + 32;
  }
  if (unit === "celsius") {
    return (
      <li className="temp">
        {" "}
        {Math.round(props.celsius)}
        <span className="celsius units">
          <span class="active units">°C&nbsp;</span>
          <a href="/" onClick={showFahrenheit}>
            | °F
          </a>
        </span>{" "}
      </li>
    );
  } else {
    return (
      <li className="temp">
        {Math.round(fahrenheit())}
        <span className="farhenheit units">
          <a href="/" onClick={showCelsius}>
            °C |
          </a>
          <span className="active units"> °F</span>
        </span>
      </li>
    );
  }
}
