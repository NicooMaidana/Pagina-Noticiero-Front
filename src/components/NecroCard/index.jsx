import React from "react";
import "./NecroCard.css";

const NecroCard = ({ ...props }) => {
  return (
    <div className="cards-container">
      <div className="card">
        <div className="card-header">
          <h2>{props.nombre}</h2>
          <p>{props.subtitulo}</p>
        </div>
        <div className="card-body">
          <p><span className="font">Sepelio:</span> {props.sepelio}</p>
          <p><span className="font">Apertura de sala:</span> {props.aperturaSala}</p>
          <p><span className="font">Iglesia:</span> {props.iglesia}</p>
          <p><span className="font">Cementerio:</span> {props.cementerio}</p>
          <p><span className="font">Casa de duelo:</span> {props.casaDeDuelo}</p>
        </div>
      </div>
    </div>
  );
};

export default NecroCard;
