import { useContext } from "react";
import { WeatherContext } from "../context/WeatherContext";

export default function WeatherWidget() {
  const { weatherList, removeWeather } = useContext(WeatherContext);

  return (
    <div id="widgets-container">
      {weatherList.map((data, i) => (
        <div key={i} className="widget md-card">
          <div className="md-card-content">
            <h3 className="md-card-title">{data.location.name}, {data.location.country}</h3>
            <img src={data.current.weather_icons[0]} alt="Weather Icon" className="md-card-icon" />
            <p className="md-card-text">{data.current.temperature}°C</p>
            <p className="md-card-text">{data.current.weather_descriptions[0]}</p>
            <button className="md-btn remove-btn" onClick={() => removeWeather(i)}>Удалить</button>
          </div>
        </div>
      ))}
    </div>
  );
}