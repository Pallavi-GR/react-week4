import React, { useState } from "react";
import Weather2 from "./Forecast";
import axios from "axios";

export default function Search() {
  let [city, setCity] = useState(null);
  let [temperature, setTemperature] = useState(null);
  let [humidity, setHumidity] = useState("");
  let [description, setDescription] = useState("");
  let [wind, setWind] = useState("");

  function searchSubmit(event) {
    event.preventDefault();
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=cf3e506438214bee7911d63659fba7fa&units=metric`;
    axios.get(url).then(showForecast);
  }

  function showForecast(response) {
    console.log(response.data);
    setTemperature(response.data.main.temp);
    setDescription(response.data.weather[0].main);
    setHumidity(response.data.main.humidity);
    setWind(response.data.wind.speed);
  }

  function updateChange(event) {
    setCity(event.target.value);
    if (temperature) {
      setTemperature(null);
    }
    //console.log(event.target.value);
    console.log(city);
  }

  return (
    <div>
      <form>
        <input
          type="search"
          placeholder="Type the city name"
          onChange={updateChange}
        />
        <input type="submit" value="Search" onClick={searchSubmit} />
      </form>
      <Weather2
        temperature={temperature}
        humidity={humidity}
        description={description}
        wind={wind}
      />
    </div>
  );
}
