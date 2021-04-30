import axios from 'axios';
// https://api.openweathermap.org/data/2.5/weather
const URL = 'Entrer Weather API URL';
const API_KEY = 'Enter Your API_KEY';
export const featchWeather = async (query) => {
  const { data } = await axios.get(URL, {
    params: {
      q: query,
      units: 'metric',
      APPID: API_KEY,
    },
  });

  return data;
};
