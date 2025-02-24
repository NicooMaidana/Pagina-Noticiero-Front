import React, { useState } from 'react';
import Pagination from '../../components/Pagination';
import EncabezadoSeccion from '../../components/encabezadoSeccion';
import CardSecciones from '../../components/cardSecciones';

const Policiales = () => {
  
  const encabezadoData = [
    {
    titulo: "Policiales",
    }
  ];
  
  const policialesData = [
    {
      seccion: "Policiales",
      fecha_hora: "11/11/2021 12:35",
      titulo: "Morteros: durante un allanamiento detienen a un sujeto y secuestran una moto",
      imagen: "https://practicas.coopmorteros.coop/public/image_news/65685f0d9e32b.jpg",
      subtitulo: "En la tarde del martes (20:20 hs), personal de la Brigada Investigaciones de Morteros allanó una vivienda ubicada en calle Mariano Moreno por un hecho contra la propiedad ocurrido el mismo día...",
    },{
      seccion: "Policiales",
      fecha_hora: "24/08/2022 10:52",
      titulo: "Colonia Vignaud: trafic chocó animales sueltos en Ruta Nº 1",
      imagen: "https://practicas.coopmorteros.coop/public/image_news/656867fa25e0a.jpg",
      subtitulo: "En la madrugada de este lunes (2:30 hs) se produjo un accidente vehicular en el acceso a Colonia Vignaud sobre Ruta Provincial Nº 1...",
    },{
      seccion: "Policiales",
      fecha_hora: "02/01/2021 15:14",
      titulo: "FPA secuestró dinero, estupefacientes y un arma de fuego en Arroyito",
      imagen: "https://practicas.coopmorteros.coop/public/image_news/0-655c8508ce298-6578.jpeg",
      subtitulo:"En una investigación dirigida por el Ministerio Público Fiscal, la Fuerza Policial Antinarcotráfico desbarató un punto de venta, detuvo a un delivery de drogas de 35 años e incautó estupefacientes en...",
    },{
      seccion: "Policiales",
      fecha_hora: "02/01/2021 15:14",
      titulo: "FPA secuestró dinero, estupefacientes y un arma de fuego en Arroyito",
      imagen: "https://practicas.coopmorteros.coop/public/image_news/0-655c8508ce298-6578.jpeg",
      subtitulo:"En una investigación dirigida por el Ministerio Público Fiscal, la Fuerza Policial Antinarcotráfico desbarató un punto de venta, detuvo a un delivery de drogas de 35 años e incautó estupefacientes en...",
    },{
      seccion: "Policiales",
      fecha_hora: "02/01/2021 15:14",
      titulo: "FPA secuestró dinero, estupefacientes y un arma de fuego en Arroyito",
      imagen: "https://practicas.coopmorteros.coop/public/image_news/0-655c8508ce298-6578.jpeg",
      subtitulo:"En una investigación dirigida por el Ministerio Público Fiscal, la Fuerza Policial Antinarcotráfico desbarató un punto de venta, detuvo a un delivery de drogas de 35 años e incautó estupefacientes en...",
    },{
      seccion: "Policiales",
      fecha_hora: "02/01/2021 15:14",
      titulo: "FPA secuestró dinero, estupefacientes y un arma de fuego en Arroyito",
      imagen: "https://practicas.coopmorteros.coop/public/image_news/0-655c8508ce298-6578.jpeg",
      subtitulo:"En una investigación dirigida por el Ministerio Público Fiscal, la Fuerza Policial Antinarcotráfico desbarató un punto de venta, detuvo a un delivery de drogas de 35 años e incautó estupefacientes en...",
    },{
      seccion: "Policiales",
      fecha_hora: "02/01/2021 15:14",
      titulo: "FPA secuestró dinero, estupefacientes y un arma de fuego en Arroyito",
      imagen: "https://practicas.coopmorteros.coop/public/image_news/0-655c8508ce298-6578.jpeg",
      subtitulo:"En una investigación dirigida por el Ministerio Público Fiscal, la Fuerza Policial Antinarcotráfico desbarató un punto de venta, detuvo a un delivery de drogas de 35 años e incautó estupefacientes en...",
    },{
      seccion: "Policiales",
      fecha_hora: "02/01/2021 15:14",
      titulo: "FPA secuestró dinero, estupefacientes y un arma de fuego en Arroyito",
      imagen: "https://practicas.coopmorteros.coop/public/image_news/0-655c8508ce298-6578.jpeg",
      subtitulo:"En una investigación dirigida por el Ministerio Público Fiscal, la Fuerza Policial Antinarcotráfico desbarató un punto de venta, detuvo a un delivery de drogas de 35 años e incautó estupefacientes en...",
    },{
      seccion: "Policiales",
      fecha_hora: "02/01/2021 15:14",
      titulo: "FPA secuestró dinero, estupefacientes y un arma de fuego en Arroyito",
      imagen: "https://practicas.coopmorteros.coop/public/image_news/0-655c8508ce298-6578.jpeg",
      subtitulo:"En una investigación dirigida por el Ministerio Público Fiscal, la Fuerza Policial Antinarcotráfico desbarató un punto de venta, detuvo a un delivery de drogas de 35 años e incautó estupefacientes en...",
    },{
      seccion: "Policiales",
      fecha_hora: "02/01/2021 15:14",
      titulo: "FPA secuestró dinero, estupefacientes y un arma de fuego en Arroyito",
      imagen: "https://practicas.coopmorteros.coop/public/image_news/0-655c8508ce298-6578.jpeg",
      subtitulo:"En una investigación dirigida por el Ministerio Público Fiscal, la Fuerza Policial Antinarcotráfico desbarató un punto de venta, detuvo a un delivery de drogas de 35 años e incautó estupefacientes en...",
    },{
      seccion: "Policiales",
      fecha_hora: "02/01/2021 15:14",
      titulo: "FPA secuestró dinero, estupefacientes y un arma de fuego en Arroyito",
      imagen: "https://practicas.coopmorteros.coop/public/image_news/0-655c8508ce298-6578.jpeg",
      subtitulo:"En una investigación dirigida por el Ministerio Público Fiscal, la Fuerza Policial Antinarcotráfico desbarató un punto de venta, detuvo a un delivery de drogas de 35 años e incautó estupefacientes en...",
    },{
      seccion: "Policiales",
      fecha_hora: "02/01/2021 15:14",
      titulo: "FPA secuestró dinero, estupefacientes y un arma de fuego en Arroyito",
      imagen: "https://practicas.coopmorteros.coop/public/image_news/0-655c8508ce298-6578.jpeg",
      subtitulo:"En una investigación dirigida por el Ministerio Público Fiscal, la Fuerza Policial Antinarcotráfico desbarató un punto de venta, detuvo a un delivery de drogas de 35 años e incautó estupefacientes en...",
    },{
      seccion: "Policiales",
      fecha_hora: "02/01/2021 15:14",
      titulo: "FPA secuestró dinero, estupefacientes y un arma de fuego en Arroyito",
      imagen: "https://practicas.coopmorteros.coop/public/image_news/0-655c8508ce298-6578.jpeg",
      subtitulo:"En una investigación dirigida por el Ministerio Público Fiscal, la Fuerza Policial Antinarcotráfico desbarató un punto de venta, detuvo a un delivery de drogas de 35 años e incautó estupefacientes en...",
    },{
      seccion: "Policiales",
      fecha_hora: "02/01/2021 15:14",
      titulo: "FPA secuestró dinero, estupefacientes y un arma de fuego en Arroyito",
      imagen: "https://practicas.coopmorteros.coop/public/image_news/0-655c8508ce298-6578.jpeg",
      subtitulo:"En una investigación dirigida por el Ministerio Público Fiscal, la Fuerza Policial Antinarcotráfico desbarató un punto de venta, detuvo a un delivery de drogas de 35 años e incautó estupefacientes en...",
    },{
      seccion: "Policiales",
      fecha_hora: "02/01/2021 15:14",
      titulo: "FPA secuestró dinero, estupefacientes y un arma de fuego en Arroyito",
      imagen: "https://practicas.coopmorteros.coop/public/image_news/0-655c8508ce298-6578.jpeg",
      subtitulo:"En una investigación dirigida por el Ministerio Público Fiscal, la Fuerza Policial Antinarcotráfico desbarató un punto de venta, detuvo a un delivery de drogas de 35 años e incautó estupefacientes en...",
    },{
      seccion: "Policiales",
      fecha_hora: "02/01/2021 15:14",
      titulo: "FPA secuestró dinero, estupefacientes y un arma de fuego en Arroyito",
      imagen: "https://practicas.coopmorteros.coop/public/image_news/0-655c8508ce298-6578.jpeg",
      subtitulo:"En una investigación dirigida por el Ministerio Público Fiscal, la Fuerza Policial Antinarcotráfico desbarató un punto de venta, detuvo a un delivery de drogas de 35 años e incautó estupefacientes en...",
    },{
      seccion: "Policiales",
      fecha_hora: "02/01/2021 15:14",
      titulo: "FPA secuestró dinero, estupefacientes y un arma de fuego en Arroyito",
      imagen: "https://practicas.coopmorteros.coop/public/image_news/0-655c8508ce298-6578.jpeg",
      subtitulo:"En una investigación dirigida por el Ministerio Público Fiscal, la Fuerza Policial Antinarcotráfico desbarató un punto de venta, detuvo a un delivery de drogas de 35 años e incautó estupefacientes en...",
    },{
      seccion: "Policiales",
      fecha_hora: "02/01/2021 15:14",
      titulo: "FPA secuestró dinero, estupefacientes y un arma de fuego en Arroyito",
      imagen: "https://practicas.coopmorteros.coop/public/image_news/0-655c8508ce298-6578.jpeg",
      subtitulo:"En una investigación dirigida por el Ministerio Público Fiscal, la Fuerza Policial Antinarcotráfico desbarató un punto de venta, detuvo a un delivery de drogas de 35 años e incautó estupefacientes en...",
    },{
      seccion: "Policiales",
      fecha_hora: "02/01/2021 15:14",
      titulo: "FPA secuestró dinero, estupefacientes y un arma de fuego en Arroyito",
      imagen: "https://practicas.coopmorteros.coop/public/image_news/0-655c8508ce298-6578.jpeg",
      subtitulo:"En una investigación dirigida por el Ministerio Público Fiscal, la Fuerza Policial Antinarcotráfico desbarató un punto de venta, detuvo a un delivery de drogas de 35 años e incautó estupefacientes en...",
    },{
      seccion: "Policiales",
      fecha_hora: "02/01/2021 15:14",
      titulo: "FPA secuestró dinero, estupefacientes y un arma de fuego en Arroyito",
      imagen: "https://practicas.coopmorteros.coop/public/image_news/0-655c8508ce298-6578.jpeg",
      subtitulo:"En una investigación dirigida por el Ministerio Público Fiscal, la Fuerza Policial Antinarcotráfico desbarató un punto de venta, detuvo a un delivery de drogas de 35 años e incautó estupefacientes en...",
    },
  ];

  // Parámetros de Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 10;
  const totalRows = policialesData.length;
  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = policialesData.slice(indexOfFirstRow, indexOfLastRow);

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

export default Policiales