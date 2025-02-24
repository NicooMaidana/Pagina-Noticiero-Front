import React from 'react'
import "./Publicidad.styles.css";

export const Publicidad = ({...props}) => {
  return (
    <div>
        <a href={props.link} rel="noopener noreferrer"><img  src={props.img} alt="publicidad" className="rounded-md shadow-md" /></a>
    </div>
  )
}

export default Publicidad