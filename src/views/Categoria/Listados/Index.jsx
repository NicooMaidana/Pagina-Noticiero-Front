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
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import TablePagination from '@mui/material/TablePagination';
import './ListadoCategoria.css';
import AddIcon from '@mui/icons-material/AddCircleOutline';

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
    createData('Jose maria ', 'jose@gmail.com', 'Admin', 'Active'),
    createData('Julio Paez', 'julio@gmail.com', 'Operario', 'Inactive'),
    createData('Mario Martinez', 'mario@gmail.com', 'Admin', 'Active'),
];

export default function TablaGeneral({
    tableName = "Listado De Categorias",
    title = "Categorias",
    buttonText = "Agregar Categoria",
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
                    <Button title={buttonText} variant="contained" color="success"><AddIcon /></Button>
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
                                        <Button variant="outlined">Editar</Button> {/* Botón en la última celda */}
                                    </StyledTableCell>
                                </StyledTableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>

                {/* Paginador debajo de la tabla */}
                <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2 }}>
                    <TablePagination
                        rowsPerPageOptions={[5, 10, 20]}
                        component="div"
                        count={rows.length}
                        rowsPerPage={rowsPerPage}
                        page={page}
                        onPageChange={handleChangePage}
                        onRowsPerPageChange={handleChangeRowsPerPage}
                    />
                </Box>
            </CardContent>
        </Card>
    );
}



//ESTO ES PARA LA VIEW PARA LLAMAR AL COMPONENTE//
// import React from 'react'
// import TablaGeneral from '../../AdminComponents/TablaGeneral/index';


// const NecrologicoListado = () => {
//   return (
//     <div>
//       <TablaGeneral
//         tableName="Empleados"
//         title=" Listado Necrologico"
//         buttonText="Alta Necrologico"
//         columns={{ usuario: "Nombre", email: "Correo Electrónico", perfil: "Rol", estado: "Situación" }}
//       />
//     </div>
//   )
// }

// export default NecrologicoListado