import React, { useState } from 'react';
import Pagination from '../../components/Pagination';
import EncabezadoSeccion from '../../components/encabezadoSeccion';
import CardSecciones from '../../components/cardSecciones';

const Educacion = () => {
  
  const encabezadoData = [
    {
    titulo: "Educación",
    }
  ];
  
  const educacionData = [
    {
      seccion: "Educación",
      fecha_hora: "11/11/2021 12:35",
      titulo: "Nueva escuela en Freyre: “Formaremos profesionales para nuestras propias empresa...",
      imagen: "https://practicas.coopmorteros.coop/public/image_news/0-655bc5080663c-6575.png",
      subtitulo: "Tal como se anunció días pasados, la localidad de Freyre contará con una nueva escuela secundaria de formación profesional, la primera de estas características en el pueblo y en el departamento San Ju...",
    },
  ];

  // Parámetros de Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 10;
  const totalRows = educacionData.length;
  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = educacionData.slice(indexOfFirstRow, indexOfLastRow);

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

export default Educacion