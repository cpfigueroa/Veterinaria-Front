import React, { useState, useEffect } from 'react';

function Clima() {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const response = await fetch('https://api.openweathermap.org/data/2.5/weather?lat=-26.82414&lon=-65.2226&appid=091960382fa3f6e096e82ae3990d8325&units=Metric');
        const data = await response.json();
        setWeatherData(data);
      } catch (error) {
        console.error('Error de dato del clima', error);
      }
    };

    // Llama a la función de fetch al montar el componente y cada 10 minutos
    fetchWeatherData();
    const intervalId = setInterval(fetchWeatherData, 600000); // 10 minutos en milisegundos

    // Limpia el intervalo cuando el componente se desmonta
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="app-container">
      {/* Renderiza el contenido de tu aplicación, incluyendo los datos del clima */}
      {weatherData && (
        <div className="weather-info">
          <h2>{weatherData.name}</h2>
          <p>Temperatura: {weatherData.main.temp} °C</p>
          <p>Descripción: {weatherData.weather[0].description}</p>
        </div>
      )}
    </div>
  );
}

export default Clima;
