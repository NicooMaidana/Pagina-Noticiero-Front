import axios from 'axios';

const API_KEY = 'fc1e205c2beefe04393d1ae2a6ea1b3d'; // reemplazá por tu clave de OpenWeatherMap
const CIUDAD = 'Morteros'; // o cualquier ciudad
const UNIDADES = 'metric'; // 'metric' para °C, 'imperial' para °F

const obtenerDatosClima = async () => {
  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${CIUDAD}&units=${UNIDADES}&lang=es&appid=${API_KEY}`
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

export default obtenerDatosClima;
