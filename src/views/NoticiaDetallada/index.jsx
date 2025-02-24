import React from 'react'
import NoticiaCompleta from '../../components/CardNoticiaCompleta'
import EncabezadoSeccion from '../../components/encabezadoSeccion';
import CardInicio from '../../components/CardInicio';

const NoticiaDetallada = () => {
  const noticiaDetalladaData = [
    {
      seccion: "Policiales",
      fecha_hora: "11/09/2021 12:34",
      titulo: "Morteros: durante un allanamiento detienen a un sujeto y secuestran una moto",
      subtitulo: "En la tarde del martes (20:20 hs), personal de la Brigada Investigaciones de Morteros allanó una vivienda ubicada en calle Mariano Moreno por un hecho contra la propiedad ocurrido el mismo día",
      imagen: "https://practicas.coopmorteros.coop/public/image_news/65685f0d9e32b.jpg",
      contenido: "Como consecuencia del procedimiento si bien no se logró recuperar los elementos sustraídos, al requisar la vivienda en el patio trasero se controló una motocicleta marca Imsa que presentaba la numeración limada.Los uniformados procedieron a la aprehensión de un hombre y el secuestro del rodado, a disposición de la Fiscalía de Morteros.",
    },
  ]
  const currentCards = [
    {
      seccion: "Sociales",
      fecha: "17/07/2023",
      titulo: "Reunión para reubicar los caballos en Suardi",
      imagen: "https://practicas.coopmorteros.coop/public/image_news/656f4286c2792-7998.jpg",
      subtitulo: "La Municipalidad de Suardi, en conjunto con el Juzgado de Faltas, llevó a cabo una importante reunión...",
    },
    {
      seccion: "Sociales",
      fecha: "17/07/2023",
      titulo: "Reunión para reubicar los caballos en Suardi",
      imagen: "https://practicas.coopmorteros.coop/public/image_news/656f4286c2792-7998.jpg",
      subtitulo: "La Municipalidad de Suardi, en conjunto con el Juzgado de Faltas, llevó a cabo una importante reunión...",
    }
  ]
  const encabezadoData = [
    {
      titulo: "Policiales",
    }
  ];
  return (
    <>
      <div className='flex flex-col sm:flex-row-5 lg:flex-row md:flex-col flex-wrap container justify-center relative mx-auto px-4 sm:px-4'>
        {encabezadoData.map((data, index) => (
          <EncabezadoSeccion
            key={index}
            titulo={data.titulo}
            className="w-full basis-full"
          />
        ))}

        {noticiaDetalladaData.map((data, index) => (
          <NoticiaCompleta
            key={index}
            seccion={data.seccion}
            fecha_hora={data.fecha_hora}
            titulo={data.titulo}
            subtitulo={data.subtitulo}
            imagen={data.imagen}
            contenido={data.contenido}
            className="xl:basis-2/3 lg:basis-full sm:basis-2"
          />
        ))}

        <div className="xl:basis-1/5 lg:basis-full mt-4">
          <p className="text-3xl cursor-default">Similares</p>
          <div className="mb-4"><hr />
          </div>
          {currentCards.map((data, index) => (
            <CardInicio
              key={index}
              seccion={data.seccion}
              fecha={data.fecha}
              titulo={data.titulo}
              imagen={data.imagen}
              subtitulo={data.subtitulo}
              className="mb-4"
            />
          ))}
        </div>
      </div>
    </>
  )
}

export default NoticiaDetallada