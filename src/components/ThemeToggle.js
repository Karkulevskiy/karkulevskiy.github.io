// components/ThemeToggle.js
import React, { useState, useEffect } from "react";

export default function ThemeToggle() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleTheme = () => {
    setIsDarkTheme((prev) => !prev);
  };

  useEffect(() => {
    document.body.classList.toggle("dark-theme", isDarkTheme);
  }, [isDarkTheme]);

  return (
    <button onClick={toggleTheme} id="theme-toggle-button">
      {isDarkTheme ? "Светлая тема" : "Темная тема"}
    </button>
  );
}
