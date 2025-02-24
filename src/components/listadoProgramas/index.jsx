import React from 'react'

const ListadoProgramas = ({ ...props }) => {
  return (
    <>
    <div className="mx-auto justify-center grayscale hover:grayscale-0 opacity-70 hover:opacity-100 transition-all duration-500">
    <div className="flex overflow-x-auto space-x-4 hover:scale-105 transition-all duration-500">
      <div className="flex-shrink-0 w-24 h-24">
        <a href={props.url} target="_blank" rel="noopener noreferrer">
        <img src={props.imagen} title={props.title} className="w-full h-full object-cover rounded-lg" />
        </a>
      </div>
    </div>
  </div>
    </>
  )
}

export default ListadoProgramas