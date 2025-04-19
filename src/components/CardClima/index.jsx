import React from "react";
import { IoIosWater } from "react-icons/io";
import { TbTemperatureSun } from "react-icons/tb";
import { FaTemperatureQuarter } from "react-icons/fa6";
import { Link } from "react-router-dom";

export const CardClima = ({ dataWeather }) => {
  return (
    <div className="flex h-full w-full justify-center items-center p-5">
      <div className="bg-zinc-800 text-gray-200 rounded-3xl shadow-md w-full max-w-xl min-h-[250px] p-6 flex flex-col">
        <div className="flex items-center mb-4">
          <img
            src="src/assets/img/en_vivo.gif"
            alt="en vivo"
            className="w-5 h-5"
          />
          <h6 className="text-sm ml-2">{dataWeather.hora}</h6>
        </div>

        <Link to={"./Clima"}>
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
            <div className="lg:basis-1/2 flex flex-col items-center lg:items-end">
              <img
                src={dataWeather.imgclima}
                alt="clima"
                className="w-full h-auto object-cover rounded-lg max-w-[160px]"
              />
            </div>
            <div className="lg:basis-1/2 flex flex-col items-center lg:items-start lg:ml-8 mt-4 lg:mt-0">
              <h6 className="text-8xl font-normal">{dataWeather.temp}</h6>
              <span className="text-base text-gray-400">
                {dataWeather.tiempo}
              </span>

              <div className="flex justify-center lg:justify-start items-center mt-5">
                <IoIosWater className="text-blue-300 text-xl" />
                <span className="ml-2 text-slate-400 text-base">
                  Humedad: {dataWeather.humedad}
                </span>
              </div>

              <div className="flex justify-center lg:justify-start items-center mt-3">
                <FaTemperatureQuarter className="text-yellow-500 text-xl" />
                <span className="ml-2 text-slate-400 text-base">
                  Sensación térmica: {dataWeather.st}
                </span>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default CardClima;
