import React, { useState } from "react";
import NecroCard from "../../components/NecroCard";
import Pagination from "../../components/Pagination";
import EncabezadoSeccion from "../../components/encabezadoSeccion";

const Necrologico = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 6; // Cambia este valor según cuántas cards quieres mostrar por página

  const necroData = [
    {
      nombre: "DELIA TERESA COLOMBERO DE CANDELLERO",
      subtitulo: "Falleció el 17/07/2024 a las 8:00 a la edad de 82 años en Morteros, Córdoba",
      sepelio: "18/07/2024, 12:00 - 17:30",
      aperturaSala: "17/07/2024, 12:00 - 17:30",
      iglesia: "17/07/2024, 12:00 - 17:30",
      cementerio: "San Salvador",
      casaDeDuelo: "Urquiza 60",
    },
    {
      nombre: "MARIA PÉREZ 2",
      subtitulo:
        "Falleció el 14/07/2024 a las 10:00 a la edad de 75 años en BARCELONA, ESPAÑA",
      sepelio: "Detalles del sepelio",
      aperturaSala: "Detalles de la apertura de sala",
      iglesia: "Detalles de la iglesia",
      cementerio: "Detalles del cementerio",
      casaDeDuelo: "Detalles de la casa de duelo",
    },
    {
      nombre: "MARIA PÉREZ 2",
      subtitulo:
        "Falleció el 14/07/2024 a las 10:00 a la edad de 75 años en BARCELONA, ESPAÑA",
      sepelio: "Detalles del sepelio",
      aperturaSala: "Detalles de la apertura de sala",
      iglesia: "Detalles de la iglesia",
      cementerio: "Detalles del cementerio",
      casaDeDuelo: "Detalles de la casa de duelo",
    },
    {
      nombre: "MARIA PÉREZ 2",
      subtitulo:
        "Falleció el 14/07/2024 a las 10:00 a la edad de 75 años en BARCELONA, ESPAÑA",
      sepelio: "Detalles del sepelio",
      aperturaSala: "Detalles de la apertura de sala",
      iglesia: "Detalles de la iglesia",
      cementerio: "Detalles del cementerio",
      casaDeDuelo: "Detalles de la casa de duelo",
    },
    {
      nombre: "MARIA PÉREZ 3",
      subtitulo:
        "Falleció el 14/07/2024 a las 10:00 a la edad de 75 años en BARCELONA, ESPAÑA",
      sepelio: "Detalles del sepelio",
      aperturaSala: "Detalles de la apertura de sala",
      iglesia: "Detalles de la iglesia",
      cementerio: "Detalles del cementerio",
      casaDeDuelo: "Detalles de la casa de duelo",
    },
    {
      nombre: "MARIA PÉREZ 4",
      subtitulo:
        "Falleció el 14/07/2024 a las 10:00 a la edad de 75 años en BARCELONA, ESPAÑA",
      sepelio: "Detalles del sepelio",
      aperturaSala: "Detalles de la apertura de sala",
      iglesia: "Detalles de la iglesia",
      cementerio: "Detalles del cementerio",
      casaDeDuelo: "Detalles de la casa de duelo",
    },
    {
      nombre: "MARIA PÉREZ 5",
      subtitulo:
        "Falleció el 14/07/2024 a las 10:00 a la edad de 75 años en BARCELONA, ESPAÑA",
      sepelio: "Detalles del sepelio",
      aperturaSala: "Detalles de la apertura de sala",
      iglesia: "Detalles de la iglesia",
      cementerio: "Detalles del cementerio",
      casaDeDuelo: "Detalles de la casa de duelo",
    },
    {
      nombre: "MARIA PÉREZ 6",
      subtitulo:
        "Falleció el 14/07/2024 a las 10:00 a la edad de 75 años en BARCELONA, ESPAÑA",
      sepelio: "Detalles del sepelio",
      aperturaSala: "Detalles de la apertura de sala",
      iglesia: "Detalles de la iglesia",
      cementerio: "Detalles del cementerio",
      casaDeDuelo: "Detalles de la casa de duelo",
    },
    {
      nombre: "MARIA PÉREZ 7",
      subtitulo:
        "Falleció el 14/07/2024 a las 10:00 a la edad de 75 años en BARCELONA, ESPAÑA",
      sepelio: "Detalles del sepelio",
      aperturaSala: "Detalles de la apertura de sala",
      iglesia: "Detalles de la iglesia",
      cementerio: "Detalles del cementerio",
      casaDeDuelo: "Detalles de la casa de duelo",
    },
    {
      nombre: "MARIA PÉREZ 8",
      subtitulo:
        "Falleció el 14/07/2024 a las 10:00 a la edad de 75 años en BARCELONA, ESPAÑA",
      sepelio: "Detalles del sepelio",
      aperturaSala: "Detalles de la apertura de sala",
      iglesia: "Detalles de la iglesia",
      cementerio: "Detalles del cementerio",
      casaDeDuelo: "Detalles de la casa de duelo",
    },
    {
      nombre: "MARIA PÉREZ 9",
      subtitulo:
        "Falleció el 14/07/2024 a las 10:00 a la edad de 75 años en BARCELONA, ESPAÑA",
      sepelio: "Detalles del sepelio",
      aperturaSala: "Detalles de la apertura de sala",
      iglesia: "Detalles de la iglesia",
      cementerio: "Detalles del cementerio",
      casaDeDuelo: "Detalles de la casa de duelo",
    },
    {
      nombre: "MARIA PÉREZ 10",
      subtitulo:
        "Falleció el 14/07/2024 a las 10:00 a la edad de 75 años en BARCELONA, ESPAÑA",
      sepelio: "Detalles del sepelio",
      aperturaSala: "Detalles de la apertura de sala",
      iglesia: "Detalles de la iglesia",
      cementerio: "Detalles del cementerio",
      casaDeDuelo: "Detalles de la casa de duelo",
    },
    {
      nombre: "MARIA PÉREZ 11",
      subtitulo:
        "Falleció el 14/07/2024 a las 10:00 a la edad de 75 años en BARCELONA, ESPAÑA",
      sepelio: "Detalles del sepelio",
      aperturaSala: "Detalles de la apertura de sala",
      iglesia: "Detalles de la iglesia",
      cementerio: "Detalles del cementerio",
      casaDeDuelo: "Detalles de la casa de duelo",
    },
    {
      nombre: "MARIA PÉREZ 12",
      subtitulo:
        "Falleció el 14/07/2024 a las 10:00 a la edad de 75 años en BARCELONA, ESPAÑA",
      sepelio: "Detalles del sepelio",
      aperturaSala: "Detalles de la apertura de sala",
      iglesia: "Detalles de la iglesia",
      cementerio: "Detalles del cementerio",
      casaDeDuelo: "Detalles de la casa de duelo",
    },
    {
      nombre: "MARIA PÉREZ 13",
      subtitulo:
        "Falleció el 14/07/2024 a las 10:00 a la edad de 75 años en BARCELONA, ESPAÑA",
      sepelio: "Detalles del sepelio",
      aperturaSala: "Detalles de la apertura de sala",
      iglesia: "Detalles de la iglesia",
      cementerio: "Detalles del cementerio",
      casaDeDuelo: "Detalles de la casa de duelo",
    },
    {
      nombre: "MARIA PÉREZ 14",
      subtitulo:
        "Falleció el 14/07/2024 a las 10:00 a la edad de 75 años en BARCELONA, ESPAÑA",
      sepelio: "Detalles del sepelio",
      aperturaSala: "Detalles de la apertura de sala",
      iglesia: "Detalles de la iglesia",
      cementerio: "Detalles del cementerio",
      casaDeDuelo: "Detalles de la casa de duelo",
    },
    {
      nombre: "MARIA PÉREZ 15",
      subtitulo:
        "Falleció el 14/07/2024 a las 10:00 a la edad de 75 años en BARCELONA, ESPAÑA",
      sepelio: "Detalles del sepelio",
      aperturaSala: "Detalles de la apertura de sala",
      iglesia: "Detalles de la iglesia",
      cementerio: "Detalles del cementerio",
      casaDeDuelo: "Detalles de la casa de duelo",
    },
    {
      nombre: "MARIA PÉREZ 16",
      subtitulo:
        "Falleció el 14/07/2024 a las 10:00 a la edad de 75 años en BARCELONA, ESPAÑA",
      sepelio: "Detalles del sepelio",
      aperturaSala: "Detalles de la apertura de sala",
      iglesia: "Detalles de la iglesia",
      cementerio: "Detalles del cementerio",
      casaDeDuelo: "Detalles de la casa de duelo",
    },
  ];
  const encabezadoData = [
    {
    titulo: "Necrológico",
    }
  ];

  // Calcula el índice de inicio y fin para la página actual
  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;

  // Extrae las cards para la página actual
  const currentCards = necroData.slice(indexOfFirstCard, indexOfLastCard);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  return (
    <>
      {encabezadoData.map((data, index) => (
        <EncabezadoSeccion
        key={index}
        titulo={data.titulo}
        />
      ))}
    <div className="container mx-auto px-4">
      <div className="flex justify-center cursor-default">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {currentCards.map((data, index) => (
            <NecroCard
              key={index}
              nombre={data.nombre}
              subtitulo={data.subtitulo}
              sepelio={data.sepelio}
              aperturaSala={data.aperturaSala}
              iglesia={data.iglesia}
              cementerio={data.cementerio}
              casaDeDuelo={data.casaDeDuelo}
            />
          ))}
        </div>
      </div>
      <Pagination
        currentPage={currentPage}
        totalCards={necroData.length}
        cardsPerPage={cardsPerPage}
        setCurrentPage={handlePageChange}
      />
    </div>
    </>
  );
};

export default Necrologico;
