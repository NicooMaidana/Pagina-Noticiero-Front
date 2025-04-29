import React from "react";
import { IoIosCalendar, IoIosPin, IoIosWater } from "react-icons/io";
import { TbTemperatureSun } from "react-icons/tb";
import { FaTemperatureQuarter } from "react-icons/fa6";
import { Link } from "react-router-dom";

export const CardClima = ({ dataWeather }) => {
  return (
    <div className="flex h-full w-full p-4">
      <div className="bg-zinc-900 text-gray-200 rounded-xl w-full min-h-[250px] p-8 flex flex-col ">
        <div className="flex flex-col mb-4">
          <h6 className="text-sm text-gray-300">{dataWeather.hora}</h6>
        </div>
  
        <Link to="./Clima" className="w-full">
          <div className="flex flex-col">
            <div className="flex ">
              <h6 className="text-[50px] font-thin">{dataWeather.temp}</h6>
              <img
                src={dataWeather.imgclima}
                alt="clima"
                className="w-[65px] h-[65px] ml-8 mt-3"
              />
            </div>
  
            <h5 className="text-lg font-extralight text-white mt-2">{dataWeather.pronostico}</h5>
  
            <hr className="border-gray-500 w-full my-4" />
  
            <div className="flex flex-col text-slate-400 text-sm gap-2">
              <div className="flex">
                <IoIosCalendar className="mr-2 text-white text-lg" />
                <span className="text-gray-400">{dataWeather.fecha}</span>
              </div>
              <div className="flex">
                <IoIosPin className="mr-2 text-white text-lg" />
                <span className="text-gray-400">{dataWeather.ciudad}</span>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default CardClima;
