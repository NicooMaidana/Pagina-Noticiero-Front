// import React from 'react'
// import "../Listado/Listado.css"
// import { CgDebug } from "react-icons/cg";

// const Index = () => {
//     return (
//         // <div className="space-x-7">
//         //     <div class="conteinerr shadow mb-4">
//         //         <div class="card-header py-3 d-flex">
//         //             <div className="card-body">
//         //                 <div className="border-b border-gray-900/10 pb-12">
//         //                     <div className="flex content-end">
//         //                         <h5 className="font-semibold leading-7 text-gray-900">Listado De Noticias Creadas</h5>
//         //                         <CgDebug />
//         //                         <CgDebug />
//         //                     </div>
//         //                 </div>
//         //                 <div>
//         //                     <table>
//         //                         <thead>
//         //                             <tr>
//         //                                 <th>Titulo</th>
//         //                                 <th>Descripcion</th>
//         //                                 <th>Resumen</th>
//         //                                 <th>DEAAA</th>
//         //                                 <th></th>
//         //                             </tr>
//         //                         </thead>
//         //                         <tbody>
//         //                             <tr>
//         //                                 <td>nano</td>
//         //                                 <td>esto es algo</td>
//         //                                 <td>un poco de todo</td>
//         //                                 <td>lo qye ru etyu estg yh</td>
//         //                                 <td></td>
//         //                             </tr>
//         //                         </tbody>
//         //                     </table>
//         //                 </div>
//         //             </div>
//         //         </div>
//         //     </div>
//         // </div>



//         <div className="box-content -space-x-1 h-200 w-200 p-4 border-4 border-teal-400 bg-teal-200">
//             <div className="h-full w-full bg-teal-400">
//                 <div className="card-header py-3 d-flex">
//                     <div className="card-body">
//                         <div className="border-b border-gray-900/10 pb-10">
//                             <h5 className="font-semibold leading-7 text-gray-900 text-center">Listado De Noticias Creadas <CgDebug className="f" /></h5>
//                             <table>
//                                 <thead>
//                                     <tr>
//                                         <th>Titulo</th>
//                                         <th>Descripcion</th>
//                                         <th>Resumen</th>
//                                         <th>DEAAA</th>
//                                         <th></th>
//                                     </tr>
//                                 </thead>
//                                 <tbody>
//                                     <tr>
//                                         <td>nano</td>
//                                         <td>esto es algo</td>
//                                         <td>un poco de todo</td>
//                                         <td>lo qye ru etyu estg yh</td>
//                                         <td></td>
//                                     </tr>
//                                 </tbody>
//                             </table>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//         </div>
//     )
// }


// export default Index























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
import './tableUser.css';
import CircleIcon from '@mui/icons-material/Circle';
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
    tableName = "Listado De Noticias",
    title = "Noticias",
    buttonText = "Agregar Noticia",
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
                    <Button variant="contained" color="success">{buttonText} <AddIcon /></Button>
                </Box>
                <Box mb={2}>
                    <Typography variant="body1">
                        <CircleIcon sx={{ color: 'green', fontSize: 14, verticalAlign: 'middle', mr: 1 }} />
                        Visible Publicamente
                    </Typography>
                    <Typography variant="body1">
                        <CircleIcon sx={{ color: 'orange', fontSize: 14, verticalAlign: 'middle', mr: 1 }} />
                        Invisible (Fuera del margen asignado)
                    </Typography>
                    <Typography variant="body1">
                        <CircleIcon sx={{ color: 'red', fontSize: 14, verticalAlign: 'middle', mr: 1 }} />
                        Invisible (Deshabilitado)
                    </Typography>
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



// import React from 'react';
// import { Card, Button, Badge } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';

// const NewsComponent = () => {
//   return (
//     <div className="container mt-5">
//       <Card className="p-4">
//         <Card.Title>Noticias</Card.Title>
//         <hr />
//         <div className="mb-3">
//           <p>
//             <Badge pill bg="success" className="me-2"></Badge>
//             Visible Publicamente
//           </p>
//           <p>
//             <Badge pill bg="warning" text="dark" className="me-2"></Badge>
//             Invisible (Fuera del margen asignado)
//           </p>
//           <p>
//             <Badge pill bg="danger" className="me-2"></Badge>
//             Invisible (Deshabilitado)
//           </p>
//         </div>
//         <div className="d-flex justify-content-start">
//           <Button variant="success" className="me-2">
//             <i className="fas fa-file-excel me-2"></i> Excel
//           </Button>
//           <Button variant="danger">
//             <i className="fas fa-file-pdf me-2"></i> PDF
//           </Button>
//         </div>
//         <div className="mt-3">
//           <label htmlFor="search">Buscar:</label>
//           <input type="text" id="search" className="form-control" placeholder="Buscar..." />
//         </div>
//       </Card>
//     </div>
//   );
// };

// export default NewsComponent;




// import React from 'react';
// import { Card, CardContent, Typography, Box, Button, TextField, Badge } from '@mui/material';
// import DownloadIcon from '@mui/icons-material/Download';
// import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
// import CircleIcon from '@mui/icons-material/Circle';

// const NewsComponentMUI = () => {
//     return (
//         <Box sx={{ maxWidth: 600, mx: 'auto', mt: 5 }}>
//             <Card variant="outlined">
//                 <CardContent>
//                     <Typography variant="h5" gutterBottom>
//                         Noticias
//                     </Typography>
//                     <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 2 }} />

//                     <Box mb={2}>
//                         <Typography variant="body1">
//                             <CircleIcon sx={{ color: 'green', fontSize: 14, verticalAlign: 'middle', mr: 1 }} />
//                             Visible Publicamente
//                         </Typography>
//                         <Typography variant="body1">
//                             <CircleIcon sx={{ color: 'orange', fontSize: 14, verticalAlign: 'middle', mr: 1 }} />
//                             Invisible (Fuera del margen asignado)
//                         </Typography>
//                         <Typography variant="body1">
//                             <CircleIcon sx={{ color: 'red', fontSize: 14, verticalAlign: 'middle', mr: 1 }} />
//                             Invisible (Deshabilitado)
//                         </Typography>
//                     </Box>

//                     <Box mb={2} display="flex" gap={2}>
//                         <Button variant="contained" color="success" startIcon={<DownloadIcon />}>
//                             Excel
//                         </Button>
//                         <Button variant="contained" color="error" startIcon={<PictureAsPdfIcon />}>
//                             PDF
//                         </Button>
//                     </Box>

//                     <TextField
//                         label="Buscar"
//                         variant="outlined"
//                         size="small"
//                         fullWidth
//                     />
//                 </CardContent>
//             </Card>
//         </Box>
//     );
// };

// export default NewsComponentMUI;