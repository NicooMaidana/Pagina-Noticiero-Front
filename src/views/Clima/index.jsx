import React, { useEffect, useState } from "react";
import "./Clima.css";
import CardClima from "../../components/CardClima";
import InfoClimaCard from "../../components/CardClimaDetalle";
import { FaLocationArrow, FaMoon, FaSun, FaWind } from "react-icons/fa";
import { FiSunrise, FiSunset } from "react-icons/fi";
import { TbClock24, TbClockHour3, TbTemperatureSun } from "react-icons/tb";
import { FaArrowsDownToLine, FaCalendarDay, FaSunPlantWilt } from "react-icons/fa6";
import { IoIosWater } from "react-icons/io";
import { MdDewPoint } from "react-icons/md";
import CardClimaExtendido from "../../components/CardClimaExtendido";
import EncabezadoSeccion from "../../components/encabezadoSeccion";
import { IoRainy } from "react-icons/io5";
import obtenerDatosClima from '../../../utils/request';


const Clima = () => {
  const [datosClima, setDatosClima] = useState(null);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    obtenerDatosClima()
      .then(data => {
        setDatosClima(data);
        setCargando(false);
      })
      .catch(error => {
        setError(error.message);
        setCargando(false);
      });
  }, []);

  if (cargando) {
    return <div>Cargando...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!datosClima) {
    return <div>No se han obtenido los datos del clima.</div>;
  }

  const dataDetalle = [
    { icono: <FiSunrise />, titulo: "Amanecer", dato: datosClima.amanecer },
    { icono: <FiSunset />, titulo: "Atardecer", dato: datosClima.atardecer },
    { icono: <TbClockHour3 />, titulo: "Horas de sol", dato: datosClima.largo_dia },
    {
      icono: <TbTemperatureSun />,
      titulo: "Sensación térmica",
      dato: datosClima.sensacion_termica + " °C",
    },
    {
      icono: <FaArrowsDownToLine />,
      titulo: "Presión atmosférica",
      dato: datosClima.presion_atmosferica + " hPa",
    },
    { icono: <IoIosWater />, titulo: "Índice de humedad", dato: datosClima.indice_humedad + " °C" },
    { icono: <FaSunPlantWilt />, titulo: "Índice de calor", dato: datosClima.indice_calor + " °C" },
    { icono: <MdDewPoint />, titulo: "Punto de rocío", dato: datosClima.punto_rocio + " °C" },
    
    {
      icono: <FaLocationArrow />,
      titulo: "Dirección del viento",
      dato: `N - ${datosClima.viento_direccion}°`,
    },
    { icono: <FaWind />, titulo: "Velocidad del viento", dato: datosClima.viento_velocidad + " km/h" },
    { icono: <FaMoon />, titulo: "Fase lunar", dato: datosClima.fases_luna },
    { icono: <IoRainy />, titulo: "Lluvia", dato: datosClima.lluvia + " mm" },
    { icono: <TbClock24 />, titulo: "Lluvia 24hs", dato: datosClima.lluvia_24_horas + " mm" },
    { icono: <FaCalendarDay />, titulo: "Dias seguidos sin lluvia", dato: datosClima.dias_seguidos_seco + " días" },
    { icono: <FaCalendarDay />, titulo: "Dias seguidos de lluvia", dato: datosClima.dias_seguidos_lluvia + " días" },

  ];

  const dataClimaExtendido = [
    {
      dia: "Martes",
      fecha: "23/07",
      img: "src/assets/img/Clima/lightning.svg",
      maxTemp: "25°C",
      minTemp: "15°C",
      tiempo: "Lluvia",
    },
    {
      dia: "Miercoles",
      fecha: "24/07",
      img: "src/assets/img/Clima/sunny.svg",
      maxTemp: "32°C",
      minTemp: "16°C",
      tiempo: "Soleado",
    },
    {
      dia: "Jueves",
      fecha: "25/07",
      img: "src/assets/img/Clima/fog.svg",
      maxTemp: "29°C",
      minTemp: "12°C",
      tiempo: "Lluvia ligera",
    },
  ];

  const encabezadoData = [
    {
      titulo: "Clima",
    },
  ];

  return (
    <>
      {encabezadoData.map((data, index) => (
        <EncabezadoSeccion key={index} titulo={data.titulo} />
      ))}
      <div className="flex flex-col gap-8 sm:gap-12 lg:px-24 pt-4">
        <div className="flex flex-col sm:flex-row border bg-slate-100 shadow-md rounded-3xl m-5 p-2">
          <div className="basis-1/3 xl:max-w-xl">
            <CardClima dataWeather={{
              hora: datosClima.hora, 
              temp: datosClima.temperatura + "°C", 
              tiempo: datosClima.pronostico, 
              humedad: datosClima.humedad + "%", 
              st: datosClima.sensacion_termica + "°C", 
              imgclima: "src/assets/img/Clima/lightning.svg"
              }} />
          </div>
          <div className="basis-2/3 flex flex-wrap items-center justify-center">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 2xl:grid-cols-4 gap-2">
              {dataDetalle.map((item, index) => (
                <InfoClimaCard
                  key={index}
                  icono={item.icono}
                  titulo={item.titulo}
                  dato={item.dato}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          {dataClimaExtendido.map((data, index) => (
            <CardClimaExtendido key={index} dataClimaExtendido={data} />
          ))}
        </div>
      </div>
     
    </>
  );
};

export default Clima;
