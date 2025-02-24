import React from 'react'
import TablaGeneral from '../../../AdminComponents/TablaGeneral'

const ListadoFarmacia = () => {
  return (
    <div>
        <TablaGeneral
        tableName="Farmacias"
        title=" Listado Farmacias"
        buttonText="Alta Farmacia"
        columns={{ usuario: "Nombre", email: "Direccion", perfil: "Telefono", estado: "Estado" }}
      />
    </div>
  )
}

export default ListadoFarmacia