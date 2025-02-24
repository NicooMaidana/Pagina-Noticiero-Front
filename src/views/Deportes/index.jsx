import React, { useState } from 'react';
import Pagination from '../../components/Pagination';
import EncabezadoSeccion from '../../components/encabezadoSeccion';
import CardSecciones from '../../components/cardSecciones';

const Deportes = () => {
  
  const encabezadoData = [
    {
    titulo: "Deportes",
    }
  ];
  
  const deportesData = [
    {
      seccion: "Deportes",
      fecha_hora: "11/11/2021 12:35",
      titulo: "Torneo Campeonato: Penales y Definiciones por penales para Conocer a los Semif...",
      imagen: "https://practicas.coopmorteros.coop/public/image_news/656f4401e3284-6607.jpg",
      subtitulo: "La jornada del Torneo Campeonato estuvo repleta de emociones y definiciones por tiros desde el punto del penal que determinaron a los equipos que avanzarán a las semifinales. Penales, atajadas heroica...",
    },{
      seccion: "Deportes",
      fecha_hora: "24/08/2022 10:52",
      titulo: "Resultados Contundentes en el Inicio de los Cuartos de Final de la Morterense de...",
      imagen: "https://practicas.coopmorteros.coop/public/image_news/65686438a9a54.jpg",
      subtitulo: "En la Morterense de Básquet se jugaron los primeros enfrentamientos de los cuartos de final del Torneo Clausura. Tiro Federal se destacó al vencer a San Jorge por 86 a 70 en Brinkmann, dejando abierta...",
    },{
      seccion: "Deportes",
      fecha_hora: "24/08/2022 10:52",
      titulo: "Resultados Contundentes en el Inicio de los Cuartos de Final de la Morterense de...",
      imagen: "https://practicas.coopmorteros.coop/public/image_news/65686438a9a54.jpg",
      subtitulo: "En la Morterense de Básquet se jugaron los primeros enfrentamientos de los cuartos de final del Torneo Clausura. Tiro Federal se destacó al vencer a San Jorge por 86 a 70 en Brinkmann, dejando abierta...",
    },{
      seccion: "Deportes",
      fecha_hora: "24/08/2022 10:52",
      titulo: "Resultados Contundentes en el Inicio de los Cuartos de Final de la Morterense de...",
      imagen: "https://practicas.coopmorteros.coop/public/image_news/65686438a9a54.jpg",
      subtitulo: "En la Morterense de Básquet se jugaron los primeros enfrentamientos de los cuartos de final del Torneo Clausura. Tiro Federal se destacó al vencer a San Jorge por 86 a 70 en Brinkmann, dejando abierta...",
    },{
      seccion: "Deportes",
      fecha_hora: "24/08/2022 10:52",
      titulo: "Resultados Contundentes en el Inicio de los Cuartos de Final de la Morterense de...",
      imagen: "https://practicas.coopmorteros.coop/public/image_news/65686438a9a54.jpg",
      subtitulo: "En la Morterense de Básquet se jugaron los primeros enfrentamientos de los cuartos de final del Torneo Clausura. Tiro Federal se destacó al vencer a San Jorge por 86 a 70 en Brinkmann, dejando abierta...",
    },{
      seccion: "Deportes",
      fecha_hora: "24/08/2022 10:52",
      titulo: "Resultados Contundentes en el Inicio de los Cuartos de Final de la Morterense de...",
      imagen: "https://practicas.coopmorteros.coop/public/image_news/65686438a9a54.jpg",
      subtitulo: "En la Morterense de Básquet se jugaron los primeros enfrentamientos de los cuartos de final del Torneo Clausura. Tiro Federal se destacó al vencer a San Jorge por 86 a 70 en Brinkmann, dejando abierta...",
    },{
      seccion: "Deportes",
      fecha_hora: "24/08/2022 10:52",
      titulo: "Resultados Contundentes en el Inicio de los Cuartos de Final de la Morterense de...",
      imagen: "https://practicas.coopmorteros.coop/public/image_news/65686438a9a54.jpg",
      subtitulo: "En la Morterense de Básquet se jugaron los primeros enfrentamientos de los cuartos de final del Torneo Clausura. Tiro Federal se destacó al vencer a San Jorge por 86 a 70 en Brinkmann, dejando abierta...",
    },{
      seccion: "Deportes",
      fecha_hora: "24/08/2022 10:52",
      titulo: "Resultados Contundentes en el Inicio de los Cuartos de Final de la Morterense de...",
      imagen: "https://practicas.coopmorteros.coop/public/image_news/65686438a9a54.jpg",
      subtitulo: "En la Morterense de Básquet se jugaron los primeros enfrentamientos de los cuartos de final del Torneo Clausura. Tiro Federal se destacó al vencer a San Jorge por 86 a 70 en Brinkmann, dejando abierta...",
    },{
      seccion: "Deportes",
      fecha_hora: "24/08/2022 10:52",
      titulo: "Resultados Contundentes en el Inicio de los Cuartos de Final de la Morterense de...",
      imagen: "https://practicas.coopmorteros.coop/public/image_news/65686438a9a54.jpg",
      subtitulo: "En la Morterense de Básquet se jugaron los primeros enfrentamientos de los cuartos de final del Torneo Clausura. Tiro Federal se destacó al vencer a San Jorge por 86 a 70 en Brinkmann, dejando abierta...",
    },{
      seccion: "Deportes",
      fecha_hora: "24/08/2022 10:52",
      titulo: "Resultados Contundentes en el Inicio de los Cuartos de Final de la Morterense de...",
      imagen: "https://practicas.coopmorteros.coop/public/image_news/65686438a9a54.jpg",
      subtitulo: "En la Morterense de Básquet se jugaron los primeros enfrentamientos de los cuartos de final del Torneo Clausura. Tiro Federal se destacó al vencer a San Jorge por 86 a 70 en Brinkmann, dejando abierta...",
    },{
      seccion: "Deportes",
      fecha_hora: "24/08/2022 10:52",
      titulo: "Resultados Contundentes en el Inicio de los Cuartos de Final de la Morterense de...",
      imagen: "https://practicas.coopmorteros.coop/public/image_news/65686438a9a54.jpg",
      subtitulo: "En la Morterense de Básquet se jugaron los primeros enfrentamientos de los cuartos de final del Torneo Clausura. Tiro Federal se destacó al vencer a San Jorge por 86 a 70 en Brinkmann, dejando abierta...",
    },{
      seccion: "Deportes",
      fecha_hora: "24/08/2022 10:52",
      titulo: "Resultados Contundentes en el Inicio de los Cuartos de Final de la Morterense de...",
      imagen: "https://practicas.coopmorteros.coop/public/image_news/65686438a9a54.jpg",
      subtitulo: "En la Morterense de Básquet se jugaron los primeros enfrentamientos de los cuartos de final del Torneo Clausura. Tiro Federal se destacó al vencer a San Jorge por 86 a 70 en Brinkmann, dejando abierta...",
    },
  ];

  // Parámetros de Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 10;
  const totalRows = deportesData.length;
  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = deportesData.slice(indexOfFirstRow, indexOfLastRow);

  return (
    <>
      {encabezadoData.map((data, index) => (
        <EncabezadoSeccion
        key={index}
        titulo={data.titulo}
        />
      ))}
      <div className="container mx-auto px-auto">
        <div className="flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-6 sm:gap-12 ">
            {currentRows.map((data, index) => (
              <CardSecciones
                key={index}
                seccion={data.seccion}
                fecha_hora={data.fecha_hora}
                titulo={data.titulo}
                imagen={data.imagen}
                subtitulo={data.subtitulo}
              />
            ))}
          </div>
        </div>
        <Pagination 
        currentPage={currentPage}
        totalCards={totalRows}
        cardsPerPage={rowsPerPage}
        setCurrentPage={setCurrentPage}
        />
      </div>
    </>
  )
}

export default Deportes