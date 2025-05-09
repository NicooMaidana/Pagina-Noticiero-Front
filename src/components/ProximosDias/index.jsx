import React from "react";

const ProximosDias = ({ dataWeather }) => {
  return (
    <div className="w-full h-full m-3 flex items-center gap-4">
      <img
        src={dataWeather.imgclima}
        alt="clima"
        className="w-[30px] h-[30px]"
      />
      <div className="gap-3 flex">
        <p className="text-md font-semibold">{dataWeather.temp}</p>
        <p className="text-md">{dataWeather.fecha}</p>
        <p className="text-md ms-4">{dataWeather.dia}</p>
      </div>
    </div>
  );
};

export default ProximosDias;
