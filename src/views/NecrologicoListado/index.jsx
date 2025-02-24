import React from 'react'
import TablaGeneral from '../../AdminComponents/TablaGeneral/index';


const NecrologicoListado = () => {
  return (
    <div>
      <TablaGeneral
        tableName="Empleados"
        title=" Listado Necrologico"
        buttonText="Alta Necrologico"
        columns={{ usuario: "Nombre", email: "Correo Electrónico", perfil: "Rol", estado: "Situación" }}
      />
    </div>
  )
}

export default NecrologicoListado
