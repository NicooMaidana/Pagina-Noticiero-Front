import React from 'react'
import "./cardSecciones.styles.css";

const CardSecciones = ({ ...props }) => {
  const getSectionColor = () => {
    switch (props.seccion) {
      case 'Sociales':
        return 'bg-orange-500';
      case 'Deportes':
        return 'bg-red-700';
      case 'Policiales':
        return 'bg-blue-700';
      case 'Política':
        return 'bg-yellow-400';
      case 'Politica':
        return 'bg-yellow-400';
      case 'Economía':
        return 'bg-green-600';
      case 'Economia':
        return 'bg-green-600';
      case 'Salud':
        return 'bg-blue-400';
      case 'Educación':
        return 'bg-purple-700';
      case 'Educacion':
        return 'bg-purple-700';
      default:
        return 'bg-gray-500';
    }
  };

  return (

    <div className="flex-col justify-center">
      <div className="contenidoSeccion relative flex flex-col rounded md:flex-row md:space-x-5 space-y-3 md:space-y-0 lg:rounded-lg
      md:rounded-lg shadow-md max-sm:h-auto max-md:h-auto max-w-[90%] mx-auto bg-gray-100">
        <div className="w-full md:w-1/3 bg-gray-100 grid place-items-center">
          <img src={`${props.imagen}`} className="w-full h-full object-cover" />
        </div>
        <div className="w-full md:w-2/3 bg-gray-100 flex flex-col space-y-2 p-3 elipsis">
          <h3 className="font-black text-gray-800 md:text-3xl text-xl cursor-default ">{props.titulo}</h3>
          <p className="md:text-lg text-gray-500 text-base cursor-default ">{props.subtitulo}</p>
          <div className="flex m-1 items-end pb-4 justify-between w-full h-full">
            <p>
              <span className="font-normal text-gray-600 text-base cursor-default">{props.fecha_hora}</span>
            </p>
            <a href="/NoticiaDetallada">
              <div className="bg-gray-200 hover:bg-gray-300 px-3 py-2 rounded-2xl text-sm font-medium text-gray-700
             hover:text-gray-800 transition-all">
                Leer Más
              </div>
            </a>
          </div>
        </div>
        <div className={`p-1 lg:rounded-r-lg md:rounded-r-lg sm:rounded-sm ${getSectionColor()}`}>
        </div>
      </div>
    </div>

  )
}

export default CardSecciones