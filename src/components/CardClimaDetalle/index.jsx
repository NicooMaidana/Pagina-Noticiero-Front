import React from 'react';
import './CardClimaDetalle.css';

const InfoCard = ({ icono, titulo, dato }) => {
  return (
    <div className="info-card shadow-md">
      <div className="info-card-icon">
        {icono}
      </div>
      <div className="info-card-content">
        <h3 className="info-card-title">{titulo}</h3>
        <p className="info-card-data">{dato}</p>
      </div>
    </div>
  );
};

export default InfoCard;