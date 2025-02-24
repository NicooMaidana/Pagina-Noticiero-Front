import React from 'react'
import TablaGeneral from '../../../AdminComponents/TablaGeneral'
const ListadoUsuario = () => {
  return (
    <div>
      <TablaGeneral
        tableName="Usuarios"
        title=" Listado Usuarios"
        buttonText="Alta Usuarios"
        columns={{ usuario: "Usuario", email: "Email", perfil: "Perfil", estado: "Estado" }}
      />
    </div>
  )
}

export default ListadoUsuario