import React, { useState } from 'react';
import Pagination from '../../components/Pagination';
import EncabezadoSeccion from '../../components/encabezadoSeccion';
import CardSecciones from '../../components/cardSecciones';

const Sociales = () => {
  const encabezadoData = [
    {
      titulo: "Sociales",
    }
  ];

  const socialesData = [
    {
      seccion: "Sociales",
      fecha_hora: "11/11/2021 12:35",
      titulo: "Reunión para reubicar los caballos en Suardi",
      imagen: "https://practicas.coopmorteros.coop/public/image_news/656f4286c2792-7998.jpg",
      subtitulo: "La Municipalidad de Suardi, en conjunto con el Juzgado de Faltas, llevó a cabo una importante reunión para abordar la preocupante situación que atraviesan los equinos en la zona. El objetivo principal... a cabo una importante reunión para abordar la preocupante situación que atraviesan los equinos en la zona. El objetivo principal.. a cabo una importante reunión para abordar la preocupante situación que atraviesan los equinos en la zona. El objetivo principal..",
    }, {
    seccion: "Sociales",
    fecha_hora: "11/11/2021 12:35",
    titulo: "Reunión para reubicar los caballos en Suardi",
    imagen: "https://practicas.coopmorteros.coop/public/image_news/656f4286c2792-7998.jpg",
    subtitulo: "La Municipalidad de Suardi, en conjunto con el Juzgado de Faltas, llevó a cabo una importante reunión para abordar la preocupante situación que atraviesan los equinos en la zona. El objetivo principal...",
  }, 
  {
    seccion: "Sociales",
    fecha_hora: "24/08/2022 10:52",
    titulo: "Se concretó la Escuela Abierta de Instituto 9 de Julio",
    imagen: "https://practicas.coopmorteros.coop/public/image_news/657849c25ebe9-6611.jpg",
    subtitulo: "En esta ocasión, los estudiantes han preparado diferentes proyectos y stands relacionados a diversas temáticas, mostrando su creatividad, ingenio y conocimiento...",
  }, {
    seccion: "Sociales",
    fecha_hora: "02/01/2021 15:14",
    titulo: "Martín Llaryora juró como gobernador de la Provincia por el período 2023-2027",
    imagen: "https://practicas.coopmorteros.coop/public/image_news/657844b28b4cb-6610.jpeg",
    subtitulo: "Martín Llaryora juró este domingo como gobernador de la Provincia de Córdoba, cargo que ejercerá por el período 2023-2027. Durante la ceremonia, que tuvo lugar en la Legislatura Unicameral, también pr...",
  }, {
    seccion: "Sociales",
    fecha_hora: "11/11/2021 12:35",
    titulo: "Reunión para reubicar los caballos en Suardi",
    imagen: "https://practicas.coopmorteros.coop/public/image_news/656f4286c2792-7998.jpg",
    subtitulo: "La Municipalidad de Suardi, en conjunto con el Juzgado de Faltas, llevó a cabo una importante reunión para abordar la preocupante situación que atraviesan los equinos en la zona. El objetivo principal...",
  }, {
    seccion: "Sociales",
    fecha_hora: "24/08/2022 10:52",
    titulo: "Se concretó la Escuela Abierta de Instituto 9 de Julio",
    imagen: "https://practicas.coopmorteros.coop/public/image_news/657849c25ebe9-6611.jpg",
    subtitulo: "En esta ocasión, los estudiantes han preparado diferentes proyectos y stands relacionados a diversas temáticas, mostrando su creatividad, ingenio y conocimiento...",
  }, {
    seccion: "Sociales",
    fecha_hora: "02/01/2021 15:14",
    titulo: "Martín Llaryora juró como gobernador de la Provincia por el período 2023-2027",
    imagen: "https://practicas.coopmorteros.coop/public/image_news/657844b28b4cb-6610.jpeg",
    subtitulo: "Martín Llaryora juró este domingo como gobernador de la Provincia de Córdoba, cargo que ejercerá por el período 2023-2027. Durante la ceremonia, que tuvo lugar en la Legislatura Unicameral, también pr...",
  }, {
    seccion: "Sociales",
    fecha_hora: "11/11/2021 12:35",
    titulo: "Reunión para reubicar los caballos en Suardi",
    imagen: "https://practicas.coopmorteros.coop/public/image_news/656f4286c2792-7998.jpg",
    subtitulo: "La Municipalidad de Suardi, en conjunto con el Juzgado de Faltas, llevó a cabo una importante reunión para abordar la preocupante situación que atraviesan los equinos en la zona. El objetivo principal...",
  }, {
    seccion: "Sociales",
    fecha_hora: "24/08/2022 10:52",
    titulo: "Se concretó la Escuela Abierta de Instituto 9 de Julio",
    imagen: "https://practicas.coopmorteros.coop/public/image_news/657849c25ebe9-6611.jpg",
    subtitulo: "En esta ocasión, los estudiantes han preparado diferentes proyectos y stands relacionados a diversas temáticas, mostrando su creatividad, ingenio y conocimiento...",
  }, {
    seccion: "Sociales",
    fecha_hora: "02/01/2021 15:14",
    titulo: "Martín Llaryora juró como gobernador de la Provincia por el período 2023-2027",
    imagen: "https://practicas.coopmorteros.coop/public/image_news/657844b28b4cb-6610.jpeg",
    subtitulo: "Martín Llaryora juró este domingo como gobernador de la Provincia de Córdoba, cargo que ejercerá por el período 2023-2027. Durante la ceremonia, que tuvo lugar en la Legislatura Unicameral, también pr...",
  },
  {
    seccion: "Sociales",
    fecha_hora: "11/11/2021 12:35",
    titulo: "Reunión para reubicar los caballos en Suardi",
    imagen: "https://practicas.coopmorteros.coop/public/image_news/656f4286c2792-7998.jpg",
    subtitulo: "La Municipalidad de Suardi, en conjunto con el Juzgado de Faltas, llevó a cabo una importante reunión para abordar la preocupante situación que atraviesan los equinos en la zona. El objetivo principal...",
  }, {
    seccion: "Sociales",
    fecha_hora: "24/08/2022 10:52",
    titulo: "Se concretó la Escuela Abierta de Instituto 9 de Julio",
    imagen: "https://practicas.coopmorteros.coop/public/image_news/657849c25ebe9-6611.jpg",
    subtitulo: "En esta ocasión, los estudiantes han preparado diferentes proyectos y stands relacionados a diversas temáticas, mostrando su creatividad, ingenio y conocimiento...",
  }, {
    seccion: "Sociales",
    fecha_hora: "02/01/2021 15:14",
    titulo: "Martín Llaryora juró como gobernador de la Provincia por el período 2023-2027",
    imagen: "https://practicas.coopmorteros.coop/public/image_news/657844b28b4cb-6610.jpeg",
    subtitulo: "Martín Llaryora juró este domingo como gobernador de la Provincia de Córdoba, cargo que ejercerá por el período 2023-2027. Durante la ceremonia, que tuvo lugar en la Legislatura Unicameral, también pr...",
  }, {
    seccion: "Sociales",
    fecha_hora: "11/11/2021 12:35",
    titulo: "Reunión para reubicar los caballos en Suardi",
    imagen: "https://practicas.coopmorteros.coop/public/image_news/656f4286c2792-7998.jpg",
    subtitulo: "La Municipalidad de Suardi, en conjunto con el Juzgado de Faltas, llevó a cabo una importante reunión para abordar la preocupante situación que atraviesan los equinos en la zona. El objetivo principal...",
  }, {
    seccion: "Sociales",
    fecha_hora: "24/08/2022 10:52",
    titulo: "Se concretó la Escuela Abierta de Instituto 9 de Julio",
    imagen: "https://practicas.coopmorteros.coop/public/image_news/657849c25ebe9-6611.jpg",
    subtitulo: "En esta ocasión, los estudiantes han preparado diferentes proyectos y stands relacionados a diversas temáticas, mostrando su creatividad, ingenio y conocimiento...",
  }, {
    seccion: "Sociales",
    fecha_hora: "02/01/2021 15:14",
    titulo: "Martín Llaryora juró como gobernador de la Provincia por el período 2023-2027",
    imagen: "https://practicas.coopmorteros.coop/public/image_news/657844b28b4cb-6610.jpeg",
    subtitulo: "Martín Llaryora juró este domingo como gobernador de la Provincia de Córdoba, cargo que ejercerá por el período 2023-2027. Durante la ceremonia, que tuvo lugar en la Legislatura Unicameral, también pr...",
  },
  {
    seccion: "Sociales",
    fecha_hora: "02/01/2021 15:14",
    titulo: "Martín Llaryora juró como gobernador de la Provincia por el período 2023-2027",
    imagen: "https://practicas.coopmorteros.coop/public/image_news/657844b28b4cb-6610.jpeg",
    subtitulo: "Martín Llaryora juró este domingo como gobernador de la Provincia de Córdoba, cargo que ejercerá por el período 2023-2027. Durante la ceremonia, que tuvo lugar en la Legislatura Unicameral, también pr...",
  },
  {
    seccion: "Sociales",
    fecha_hora: "02/01/2021 15:14",
    titulo: "Martín Llaryora juró como gobernador de la Provincia por el período 2023-2027",
    imagen: "https://practicas.coopmorteros.coop/public/image_news/657844b28b4cb-6610.jpeg",
    subtitulo: "Martín Llaryora juró este domingo como gobernador de la Provincia de Córdoba, cargo que ejercerá por el período 2023-2027. Durante la ceremonia, que tuvo lugar en la Legislatura Unicameral, también pr...",
  },
  {
    seccion: "Sociales",
    fecha_hora: "02/01/2021 15:14",
    titulo: "Martín Llaryora juró como gobernador de la Provincia por el período 2023-2027",
    imagen: "https://practicas.coopmorteros.coop/public/image_news/657844b28b4cb-6610.jpeg",
    subtitulo: "Martín Llaryora juró este domingo como gobernador de la Provincia de Córdoba, cargo que ejercerá por el período 2023-2027. Durante la ceremonia, que tuvo lugar en la Legislatura Unicameral, también pr...",
  },
  {
    seccion: "Sociales",
    fecha_hora: "02/01/2021 15:14",
    titulo: "Martín Llaryora juró como gobernador de la Provincia por el período 2023-2027",
    imagen: "https://practicas.coopmorteros.coop/public/image_news/657844b28b4cb-6610.jpeg",
    subtitulo: "Martín Llaryora juró este domingo como gobernador de la Provincia de Córdoba, cargo que ejercerá por el período 2023-2027. Durante la ceremonia, que tuvo lugar en la Legislatura Unicameral, también pr...",
  },
  {
    seccion: "Sociales",
    fecha_hora: "02/01/2021 15:14",
    titulo: "Martín Llaryora juró como gobernador de la Provincia por el período 2023-2027",
    imagen: "https://practicas.coopmorteros.coop/public/image_news/657844b28b4cb-6610.jpeg",
    subtitulo: "Martín Llaryora juró este domingo como gobernador de la Provincia de Córdoba, cargo que ejercerá por el período 2023-2027. Durante la ceremonia, que tuvo lugar en la Legislatura Unicameral, también pr...",
  },
  {
    seccion: "Sociales",
    fecha_hora: "02/01/2021 15:14",
    titulo: "Martín Llaryora juró como gobernador de la Provincia por el período 2023-2027",
    imagen: "https://practicas.coopmorteros.coop/public/image_news/657844b28b4cb-6610.jpeg",
    subtitulo: "Martín Llaryora juró este domingo como gobernador de la Provincia de Córdoba, cargo que ejercerá por el período 2023-2027. Durante la ceremonia, que tuvo lugar en la Legislatura Unicameral, también pr...",
  },
  {
    seccion: "Sociales",
    fecha_hora: "02/01/2021 15:14",
    titulo: "Martín Llaryora juró como gobernador de la Provincia por el período 2023-2027",
    imagen: "https://practicas.coopmorteros.coop/public/image_news/657844b28b4cb-6610.jpeg",
    subtitulo: "Martín Llaryora juró este domingo como gobernador de la Provincia de Córdoba, cargo que ejercerá por el período 2023-2027. Durante la ceremonia, que tuvo lugar en la Legislatura Unicameral, también pr...",
  },
  {
    seccion: "Sociales",
    fecha_hora: "02/01/2021 15:14",
    titulo: "Martín Llaryora juró como gobernador de la Provincia por el período 2023-2027",
    imagen: "https://practicas.coopmorteros.coop/public/image_news/657844b28b4cb-6610.jpeg",
    subtitulo: "Martín Llaryora juró este domingo como gobernador de la Provincia de Córdoba, cargo que ejercerá por el período 2023-2027. Durante la ceremonia, que tuvo lugar en la Legislatura Unicameral, también pr...",
  },
  ];

  // Parámetros de Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 10;
  const totalRows = socialesData.length;
  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = socialesData.slice(indexOfFirstRow, indexOfLastRow);

  return (
    <>
      {encabezadoData.map((data, index) => (
        <EncabezadoSeccion 
          key={index} 
          titulo={data.titulo} />
      ))}
      <div className="container mx-auto px-auto">
        <div className="flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-6 sm:gap-12">
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
  );
};

export default Sociales;