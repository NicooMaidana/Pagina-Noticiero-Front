import React from "react";
import './CardSectionNews.css'

const CardSection = ({ articuloPrincipal, secciones, otrosArticulos }) => {

  const getSectionBgColor = (sectionName) => {
    switch (sectionName) {
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
  const getSectionTextColor = (sectionName) => {
    switch (sectionName) {
      case 'Sociales':
        return 'text-orange-500';
      case 'Deportes':
        return 'text-red-700';
      case 'Policiales':
        return 'text-blue-700';
      case 'Política':
        return 'text-yellow-400';
      case 'Economía':
        return 'text-green-600';
      case 'Salud':
        return 'text-blue-400';
      case 'Educación':
        return 'text-purple-700';
      case 'Guía Telefónica':
        return 'text-green-300';
      case 'Necrológico':
        return 'text-black';
      case 'Clima':
        return 'text-cyan-200';
      default:
        return 'text-gray-500';
    }
  };
  return (
    <section className="px-5 py-10 text-gray-100 bg-stone-800 rounded-xl">
      <div className="container grid grid-cols-12 mx-auto gap-y-6 md:gap-10">
        <div className="flex flex-col justify-between col-span-12 py-2 space-y-8 md:space-y-16 md:col-span-3">
          <div className="flex flex-col space-y-8 md:space-y-12">
            {secciones.map((section, index) => (
              <div key={index} className="flex flex-col space-y-2">
                <h3 className="flex items-center space-x-2 text-gray-600">
                  <span className={`flex-shrink-0 w-2 h-2 rounded-full ${getSectionBgColor(section.seccion)}`}></span>
                  <span className={`text-md font-bold tracking-wider uppercase ${getSectionTextColor(section.seccion)}`}>
                    {section.seccion}
                  </span>
                </h3>
                <p className="text-xs text-gray-400">{section.fecha}</p>
                <div>
                  <a
                    rel="noopener noreferrer"
                    href="#"
                    className="text-gray-100 text-md hover:underline"
                  >
                    {section.titulo}

                  </a>
                </div>
              </div>
            ))}
          </div>
          <div className="flex flex-col w-full space-y-2">
            <div className="flex w-full h-1 bg-opacity-10 bg-gray-200">
              <div className="w-1/2 h-full bg-gray-400"></div>
            </div>
            <a
              rel="noopener noreferrer"
              href="#"
              className="flex items-center justify-between w-full"
            >
              <span className="text-xs font-bold text-gray-200 tracking-wider uppercase">
                Ver más secciones
              </span>
              <svg
                viewBox="0 0 24 24"
                strokeWidth="2.5"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-4 strokeCurrent text-gray-100"
              >
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </a>
          </div>
        </div>
        <div className="relative col-span-12 xl:col-span-6 lg:col-span-5 md:col-span-9 min-h-96 ">
          <img
            src={articuloPrincipal.imagen}
            alt={articuloPrincipal.lugar}
            className="object-cover w-full h-full rounded-xl"
          />
          <div className="absolute top-6 left-6 text-gray-600 py-1 text-xs font-bold uppercase border-b-2 border-gray-500">
            {articuloPrincipal.lugar}
          </div>
          <div className="absolute bottom-6 left-6 text-center text-">
            <h1 className="text-2xl  font-bold">
              {articuloPrincipal.titulo}
            </h1>
          </div>
        </div>
        {/* mb-8 */}
        <div className="hidden py-2 xl:col-span-3 lg:col-span-4 md:hidden lg:block">
          <div className="mb-4 space-x-5 border-b-2 border-opacity-10 border-gray-500">
            <button
              type="button"
              className="pb-5 text-xs font-bold uppercase border-b-2 border-gray-300"
            >
              Populares
            </button>
          </div>
          <div className="flex flex-col divide-y divide-gray-300">
            {otrosArticulos.map((articulo, index) => (
              <div key={index} className="flex px-1 py-4">
                <img
                  alt=""
                  className="flex-shrink-0 object-cover w-24 h-24 mr-4 bg-gray-500"
                  src={articulo.imagen}
                />
                <div className="flex flex-col flex-grow">
                  <a
                    rel="noopener noreferrer"
                    href="#"
                    className="font-serif hover:underline"
                  >
                    {articulo.titulo}
                  </a>
                  <p className="mt-auto text-sm text-gray-600">
                    {articulo.fecha}
                    <a
                      rel="noopener noreferrer"
                      href="#"
                      className="block text-opacity-85 text-blue-400 lg:ml-2 lg:inline hover:underline"
                    >
                      {articulo.seccion}
                    </a>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CardSection;
