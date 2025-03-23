import "./style.css";

const API_KEY = decodeURIComponent((atob("ZjUyODgyODI1MTIyOWM3ZjAxNmFjYTA4ZjE5N2JjYTQ=")));
const API_URL = "https://api.weatherstack.com/current?access_key=";


document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("weather-form");
  const input = document.getElementById("city-input");
  const ipButton = document.getElementById("get-ip-button");
  const ipDisplay = document.getElementById("ip-display");

  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    const city = input.value.trim();
    if (city) {
      const weatherData = await fetchWeather(city);
      if (weatherData) {
        addWeatherWidget(weatherData);
      }
      input.value = "";
    }
  });

  // Кнопка для получения IP-адреса
  ipButton.addEventListener("click", async () => {
    const ip = await fetchIP();
    if (ip) {
      ipDisplay.textContent = `Ваш IP: ${ip}`;
    }
  });

  const submitButton = document.querySelector("button[type='submit']");
  submitButton.innerHTML = `<img src="/cloud-search.svg" alt="Поиск" class="btn-icon">`;
});

async function fetchWeather(city) {
  try {
    const response = await fetch(`${API_URL}${API_KEY}&query=${city}`);
    const data = await response.json();
    if (data.success === false) {
      alert("Ошибка: " + data.error.info);
      return null;
    }
    return data;
  } catch (error) {
    console.error("Ошибка получения данных: ", error);
    return null;
  }
}

async function fetchIP() {
  try {
    const response = await fetch("https://api.ipify.org?format=json");
    const data = await response.json();
    return data.ip;
  } catch (error) {
    console.error("Ошибка получения IP: ", error);
    return null;
  }
}

function addWeatherWidget(data) {
  const widgetsContainer = document.getElementById("widgets-container");
  const widget = document.createElement("div");
  widget.classList.add("widget", "md-card");
  widget.innerHTML = `
    <div class="md-card-content">
      <h3 class="md-card-title">${data.location.name}, ${data.location.country}</h3>
      <img src="${data.current.weather_icons[0]}" alt="Weather Icon" class="md-card-icon">
      <p class="md-card-text">${data.current.temperature}°C</p>
      <p class="md-card-text">${data.current.weather_descriptions[0]}</p>
      <button class="md-btn remove-btn">Удалить</button>
    </div>
  `;
  widget.querySelector(".remove-btn").addEventListener("click", () => widget.remove());
  widgetsContainer.appendChild(widget);
}