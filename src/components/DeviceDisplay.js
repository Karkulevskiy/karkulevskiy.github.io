// components/DeviceDisplay.js
import React, { useEffect, useState } from "react";

export default function DeviceDisplay() {
  const [device, setDevice] = useState("");

  useEffect(() => {
    const userAgent = navigator.userAgent;
    if (/mobile/i.test(userAgent)) {
      setDevice("Мобильное устройство");
    } else if (/tablet/i.test(userAgent)) {
      setDevice("Планшет");
    } else {
      setDevice("Настольный компьютер");
    }
  }, []);

  return <div id="device-display">Вы используете: {device}</div>;
}
