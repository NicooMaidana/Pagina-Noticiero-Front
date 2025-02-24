import React, { useState } from 'react'
import Pagination from '../../components/Pagination'
import TableGuiaTel from '../../components/TableGuiaTel'
import Search from '../../components/Search';
import EncabezadoSeccion from '../../components/encabezadoSeccion';

const GuiaTel = () => {

  const [data, setData] = useState([
    { nombre: 'Alesso', direccion: 'Bv. 9 de Julio 1475', telefono: '576850' },
    { nombre: 'Canello', direccion: 'Av El Libertador 262', telefono: '422019' },
    { nombre: 'Del Lago', direccion: 'Bv. Yrigoyen 980', telefono: '404445' },
    { nombre: 'Farma Salud', direccion: 'Bv. 25 de Mayo 536', telefono: '404075' },
    { nombre: 'FarmaNova', direccion: 'Bv. 25 de Mayo y Leon XIII', telefono: '402943' },
    { nombre: 'Maletto de Ferrero', direccion: 'Av El Libertador 676', telefono: '422417' },
    { nombre: 'Marengo', direccion: 'Belgrano y General Paz', telefono: '415028' },
    { nombre: 'Morello', direccion: 'Italia 840', telefono: '422411' },
    { nombre: 'San Roque', direccion: 'Av. El Libertador 244', telefono: '402145' },
    { nombre: 'Sanchez', direccion: 'Bv. Pte. Perón 62', telefono: '404243' },
    { nombre: 'Senn', direccion: '25 de mayo 835', telefono: '671528' },
    { nombre: 'Viotto', direccion: 'Bv. Belgrano 801', telefono: '423392' },
    { nombre: 'Vitta Bello', direccion: 'Italia y Cabral', telefono: '402844' },

  ]);

  const encabezadoData = [
    {
    titulo: "Guía Telefónica",
    }
  ];

  // Parámetros de Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 20;
  const totalRows = data.length;
  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = data.slice(indexOfFirstRow, indexOfLastRow);

  return (
    <>
    {encabezadoData.map((data, index) => (
        <EncabezadoSeccion
        key={index}
        titulo={data.titulo}
        />
      ))}
    <div className="container mx-auto px-4">
      <div className='flex justify-center'>
      <Search />
      </div>
      <div className='flex justify-center m-4'>
        <TableGuiaTel data={currentRows} />
      </div>
      <Pagination
        currentPage={currentPage}
        totalCards={totalRows}
        cardsPerPage={rowsPerPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
    </>
  )
}

export default GuiaTel
