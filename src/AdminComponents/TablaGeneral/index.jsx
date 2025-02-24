import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import SettingsIcon from '@mui/icons-material/Settings';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Paginador from '../Paginador';
import './tableUser.css';

// Estilos personalizados para la tabla
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

// Datos de ejemplo para la tabla
function createData(usuario, email, perfil, estado) {
  return { usuario, email, perfil, estado };
}

const rows = [
  createData('Jose Maria', 'jose@gmail.com', 'Administrador', 'Activo'),
  createData('Julio Paez', 'julio@gmail.com', 'Operario', 'Inactivo'),
  createData('Mario Martinez', 'mario@gmail.com', 'Administrador', 'Activo'),
];

export default function TablaGeneral({
  tableName = "Usuarios",
  title = "Listado Usuarios",
  buttonText = "Agregar Usuario",
  columns = { usuario: "Usuario", email: "Email", perfil: "Perfil", estado: "Estado" }
}) {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0); // Volver a la primera página cuando cambia el tamaño de las filas
  };

  return (
    <Card className="card-container">
      <CardContent>
        {/* Título y Botón a la misma altura */}
        <Box className="title-bar" sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
          <Typography variant="h5" component="div">
            {title}
          </Typography>
          <Button variant="contained" color="success">{buttonText}</Button>
        </Box>

        {/* Botones PDF y Excel y Buscador */}
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
          <Box>
            <Button variant="outlined" className='pdf-button' sx={{ mr: 1 }}>PDF</Button>
            <Button variant="outlined" className='excel-button'>Excel</Button>
          </Box>
          <TextField
            label="Buscar"
            variant="outlined"
            size="small"
            className="search-field"
          />
        </Box>

        {/* Tabla dentro de la tarjeta */}
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700 }} aria-label={`${tableName} table`}>
            <TableHead>
              <TableRow>
                <StyledTableCell>{columns.usuario}</StyledTableCell>
                <StyledTableCell align='center'>{columns.email}</StyledTableCell>
                <StyledTableCell align='center'>{columns.perfil}</StyledTableCell>
                <StyledTableCell align='center'>{columns.estado}</StyledTableCell>
                <StyledTableCell align="center"></StyledTableCell> {/* Encabezado vacío para el botón */}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (
                <StyledTableRow key={row.usuario}>
                  <StyledTableCell component="th" scope="row">
                    {row.usuario}
                  </StyledTableCell>
                  <StyledTableCell align='center'>{row.email}</StyledTableCell>
                  <StyledTableCell align='center'>{row.perfil}</StyledTableCell>
                  <StyledTableCell align='center'>{row.estado}</StyledTableCell>
                  <StyledTableCell align="center">
                    <button>
                      <SettingsIcon />
                    </button>
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        {/* Paginador debajo de la tabla */}
        <Paginador 
          page={page}
          rowsPerPage={rowsPerPage}
          count={rows.length}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </CardContent>
    </Card>
  );
}