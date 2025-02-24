import React from 'react';
import './Mantenimiento.css'; // Importa el archivo de estilos

const Mantenimiento = () => {
    return (
        <div className="maintenance-container">
            <div className="maintenance-content">
                <h1 className="maintenance-title">Mantenimiento en Curso</h1>
                <p className="maintenance-texto1">Estamos realizando tareas de mantenimiento en el sitio web. Por favor, regresa más tarde.</p>
                <p>Gracias por tu paciencia.</p>
            </div>
        </div>
    );
};

export default Mantenimiento;