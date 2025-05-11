const API_KEY = decodeURIComponent(atob("YTA5NmY0ZTRmOWY3MDQ3ZjRiMmEyYjNlOTQ1NzhjOWE="));
const API_URL = `https://api.weatherstack.com/current?access_key=${API_KEY}`;


export async function fetchWeather(city) {
  try {
    const res = await fetch(`${API_URL}&query=${city}`);
    const data = await res.json();
    console.log(data);
    if (data.success === false) throw new Error(data.error.info);
    return data;
  } catch (err) {
    alert("Ошибка: " + err.message);
    return null;
  }
}

export async function fetchIP() {
  try {
    const res = await fetch("https://api.ipify.org?format=json");
    const data = await res.json();
    return data.ip;
  } catch (err) {
    console.error("Ошибка получения IP:", err);
    return null;
  }
}