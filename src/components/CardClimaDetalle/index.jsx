import React from 'react';

const InfoCard = ({ icono, titulo, dato }) => {
  return (
    <div className="bg-zinc-800 text-gray-200 rounded-xl p-2 m-3 flex items-center shadow-md w-52 h-20">
      <div className="text-gray-200 drop-shadow-sm">
        {icono}
      </div>
      <div className="ml-4">
        <h3 className="text-base font-medium">{titulo}</h3>
        <p className="text-sm text-gray-400">{dato}</p>
      </div>
    </div>
  );
};

export default InfoCard;
