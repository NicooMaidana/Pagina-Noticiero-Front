import React from 'react'

export const CardClimaExtendido = ({ dataClimaExtendido }) => {
    return (
        <div>
            <div className="flex flex-col p-2 items-center border w-50 sm:px-12 bg-slate-100 shadow-md rounded-3xl">
                <div className="text-center">
                    <h2 className="text-lg font-semibold">{dataClimaExtendido.dia}</h2>
                    <p className="text-sm dark:text-gray-600">{dataClimaExtendido.fecha}</p>
                </div>
                <img src={dataClimaExtendido.img} alt="weather icon" className="w-32 h-32 p-6" />
                <div className="mb-2 text-2xl font-semibold">{dataClimaExtendido.maxTemp}
                    <span className="mx-1">/</span>{dataClimaExtendido.minTemp}
                </div>
                <p className="text-sm dark:text-gray-600">{dataClimaExtendido.tiempo}</p>
            </div>
        </div>
    )
}
export default CardClimaExtendido
