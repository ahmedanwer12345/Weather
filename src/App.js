import { useState } from "react";
import "./App.css";
import React from "react";

function App() {
  const [data, setData] = useState([{}]);
  const [city, setCity] = useState("");
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=797fd08b84b5d40960fcbd420046ccc4`;
  const getWeather = (e) => {
    if (e.key === "Enter") {
      fetch(url)
        .then((response) => response.json())
        .then((d) => {
          setData(d);
          console.log(data);
          setCity("");
        });
    }
  };

  return (
    <div className="app">
      <div className="container">
        <input
          className="input"
          placeholder="Enter city or  Country...."
          onChange={(e) => setCity(e.target.value)}
          value={city}
          onKeyPress={getWeather}
        ></input>
        {typeof data.main != "undefined" ? (
          <div className="weather-data">
            <div className="location">
              {data.name}, {data.sys.country}
            </div>
            <div className="temp">{Math.round(data.main.temp)}°c</div>
            <div className="weather">{data.weather[0].main} </div>
          </div>
        ) : (
          <div className="weather-data">please enter country </div>
        )}
        {data.cod === "404" ? (
          <p className="weather-data">City Not Found</p>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}

export default App;
