import React from 'react'
import './BotonEnlace.css'

const BotonEnlace = ({ children, color, enlace, titulo, ...props }) => {
    return (
        <a href={`${enlace}`} title={`${titulo}`}>
      <button className={`botonEnlace ${color}`} {...props}>
        {children}
      </button>
      </a>
    );
  };

export default BotonEnlace