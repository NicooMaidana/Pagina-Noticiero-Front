import axios from 'axios';

const obtenerDatosClima = async () => {
  try {
    const response = await axios.get('https://practicas.coopmorteros.coop/clima');
    return response.data;
  } catch (error) {
    throw error;
  }
};

export default obtenerDatosClima;