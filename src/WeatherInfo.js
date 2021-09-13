import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";

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
        <li className="icon">
          <WeatherIcon code={props.data.icon} size={52} />
        </li>
      </ul>
    </div>
  );
}
