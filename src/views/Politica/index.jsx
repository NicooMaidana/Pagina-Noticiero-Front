import React, { useState } from 'react';
import Pagination from '../../components/Pagination';
import EncabezadoSeccion from '../../components/encabezadoSeccion';
import CardSecciones from '../../components/cardSecciones';

const Politica = () => {
  
  const encabezadoData = [
    {
    titulo: "Política",
    }
  ];
  
  const politicaData = [
    {
      seccion: "Política",
      fecha_hora: "11/11/2021 12:35",
      titulo: "Balojate 2023 en Morteros",
      imagen: "https://practicas.coopmorteros.coop/public/image_news/656620a2b0435.jpg",
      subtitulo: "Se desarrolla con total normalidad en todos los centros educativos...",
    },{
      seccion: "Política",
      fecha_hora: "24/08/2022 10:52",
      titulo: "Se cerró la votación en las escuelas del país y comienza el conteo de votos",
      imagen: "https://practicas.coopmorteros.coop/public/image_news/6566207118be0.jpg",
      subtitulo: "Tras el cierre, comienza el recuento de votos. Los candidatos Sergio Massa y Javier Milei definen al próximo presidente de la Argentina. Los resultados se esperan para las 21...",
    },{
      seccion: "Política",
      fecha_hora: "02/01/2021 15:14",
      titulo: "Mónica Williner declaró sentirse agraviada y agradeció a 'Por Morteros'...",
      imagen: "https://practicas.coopmorteros.coop/public/image_news/656f613775ef7-6608.jpg",
      subtitulo: "La concejal Mónica Williner expresó su malestar y consideró como un agravio personal las declaraciones realizadas por la viceintendente Valeria Gandino durante la última sesión del Concejo Deliberante...",
    },{
      seccion: "Política",
      fecha_hora: "11/11/2021 12:35",
      titulo: "Balojate 2023 en Morteros",
      imagen: "https://practicas.coopmorteros.coop/public/image_news/656620a2b0435.jpg",
      subtitulo: "Se desarrolla con total normalidad en todos los centros educativos...",
    },{
      seccion: "Política",
      fecha_hora: "24/08/2022 10:52",
      titulo: "Se cerró la votación en las escuelas del país y comienza el conteo de votos",
      imagen: "https://practicas.coopmorteros.coop/public/image_news/6566207118be0.jpg",
      subtitulo: "Tras el cierre, comienza el recuento de votos. Los candidatos Sergio Massa y Javier Milei definen al próximo presidente de la Argentina. Los resultados se esperan para las 21...",
    },{
      seccion: "Política",
      fecha_hora: "02/01/2021 15:14",
      titulo: "Mónica Williner declaró sentirse agraviada y agradeció a 'Por Morteros'...",
      imagen: "https://practicas.coopmorteros.coop/public/image_news/656f613775ef7-6608.jpg",
      subtitulo: "La concejal Mónica Williner expresó su malestar y consideró como un agravio personal las declaraciones realizadas por la viceintendente Valeria Gandino durante la última sesión del Concejo Deliberante...",
    },{
      seccion: "Política",
      fecha_hora: "11/11/2021 12:35",
      titulo: "Balojate 2023 en Morteros",
      imagen: "https://practicas.coopmorteros.coop/public/image_news/656620a2b0435.jpg",
      subtitulo: "Se desarrolla con total normalidad en todos los centros educativos...",
    },{
      seccion: "Política",
      fecha_hora: "24/08/2022 10:52",
      titulo: "Se cerró la votación en las escuelas del país y comienza el conteo de votos",
      imagen: "https://practicas.coopmorteros.coop/public/image_news/6566207118be0.jpg",
      subtitulo: "Tras el cierre, comienza el recuento de votos. Los candidatos Sergio Massa y Javier Milei definen al próximo presidente de la Argentina. Los resultados se esperan para las 21...",
    },{
      seccion: "Política",
      fecha_hora: "02/01/2021 15:14",
      titulo: "Mónica Williner declaró sentirse agraviada y agradeció a 'Por Morteros'...",
      imagen: "https://practicas.coopmorteros.coop/public/image_news/656f613775ef7-6608.jpg",
      subtitulo: "La concejal Mónica Williner expresó su malestar y consideró como un agravio personal las declaraciones realizadas por la viceintendente Valeria Gandino durante la última sesión del Concejo Deliberante...",
    },{
      seccion: "Política",
      fecha_hora: "11/11/2021 12:35",
      titulo: "Balojate 2023 en Morteros",
      imagen: "https://practicas.coopmorteros.coop/public/image_news/656620a2b0435.jpg",
      subtitulo: "Se desarrolla con total normalidad en todos los centros educativos...",
    },{
      seccion: "Política",
      fecha_hora: "24/08/2022 10:52",
      titulo: "Se cerró la votación en las escuelas del país y comienza el conteo de votos",
      imagen: "https://practicas.coopmorteros.coop/public/image_news/6566207118be0.jpg",
      subtitulo: "Tras el cierre, comienza el recuento de votos. Los candidatos Sergio Massa y Javier Milei definen al próximo presidente de la Argentina. Los resultados se esperan para las 21...",
    },{
      seccion: "Política",
      fecha_hora: "02/01/2021 15:14",
      titulo: "Mónica Williner declaró sentirse agraviada y agradeció a 'Por Morteros'...",
      imagen: "https://practicas.coopmorteros.coop/public/image_news/656f613775ef7-6608.jpg",
      subtitulo: "La concejal Mónica Williner expresó su malestar y consideró como un agravio personal las declaraciones realizadas por la viceintendente Valeria Gandino durante la última sesión del Concejo Deliberante...",
    },
  ];

  // Parámetros de Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 10;
  const totalRows = politicaData.length;
  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = politicaData.slice(indexOfFirstRow, indexOfLastRow);


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

export default Politica