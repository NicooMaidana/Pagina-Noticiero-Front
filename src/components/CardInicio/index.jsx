import React from "react";
import "./card.styles.css";

const CardInicio = ({ ...props }) => {
  const getSectionColor = () => {
    switch (props.seccion) {
      case "Sociales":
        return "bg-orange-500 hover:bg-orange-400";
      case "Deportes":
        return "bg-red-700 hover:bg-red-600";
      case "Policiales":
        return "bg-blue-700 hover:bg-blue-600";
      case "Política":
        return "bg-yellow-400 hover:bg-yellow-300";
      case "Politica":
        return "bg-yellow-400 hover:bg-yellow-300";
      case "Economía":
        return "bg-green-600 hover:bg-green-500";
      case "Economia":
        return "bg-green-600 hover:bg-green-500";
      case "Salud":
        return "bg-blue-400 hover:bg-blue-500";
      case "Educación":
        return "bg-purple-700 hover:bg-purple-600";
      case "Educacion":
        return "bg-purple-700 hover:bg-purple-600";
      default:
        return "bg-gray-500 hover:bg-gray-400";
    }
  };

  const getSectionLink = () => {
    switch (props.seccion) {
      case "Sociales":
        return "/Sociales";
      case "Deportes":
        return "/Deportes";
      case "Policiales":
        return "/Policiales";
      case "Política":
        return "/Politica";
      case "Politica":
        return "/Politica";
      case "Economía":
        return "/Economia";
      case "Economia":
        return "/Economia";
      case "Salud":
        return "/Salud";
      case "Educación":
        return "/Educacion";
      case "Educacion":
        return "/Educacion";
      default:
        return "/NotFound";
    }
  };

  const imagenCard = {
    backgroundImage: `url(${props.imagen})`,
  }

  return (
    <>
      <div className={`flex justify-center items-center ${props.className}`}>
        <div
          className="container bg-white rounded-xl shadow-lg transform w-full"
          id="card"
          style={imagenCard}
        >
          <div className="h-1/3 p-4">
            <a href={getSectionLink()} rel="noopener noreferrer">
              <span
                className={`text-white text-xs font-bold absolute z-10 rounded-lg ${getSectionColor()} transition-all inline-block top-5 left-6 py-1.5 px-4 cursor-pointer`}
              >
                {props.seccion}
              </span>
              </a>
                <h3 className="text-black text-xs inline-block  cursor-default bg-white opacity-65 absolute z-20 top-5 px-2 py-1.5 right-6 rounded-lg ml-28">
                  {props.fecha}
                </h3>
              
            

            <h2 className="text-2xl mt-2 mb-2 font-bold cursor-pointer text-transparent text-center">
              {props.titulo}
            </h2>
          </div>
          
          <div className="contenido bottom-0 right-0 h-full rounded-b-xl text-white p-5 pt-3  duration-300 cursor-pointer">
            <div className="w-full h-1/3 mb-4 ">
              <h2 className="text-xl  mt-0 mb-2 font-bold cursor-pointer text-white text-Left">
                {props.titulo}
                
              </h2>
              <hr />
            </div>
            <div className="w-full h-2/3 pt-1">
              <p className="text-base">{props.subtitulo}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardInicio;
