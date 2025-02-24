import React from 'react'
import { IoIosWater } from 'react-icons/io'
import { TbTemperatureSun } from 'react-icons/tb'
import './CardClima.css'
import { FaTemperatureQuarter } from 'react-icons/fa6'
import { Link } from 'react-router-dom'


export const CardClima = ({ dataWeather }) => {
    return (
        <div className="container flex h-full w-full justify-center items-center p-5">
            <div className="card bg-white text-gray-800 rounded-3xl border-none shadow-md flex flex-col h-full">
                <div className="p-4 flex flex-col flex-grow">
                    <div className="hora flex items-center">
                        <img src={('src/assets/img/en_vivo.gif')} alt="en vivo" style={{ width: '22px', height: '22px' }} />
                        <h6 className="text-sm ml-2">{dataWeather.hora} hs</h6>
                    </div>
                    <Link to={'./Clima'}>
                        <div className="flex flex-col flex-grow lg:flex-row lg:items-center lg:justify-between" title="Ver Pronostico Completo">
                            <div className="lg:basis-1/2 flex flex-col items-center lg:items-end">
                                <img src={dataWeather.imgclima} alt="clima" className="weather-img w-full h-auto object-cover" />
                            </div>
                            <div className="lg:basis-1/2 flex flex-col items-center lg:items-start lg:ml-8">
                                <h6 className="temp-text">{dataWeather.temp}</h6>
                                <span className="tiempo">{dataWeather.tiempo}</span>
                                <div className="flex justify-center lg:justify-start items-center mt-2">
                                    <IoIosWater className='icono' />
                                    <span className="ml-1 text-slate-700">Humedad: {dataWeather.humedad}</span>
                                </div>
                                <div className="flex justify-center lg:justify-start items-center mt-2">
                                    <FaTemperatureQuarter className='icono' />
                                    <span className="ml-1 text-slate-700">Sensación térmica: {dataWeather.st}</span>
                                </div>
                            </div>
                        </div>
                    </Link>
                    {/* <div className="flex flex-col flex-grow lg:flex-row lg:items-center lg:justify-between">
                        <div className="lg:basis-1/2 flex flex-col items-center lg:items-end">
                            <img src={dataWeather.imgclima} alt="clima" className="weather-img w-full h-auto object-cover" />
                        </div>
                        <div className="lg:basis-1/2 flex flex-col items-center lg:items-start lg:ml-8">
                            <h6 className="temp-text">{dataWeather.temp}</h6>
                            <span className="tiempo">{dataWeather.tiempo}</span>
                            <div className="flex justify-center lg:justify-start items-center mt-2">
                                <IoIosWater className='icono' />
                                <span className="ml-1 text-slate-700">Humedad: {dataWeather.humedad}</span>
                            </div>
                            <div className="flex justify-center lg:justify-start items-center mt-2">
                                <FaTemperatureQuarter className='icono' />
                                <span className="ml-1 text-slate-700">Sensación térmica: {dataWeather.st}</span>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>




    )
}

export default CardClima