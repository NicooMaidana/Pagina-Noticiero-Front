import React from 'react'
import EncabezadoSeccion from '../../components/encabezadoSeccion';

const EnVivo = () => {
  const encabezadoData = [
    {
      titulo: "Canal En Vivo",
    }
  ];

  const videoUrl = 'chrome-extension://lcipembjfkmeggpihdpdgnjildgniffl/player.html#https://online.coopmorteros.coop/canal50/vivo.m3u8';

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
        <iframe
          src={videoUrl}
          frameBorder="0"
          allowFullScreen
          width="60%"
          height="500" // adjust the height to your liking
        />
      </div>
    </>
  )
}

export default EnVivo