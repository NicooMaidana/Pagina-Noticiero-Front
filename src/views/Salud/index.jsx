import React, { useState } from 'react';
import Pagination from '../../components/Pagination';
import EncabezadoSeccion from '../../components/encabezadoSeccion';
import CardSecciones from '../../components/cardSecciones';


const Salud = () => {
  
  const encabezadoData = [
    {
    titulo: "Salud",
    }
  ];
  
  const saludData = [
    {
      seccion: "Salud",
      fecha_hora: "11/11/2021 12:35",
      titulo: "Menor accidentado: “Evoluciona favorablemente, se encuentra estable”",
      imagen: "https://practicas.coopmorteros.coop/public/image_news/6578797d6a3bc-6603.jpg",
      subtitulo: "Lo dijo el director del Hospital Iturraspe de San Francisco, Valentín Vicente respecto al  estado de salud del menor, “evolucionó favorablemente, se le pudo retirar la asistencia respiratoria me...",
    },{
      seccion: "Salud",
      fecha_hora: "11/11/2021 12:35",
      titulo: "Menor accidentado: “Evoluciona favorablemente, se encuentra estable”",
      imagen: "https://practicas.coopmorteros.coop/public/image_news/6578797d6a3bc-6603.jpg",
      subtitulo: "Lo dijo el director del Hospital Iturraspe de San Francisco, Valentín Vicente respecto al  estado de salud del menor, “evolucionó favorablemente, se le pudo retirar la asistencia respiratoria me...",
    },{
      seccion: "Salud",
      fecha_hora: "11/11/2021 12:35",
      titulo: "Menor accidentado: “Evoluciona favorablemente, se encuentra estable”",
      imagen: "https://practicas.coopmorteros.coop/public/image_news/6578797d6a3bc-6603.jpg",
      subtitulo: "Lo dijo el director del Hospital Iturraspe de San Francisco, Valentín Vicente respecto al  estado de salud del menor, “evolucionó favorablemente, se le pudo retirar la asistencia respiratoria me...",
    },{
      seccion: "Salud",
      fecha_hora: "11/11/2021 12:35",
      titulo: "Menor accidentado: “Evoluciona favorablemente, se encuentra estable”",
      imagen: "https://practicas.coopmorteros.coop/public/image_news/6578797d6a3bc-6603.jpg",
      subtitulo: "Lo dijo el director del Hospital Iturraspe de San Francisco, Valentín Vicente respecto al  estado de salud del menor, “evolucionó favorablemente, se le pudo retirar la asistencia respiratoria me...",
    },{
      seccion: "Salud",
      fecha_hora: "11/11/2021 12:35",
      titulo: "Menor accidentado: “Evoluciona favorablemente, se encuentra estable”",
      imagen: "https://practicas.coopmorteros.coop/public/image_news/6578797d6a3bc-6603.jpg",
      subtitulo: "Lo dijo el director del Hospital Iturraspe de San Francisco, Valentín Vicente respecto al  estado de salud del menor, “evolucionó favorablemente, se le pudo retirar la asistencia respiratoria me...",
    },{
      seccion: "Salud",
      fecha_hora: "11/11/2021 12:35",
      titulo: "Menor accidentado: “Evoluciona favorablemente, se encuentra estable”",
      imagen: "https://practicas.coopmorteros.coop/public/image_news/6578797d6a3bc-6603.jpg",
      subtitulo: "Lo dijo el director del Hospital Iturraspe de San Francisco, Valentín Vicente respecto al  estado de salud del menor, “evolucionó favorablemente, se le pudo retirar la asistencia respiratoria me...",
    },{
      seccion: "Salud",
      fecha_hora: "11/11/2021 12:35",
      titulo: "Menor accidentado: “Evoluciona favorablemente, se encuentra estable”",
      imagen: "https://practicas.coopmorteros.coop/public/image_news/6578797d6a3bc-6603.jpg",
      subtitulo: "Lo dijo el director del Hospital Iturraspe de San Francisco, Valentín Vicente respecto al  estado de salud del menor, “evolucionó favorablemente, se le pudo retirar la asistencia respiratoria me...",
    },{
      seccion: "Salud",
      fecha_hora: "11/11/2021 12:35",
      titulo: "Menor accidentado: “Evoluciona favorablemente, se encuentra estable”",
      imagen: "https://practicas.coopmorteros.coop/public/image_news/6578797d6a3bc-6603.jpg",
      subtitulo: "Lo dijo el director del Hospital Iturraspe de San Francisco, Valentín Vicente respecto al  estado de salud del menor, “evolucionó favorablemente, se le pudo retirar la asistencia respiratoria me...",
    },{
      seccion: "Salud",
      fecha_hora: "11/11/2021 12:35",
      titulo: "Menor accidentado: “Evoluciona favorablemente, se encuentra estable”",
      imagen: "https://practicas.coopmorteros.coop/public/image_news/6578797d6a3bc-6603.jpg",
      subtitulo: "Lo dijo el director del Hospital Iturraspe de San Francisco, Valentín Vicente respecto al  estado de salud del menor, “evolucionó favorablemente, se le pudo retirar la asistencia respiratoria me...",
    },{
      seccion: "Salud",
      fecha_hora: "11/11/2021 12:35",
      titulo: "Menor accidentado: “Evoluciona favorablemente, se encuentra estable”",
      imagen: "https://practicas.coopmorteros.coop/public/image_news/6578797d6a3bc-6603.jpg",
      subtitulo: "Lo dijo el director del Hospital Iturraspe de San Francisco, Valentín Vicente respecto al  estado de salud del menor, “evolucionó favorablemente, se le pudo retirar la asistencia respiratoria me...",
    },{
      seccion: "Salud",
      fecha_hora: "11/11/2021 12:35",
      titulo: "Menor accidentado: “Evoluciona favorablemente, se encuentra estable”",
      imagen: "https://practicas.coopmorteros.coop/public/image_news/6578797d6a3bc-6603.jpg",
      subtitulo: "Lo dijo el director del Hospital Iturraspe de San Francisco, Valentín Vicente respecto al  estado de salud del menor, “evolucionó favorablemente, se le pudo retirar la asistencia respiratoria me...",
    },{
      seccion: "Salud",
      fecha_hora: "11/11/2021 12:35",
      titulo: "Menor accidentado: “Evoluciona favorablemente, se encuentra estable”",
      imagen: "https://practicas.coopmorteros.coop/public/image_news/6578797d6a3bc-6603.jpg",
      subtitulo: "Lo dijo el director del Hospital Iturraspe de San Francisco, Valentín Vicente respecto al  estado de salud del menor, “evolucionó favorablemente, se le pudo retirar la asistencia respiratoria me...",
    },{
      seccion: "Salud",
      fecha_hora: "11/11/2021 12:35",
      titulo: "Menor accidentado: “Evoluciona favorablemente, se encuentra estable”",
      imagen: "https://practicas.coopmorteros.coop/public/image_news/6578797d6a3bc-6603.jpg",
      subtitulo: "Lo dijo el director del Hospital Iturraspe de San Francisco, Valentín Vicente respecto al  estado de salud del menor, “evolucionó favorablemente, se le pudo retirar la asistencia respiratoria me...",
    },
  ];

  // Parámetros de Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 10;
  const totalRows = saludData.length;
  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = saludData.slice(indexOfFirstRow, indexOfLastRow);

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

export default Salud