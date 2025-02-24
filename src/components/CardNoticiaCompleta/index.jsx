import React from 'react'
// import "./CardNoticiaCompleta.styles.css";
import { FaFacebookF, FaWhatsapp } from "react-icons/fa";
import { IoIosMail, IoMdHome } from "react-icons/io";
import { FaXTwitter } from "react-icons/fa6";

const NoticiaCompleta = ({ ...props }) => {
  
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
    <>
  
  <div className={`w-full md:m-4 md:w-4/6 lg:w-4/6 sm:w-4/6 justify-center items-center bg-gray-100 shadow-md rounded-lg flex flex-col ${props.className}`}>
    <div className="w-full ml-6 mt-3">
    <p>{props.fecha_hora}</p>
    </div>
      <div className="w-full p-4 justify-start flex flex-col">
        <h4 className="border-b-2 p-2 text-4xl">{props.titulo}</h4>
        <p className="my-4 text-lg">{props.subtitulo}</p>
        <img src={`${props.imagen}`} className="w-full h-auto object-cover rounded-md shadow-lg" />
        <p className="my-4 text-lg">{props.contenido}</p>
      </div>

      <p className="p-2 text-center border-t-2 w-11/12 text-base cursor-default">Compartir en ...</p>
      <div className="mb-6 gap-1 flex items-center"> 
        <a
          href="https://www.facebook.com/share_channel/"
          className="icon-facebook flex h-10 w-10 items-center justify-center rounded-full border border-stroke
          bg-[#3b5998] border-[#49639c] text-white sm:mr-4 lg:mr-3 xl:mr-4 hover:scale-110 transition-all">
          <i className="flex scale-125"><FaFacebookF /></i>
        </a>
        <a
          href="https://api.whatsapp.com/send?text=%22Siento+mucha+bronca+e+indignaci%C3%B3n%22%20https://practicas.coopmorteros.coop/?noticia=6612&%3Cp%3ECristina%20Rui,%20hermana%20de%20Jorge,%20expres%C3%B3%20sus%20sentimientos%20al%20enterarse%20de%20esta%20noticia%20relacionada%20al%20tweet%20de%20Javier%20Milei%20para%20atacar%20a%20Ignacio%20Torres.%C2%A0%3C/p%3E"
          className="icon-whatsapp flex h-10 w-10 items-center justify-center rounded-full border border-stroke
          bg-[#25D366] border-[#62da8e] text-white sm:mr-4 lg:mr-3 xl:mr-4 hover:scale-110 transition-all">
          <i className="flex scale-125"><FaWhatsapp /></i>
        </a>
        <a
          href="mailto:?subject=%22Siento%20mucha%20bronca%20e%20indignaci%C3%B3n%22&body=https://practicas.coopmorteros.coop/?noticia=6612&media=/public/image_news/65df35fbebf97-6612.jpg"
          className="icon-mail flex h-10 w-10 items-center justify-center rounded-full border border-stroke
          bg-[#d60e0e] border-[#d64c4c] text-white sm:mr-4 lg:mr-3 xl:mr-4 hover:scale-110 transition-all">
          <i className="flex scale-125"><IoIosMail /></i>
        </a>
        <a
          href="https://x.com/intent/tweet?text=%22Siento+mucha+bronca+e+indignaci%C3%B3n%22&url=https://practicas.coopmorteros.coop/?noticia=6612&=/public/image_news/65df35fbebf97-6612.jpg"
          className="icon-x flex h-10 w-10 items-center justify-center rounded-full border border-stroke
          bg-[#000000] border-[#393939] text-white sm:mr-4 lg:mr-3 xl:mr-4 hover:scale-110 transition-all">
          <i className="flex scale-125"><FaXTwitter /></i>
        </a>
      </div>
    </div>

    </>
  )
}

export default NoticiaCompleta