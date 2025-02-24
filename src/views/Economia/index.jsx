import React, { useState } from 'react';
import Pagination from '../../components/Pagination';
import EncabezadoSeccion from '../../components/encabezadoSeccion';
import CardSecciones from '../../components/cardSecciones';

const Economia = () => {
  
  const encabezadoData = [
    {
    titulo: "Economía",
    }
  ];
  
  const economiaData = [
    {
      seccion: "Economía",
      fecha_hora: "11/11/2021 12:35",
      titulo: "Aseguran que la paralización de la obra pública no tendría impacto en Córdoba",
      imagen: "https://practicas.coopmorteros.coop/public/image_news/6578580a2633b-6602.jpg",
      subtitulo: "El anuncio de Milei sobre la eliminación del gasto público en obras y su propuesta de modelo privado genera incertidumbre en el sector de la construcción. Qué sucedería en Córdoba...",
    },
  ];

  // Parámetros de Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 10;
  const totalRows = economiaData.length;
  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = economiaData.slice(indexOfFirstRow, indexOfLastRow);


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

export default Economia