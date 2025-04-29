import React, { useEffect, useState } from "react";
import "./Clima.css";
import CardClima from "../../components/CardClima";
import { TbTemperatureSun } from "react-icons/tb";
import { IoIosTimer, IoIosWater } from "react-icons/io";
import { FaCompressAlt, FaWind } from "react-icons/fa";
import EncabezadoSeccion from "../../components/encabezadoSeccion";
import { FaTemperatureArrowDown, FaTemperatureArrowUp } from "react-icons/fa6";
import { MdOutlineVisibility } from "react-icons/md";
import { FiSunrise, FiSunset } from "react-icons/fi";
import { LiaLocationArrowSolid } from "react-icons/lia";

const Clima = () => {
  const [datosClima, setDatosClima] = useState(null);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);
  const [horaActual, setHoraActual] = useState("");
  const [ciudad, setCiudad] = useState("");
  const [fechaActual, setFechaActual] = useState("");

  const API_KEY = "fc1e205c2beefe04393d1ae2a6ea1b3d";

  useEffect(() => {
    const obtenerUbicacionYClima = () => {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const lat = position.coords.latitude;
          const lon = position.coords.longitude;

          try {
            const response = await fetch(
              `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric&lang=es`
            );

            if (!response.ok) {
              throw new Error(
                `HTTP ${response.status} - ${response.statusText}`
              );
            }

            const data = await response.json();

            const formatearFechaCompleta = (fecha) => {
              const fechaFormateada = fecha.toLocaleDateString("es-ES", {
                weekday: "long",
                day: "numeric",
                month: "long",
                year: "numeric",
              });
              return (
                fechaFormateada.charAt(0).toUpperCase() +
                fechaFormateada.slice(1)
              );
            };

            const palabraToUpper = (texto) => {
              return texto.replace(/\b\w/g, (letra) => letra.toUpperCase());
            };

            const fechaCompleta = new Date();
            const hora = fechaCompleta.toLocaleTimeString("us-AR", {
              hour: "2-digit",
              minute: "2-digit",
            });
            const fecha = formatearFechaCompleta(fechaCompleta);
            setFechaActual(fecha);
            const temperatura = data.main.temp;
            const pronostico = palabraToUpper(data.weather[0].description);
            const humedad = data.main.humidity;
            const sensacion_termica = data.main.feels_like;
            const viento_velocidad = data.wind.speed;
            const icono = data.weather[0].icon;
            const temperatura_min = data.main.temp_min;
            const temperatura_max = data.main.temp_max;
            const presion = data.main.pressure;
            const visibilidad = data.visibility / 1000;
            const direccionViento = data.wind.deg;

            const nombreCiudad = data.name;
            const pais = data.sys.country;

            setCiudad(`${nombreCiudad}, ${pais}`);

            const temperaturaFormateada = temperatura.toFixed(1);

            const amanecer =
              new Date(data.sys.sunrise * 1000).toLocaleTimeString("us-AR", {
                hour: "2-digit",
                minute: "2-digit",
              }) + " hs";
            const atardecer =
              new Date(data.sys.sunset * 1000).toLocaleTimeString("us-AR", {
                hour: "2-digit",
                minute: "2-digit",
              }) + " hs";
            const largo_dia = calcularHorasSol(
              data.sys.sunrise,
              data.sys.sunset
            );

            setDatosClima({
              hora,
              fecha,
              temperatura,
              temperaturaFormateada,
              pronostico,
              humedad,
              sensacion_termica,
              viento_velocidad,
              direccionViento,
              temperatura_min,
              temperatura_max,
              presion,
              visibilidad,
              icono,
              amanecer,
              atardecer,
              largo_dia,
            });

            setCargando(false);
          } catch (err) {
            console.error("Error al obtener clima:", err);
            setError(`No se pudo obtener el clima: ${err.message}`);
            setCargando(false);
          }
        },
        (err) => {
          console.error("No se pudo obtener la ubicación:", err);
          setError("No se pudo obtener la ubicación del usuario.");
          setCargando(false);
        }
      );
    };

    obtenerUbicacionYClima();

    const intervalo = setInterval(() => {
      setHoraActual(
        new Date().toLocaleTimeString("us-AR", {
          hour: "2-digit",
          minute: "2-digit",
        }) + " hs"
      );
    }, 1000);

    return () => clearInterval(intervalo);
  }, []);

  const convertirDireccionViento = (grados) => {
    const direcciones = ["N", "NE", "E", "SE", "S", "SO", "O", "NO"];
    const indice = Math.round(grados / 45) % 8;
    return direcciones[indice];
  };

  const calcularHorasSol = (sunrise, sunset) => {
    const duracion = (sunset - sunrise) / 3600;
    return `${Math.floor(duracion)}h ${Math.round((duracion % 1) * 60)}min`;
  };

  if (cargando) return <div>Cargando...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!datosClima) return <div>No hay datos disponibles.</div>;

  const encabezadoData = [{ titulo: "Clima" }];
  const dataDetalle = [
    {
      icono: (
        <LiaLocationArrowSolid
          style={{
            transform: `rotate(${datosClima.direccionViento}deg)`,
            transition: "transform 0.3s ease-in-out",
          }}
        />
      ),
      titulo: "Dirección del viento",
      dato: `${convertirDireccionViento(datosClima.direccionViento)} (${
        datosClima.direccionViento
      }°)`,
    },
    {
      icono: <TbTemperatureSun />,
      titulo: "Sensación térmica",
      dato: `${datosClima.sensacion_termica} °C`,
    },
    {
      icono: <FaTemperatureArrowDown />,
      titulo: "Temp. mínima",
      dato: `${datosClima.temperatura_min} °C`,
    },
    {
      icono: <FaTemperatureArrowUp />,
      titulo: "Temp. máxima",
      dato: `${datosClima.temperatura_max} °C`,
    },
    {
      icono: <IoIosWater />,
      titulo: "Humedad",
      dato: `${datosClima.humedad} %`,
    },
    {
      icono: <FaWind />,
      titulo: "Viento",
      dato: `${datosClima.viento_velocidad} m/s`,
    },
    {
      icono: <MdOutlineVisibility />,
      titulo: "Visibilidad",
      dato: `${datosClima.visibilidad} km`,
    },
    {
      icono: <FaCompressAlt />,
      titulo: "Presión atmosférica",
      dato: `${datosClima.presion} hPa`,
    },
    {
      icono: <FiSunrise />,
      titulo: "Amanecer",
      dato: `${datosClima.amanecer}`,
    },
    {
      icono: <FiSunset />,
      titulo: "Atardecer",
      dato: `${datosClima.atardecer}`,
    },
    {
      icono: <IoIosTimer />,
      titulo: "Duración del día",
      dato: `${datosClima.largo_dia}`,
    },
  ];

  return (
    <>
      {encabezadoData.map((data, index) => (
        <EncabezadoSeccion key={index} titulo={data.titulo} />
      ))}

      <div className="w-full flex flex-col md:flex-row items-start rounded-md bg-zinc-950 p-4 gap-4">
        {/* Card del clima */}
        <div className="w-full md:w-1/2 flex justify-center">
          <div className="w-full max-w-sm">
            <CardClima
              dataWeather={{
                hora: horaActual,
                fecha: fechaActual,
                ciudad: ciudad,
                temp: datosClima.temperaturaFormateada + "°C",
                pronostico: datosClima.pronostico,
                humedad: datosClima.humedad + "%",
                st: datosClima.sensacion_termica + "°C",
                imgclima: `src/assets/img/weather_icons/${datosClima.icono}.png`,
              }}
            />
          </div>
        </div>

        {/* Datos destacados */}
        <div className="w-full md:w-1/2 flex justify-center">
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full max-w-3xl">
            {dataDetalle.map((item, index) => (
              <div
                key={index}
                className="bg-zinc-900 cursor-default text-gray-200 rounded-lg p-4 shadow-md h-24 flex items-center hover:scale-105 transition-transform duration-200"
              >
                <div className="text-3xl mr-3">{item.icono}</div>
                <div>
                  <h4 className="text-sm font-semibold">{item.titulo}</h4>
                  <p className="text-sm text-gray-400">{item.dato}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Clima;
