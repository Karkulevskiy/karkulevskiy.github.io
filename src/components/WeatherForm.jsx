import { useState, useContext } from "react";
import { WeatherContext } from "../context/WeatherContext";
import { fetchWeather } from "../hooks/useWeather";

export default function WeatherForm() {
  const [city, setCity] = useState("");
  const { addWeather } = useContext(WeatherContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = await fetchWeather(city.trim());
    if (data) addWeather(data);
    setCity("");
  };

  return (
    <form onSubmit={handleSubmit} id="weather-form">
      <input
        id="city-input"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Введите город"
        required
      />
      <button type="submit">
        <img src="/cloud-search.svg" alt="Поиск" className="btn-icon" />
      </button>
    </form>
  );
}