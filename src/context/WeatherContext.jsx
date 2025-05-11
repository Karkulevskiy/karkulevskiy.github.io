import { createContext, useState } from "react";

export const WeatherContext = createContext();

export function WeatherProvider({ children }) {
  const [weatherList, setWeatherList] = useState([]);
  const [ip, setIP] = useState("");

  const addWeather = (data) => {
    setWeatherList((prev) => [...prev, data]);
  };

  const removeWeather = (index) => {
    setWeatherList((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <WeatherContext.Provider value={{ weatherList, addWeather, removeWeather, ip, setIP }}>
      {children}
    </WeatherContext.Provider>
  );
}