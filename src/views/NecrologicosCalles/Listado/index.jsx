import React from 'react'
import TablaGeneral from '../../../AdminComponents/TablaGeneral';

const CallesListado = () => {
  return (
    <div>
      <TablaGeneral
        tableName="Empleados"
        title=" Listado de Calles"
        buttonText="Agregar Calle"
        columns={{ usuario: "Nombre", email: "Provincia", perfil: "Localidad", estado: "Estado" }}
      />
    </div>
  )
}

export default CallesListado
