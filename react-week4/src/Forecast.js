import React from "react";
import ReactAnimatedWeather from "react-animated-weather";

export default function Weather2(props) {
  if (props.temperature) {
    return (
      <ul>
        <li>Temperature: {Math.round(props.temperature)}°C</li>
        <li>Description: {props.description}</li>
        <li>Humidity: {props.humidity}%</li>
        <li>Wind speed: {props.wind}</li>
        <li></li>
        <ReactAnimatedWeather
          icon="CLEAR_DAY"
          color="goldenrod"
          size={50}
          animate={true}
        />
      </ul>
    );
  } else {
    return <p></p>;
  }
}
