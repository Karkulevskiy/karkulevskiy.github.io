import React from "react";
import WeatherForm from "./components/WeatherForm";
import WeatherWidget from "./components/WeatherWidget";
import IPDisplay from "./components/IPDisplay";
import ThemeToggle from "./components/ThemeToggle"; // Импортируем компонент смены темы
import DeviceDisplay from "./components/DeviceDisplay"; // Импортируем компонент отображения устройства
import { WeatherProvider } from "./context/WeatherContext";
import "./style.css";

export default function App() {
  return (
    <WeatherProvider>
      <div className="container">
        <h1>Погода в вашем городе</h1>
        <ThemeToggle /> {/* Добавляем компонент смены темы */}
        <DeviceDisplay /> {/* Добавляем компонент отображения устройства */}
        <WeatherForm />
        <IPDisplay />
        <WeatherWidget />
      </div>
    </WeatherProvider>
  );
}
