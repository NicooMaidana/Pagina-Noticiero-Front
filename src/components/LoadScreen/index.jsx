// LoadingScreen.js
import React from 'react';
import './LoadingScreen.css'; // Podés agregar tus estilos acá
import { HashLoader, PropagateLoader } from 'react-spinners';

const LoadingScreen = () => {
  return (
    <div className="loading-screen">
        <div className='opacidad'>
        <PropagateLoader color='gray' />
      </div>
    </div>
  );
};

export default LoadingScreen;