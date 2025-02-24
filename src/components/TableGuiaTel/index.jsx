import React from 'react'
import './TableGuiaTel.css'

const TableGuiaTel = ({ data }) => {
    return (
        <div className="table-container">
            <table className="table-fixed w-full" id='table-guiatel'>
                <thead className="cursor-default">
                    <tr>
                        <th>Nombre</th>
                        <th>Dirección</th>
                        <th>Teléfono</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((entry, index) => (
                        <tr key={index}>
                            <td>{entry.nombre}</td>
                            <td>{entry.direccion}</td>
                            <td>{entry.telefono}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default TableGuiaTel


