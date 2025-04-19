import React from 'react'
import { IoMdHome } from 'react-icons/io';

const EncabezadoSeccion = ({ ...props }) => {
  const getSectionColor = () => {
    switch (props.titulo) {
      case 'Sociales':
        return 'bg-orange-500';
      case 'Deportes':
        return 'bg-red-700';
      case 'Policiales':
        return 'bg-blue-700';
      case 'Política':
        return 'bg-yellow-400';
      case 'Economía':
        return 'bg-green-600';
      case 'Salud':
        return 'bg-blue-400';
      case 'Educación':
        return 'bg-purple-700';
      case 'Guía Telefónica':
        return 'bg-green-300';
      case 'Necrológico':
        return 'bg-black';
      case 'Clima':
        return 'bg-cyan-400';
      case 'Canal En Vivo':
        return 'bg-red-500';
      default:
        return 'bg-gray-500';
        
    }
  };

  return (
    <>
      <div className={`px-10 pb-8 md:px-10 lg:px-20 ${props.className}`}>
        <div className={`p-1 block rounded-t-xl ${getSectionColor()}`}>
        </div>
        <div className="block rounded-b-xl bg-gray-200 text-left shadow-md">
          <div className="p-5 flex">
            <div className="hover:text-zinc-800 transition-all flex absolute">
              <div className="hover:scale-105 transition-all flex absolute">
                <p className="text-3xl mr-2"><a href="/"><i><IoMdHome /></i></a></p>
                <p className="text-2xl max-sm:hidden "><a href="/">Inicio</a></p>
              </div>
            </div>
            <h3 className="text-3xl justify-center m-auto cursor-default max-sm:text-2xl">
              <a>{props.titulo} </a></h3>
          </div>
        </div>
      </div>
    </>
  )
}

export default EncabezadoSeccion