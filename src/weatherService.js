const API_KEY = '10dd269dfe40f9fc05939fceecd32a62';

const getFormattedWeatherData = async (city, units = 'metric') => {
  const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=${units}`;

  const data = await fetch(URL)
    .then((res) => res.json())
    .then((data) => data);

  const {
    weather,
    main: {temp, feels_like, temp_min, temp_max, pressure, humidity},
    wind: {speed},
    sys: {country},
    name,
  } = data;

  const {description, icon} = weather[0];

  return {
    description, icon, temp, feels_like, temp_min, temp_max, pressure, humidity, speed, country, name
  }
};

export { getFormattedWeatherData };
