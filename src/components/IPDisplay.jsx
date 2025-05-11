import { useContext } from "react";
import { WeatherContext } from "../context/WeatherContext";
import { fetchIP } from "../hooks/useWeather";

export default function IPDisplay() {
  const { ip, setIP } = useContext(WeatherContext);

  const handleClick = async () => {
    const ip = await fetchIP();
    if (ip) setIP(ip);
  };

  return (
    <div>
      <button id="get-ip-button" onClick={handleClick}>Узнать свой IP</button>
      <div id="ip-display">{ip && `Ваш IP: ${ip}`}</div>
    </div>
  );
}