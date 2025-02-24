import React from 'react';
import './CardSeccionesHome.styles.css';

export const CardSeccionesHome = ({ seccion, noticias = [] }) => {
  const getSectionColor = () => {
    switch (seccion) {
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
        return 'bg-cyan-200';
      default:
        return 'bg-gray-500';
    }
  };
  return (
    <div className="w-full lg:w-1/2 mb-4 lg:mb-0">
      <div className="bg-gray-300 text-black rounded-lg border-none shadow-md h-full">
        <div className="p-5 flex flex-col h-full">
          <div className="flex items-center">
            <h1 className='text-2xl'>{seccion}</h1>
          </div>
          <div className="custom-hr" >
            <div className={`thick-part ${getSectionColor()}`}></div>
            <div className={`thin-part ${getSectionColor()}`}></div>
          </div>
          <div className='mt-4 flex flex-col lg:flex-row flex-grow'>
            <div className="w-full lg:w-1/2 flex flex-col items-center">
              {noticias.length > 0 && (
                <div className="noticia-destacada w-full relative h-full">
                  <img src={noticias[0].imagen} alt={noticias[0].titulo} className="w-full h-full object-cover rounded-t-lg lg:rounded-lg shadow-md" />
                  <div className="absolute bottom-0 left-0 p-4 bg-black bg-opacity-50 w-full rounded-b-lg lg:rounded-lg">
                  <a href="/NoticiaDetallada">
                    <h2 className="text-white text-xl hover:text-slate-300 transition-all lg:text-2xl font-bold mt-2">{noticias[0].titulo}</h2>
                  </a>
                  </div>
                </div>
              )}
            </div>
            <div className="w-full lg:w-1/2 flex flex-col mt-4 lg:mt-0 lg:ml-4">
              <ul className="list-none space-y-4">
                {noticias.slice(1).map((noticia, index) => (
                  <li key={index} className="flex items-center space-x-4">
                    <div className="w-1/3 relative">
                      <img src={noticia.imagen} alt={noticia.titulo} className="w-full h-full object-cover rounded shadow-md" />
                    </div>
                    <div className='w-2/3'>
                    <a href="/NoticiaDetallada">
                      <h2 className="text-md hover:text-slate-700 transition-all">{noticia.titulo}</h2>
                    </a>  
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardSeccionesHome;





