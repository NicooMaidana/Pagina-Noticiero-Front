import React from 'react'
import TablaGeneral from '../../../AdminComponents/TablaGeneral';

const CementerioListado = () => {
  return (
      <div>
        <TablaGeneral
          tableName="Cementerios"
          title=" Listado de Cementerios"
          buttonText="Agregar Cementerio"
          columns={{ usuario: "Nombre", email: "Provincia", perfil: "Localidad", estado: "Estado" }}
        />
      </div>
  )
}

export default CementerioListado
