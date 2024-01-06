import { useState } from "react";
import style from "./weatherCard.module.css";
import Textfield from "@/themes/components/textField";

const Weathercard = () => {
  const [city, setCity] = useState("");
  // const [country, setCountry] = useState("");
  const [weatherData, setWeatherData] = useState("null");
  // const [result, setResult] = useState("null");

  const [temperature, setTemperature] = useState(null);
  const [temp_min, setMinTemp] = useState(null);

  const fetchData = async () => {
    console.log("Button clicked");
z
    const API = "7a53fdb2e72be15ffe40a6b7d826a92d";
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city},&units=metric&appid=${API}`
      );
      const data = await response.json();
      setWeatherData(data);

      if (data.main && data.main.temp) {
        const temp = data.main.temp;
        const temp_min = data.main.temp_min;
        setMinTemp(temp_min);
        console.log("min temp :", temp_min);
        setTemperature(temp);
        console.log("Temperature:", temp);
      }
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };

  return (
    <div className={style.weather}>
      <div className={style.card}>
        <h1>Get weather</h1>
        <div className={style.row}>
          <p>City </p>
          <Textfield
            value={city}
            placeholder={"city"}
            onChange={(e) => setCity(e.target.value)}
          />
        </div>
        {/* <div className={style.row}>
          <p>Country </p>
          <Textfield value={country} placeholder={"Country"} onChange={(e) => setCountry(e.target.value)} />
        </div> */}
        <button onClick={fetchData}>Get Data</button>
        {weatherData && (
          <div>
            <h2>Weather Data:</h2>
            {temperature !== null && (
              <p>
                Temperature: <strong>{temperature}</strong>{" "}
              </p>
            )}
            {temp_min !== null && (
              <p>
                Minimum Temperature: <strong>{temp_min}</strong>
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Weathercard;
