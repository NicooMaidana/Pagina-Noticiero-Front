import React from 'react'
import TablaGeneral from '../../../AdminComponents/TablaGeneral/index';

const IglesiaListado = () => {
  return (
    <div>
    <TablaGeneral
      tableName="Iglesias"
      title=" Listado de Iglesias"
      buttonText="Agregar Iglesia"
      columns={{ usuario: "Nombre", email: "Provincia", perfil: "Localidad", estado: "Estado" }}
    />
  </div>
  )
}

export default IglesiaListado
