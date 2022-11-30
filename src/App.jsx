import React, { useEffect, useState } from 'react';
import hotBg from './assets/hot.jpg';
import coldBg from './assets/cold.jpg';
import Descriptions from './components/Descriptions';
import { getFormattedWeatherData } from './weatherService';

function App() {
  const [city, setCity] = useState('Hrodna');
  const [weather, setWeather] = useState(null);
  const [units, setUnits] = useState('metric');
  const [bg, setBg] = useState(hotBg);

  useEffect(() => {
    const fetchWeatherData = async () => {
      const data = await getFormattedWeatherData(city, units);
      setWeather(data);

      // dynamic bg
      const threshhold = units === 'mertic' ? 20 : 60;
      if (data.temp <= threshhold) setBg(coldBg);
      else setBg(hotBg);
    };
    fetchWeatherData();
  }, [city, units]);

  const handleUnitsClick = (e) => {
    const button = e.currentTarget;
    const currentUnit = button.innerText.slice(1);
    const isCelsius = currentUnit === 'C';
    button.innerText = isCelsius ? '°F' : '°C';
    setUnits(isCelsius ? 'metric' : 'imperial');
  };

  const enterKeyPressed = (e) => {
    if (e.keyCode === 13) {
      setCity(e.currentTarget.value);
      e.currentTarget.blur();
    }
  };

  return (
    <div className="App" style={{ backgroundImage: `url(${coldBg})` }}>
      <div className="overlay">
        { weather && (
          <div className="container">
            <div className="section section_inputs">
              <input onKeyDown={enterKeyPressed} type="text" name="city" placeholder="Enter city..." />
              <button onClick={(e) => handleUnitsClick(e)}>°F</button>
            </div>
            <div className="section section_temperature">
              <div className="icon">
                <h3>{`${weather.name}, ${weather.country}`}</h3>
                <img src={weather.iconURL} alt="weatherIcon" />
                <h3>{weather.description}</h3>
              </div>
              <div className="temperature">
                <h1>{`${weather.temp.toFixed()} °${units === 'metric' ? 'C' : 'F'}`}</h1>
              </div>
            </div>
            <Descriptions weather={weather} units={units} />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
