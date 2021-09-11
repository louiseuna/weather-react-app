import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props) {
  return (
    <div className="container">
      <ul className="weather-display">
        <li>
          <h2 className="city-display">{props.data.city}</h2>
        </li>
        <li className="date">
          Last updated: <FormattedDate date={props.data.date} />
        </li>
        <li className="description">{props.data.description}</li>
        <li className="temp">
          {" "}
          {props.data.temperature}
          <span className="celsius units">°C</span>{" "}
        </li>
        <li className="humidity">
          {" "}
          Humidity: {props.data.humidity}
          <span>%</span>
        </li>
        <li className="wind">
          {" "}
          Windspeed: {props.data.wind}
          <span className="units"> km/hr</span>
        </li>
        <img src={props.data.icon} alt="Weather Icon" />
      </ul>
    </div>
  );
}
