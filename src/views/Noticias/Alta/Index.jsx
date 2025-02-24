
// import React, { useState } from 'react';
// import { TextField, Button, MenuItem, Box, Typography } from '@mui/material';
// import AddBoxIcon from '@mui/icons-material/AddBox';
// import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
// import ListIcon from '@mui/icons-material/List';

// const FormularioNoticia = () => {
//     const [titulo, setTitulo] = useState('');
//     const [resumen, setResumen] = useState('');
//     const [categoria, setCategoria] = useState('');
//     const [ambito, setAmbito] = useState('');
//     const [descripcion, setDescripcion] = useState('');
//     const [nombreFuente, setNombreFuente] = useState('');
//     const [linkFuente, setLinkFuente] = useState('');
//     const [fecha, setFecha] = useState('');
//     const [hora, setHora] = useState('');
//     const [estado, setEstado] = useState('');
//     const [posicion, setPosicion] = useState('');
//     const [videoLink, setVideoLink] = useState('');

//     const categorias = [
//         { value: 'deportes', label: 'Deportes' },
//         { value: 'politica', label: 'Política' },
//         { value: 'cultura', label: 'Cultura' },
//     ];

//     const ambitos = [
//         { value: 'nacional', label: 'Nacional' },
//         { value: 'internacional', label: 'Internacional' },
//     ];

//     const estados = [
//         { value: 'activa', label: 'Activa' },
//         { value: 'inactiva', label: 'Inactiva' },
//     ];

//     const posiciones = [
//         { value: 'posicion 1', label: 'posicion 1' },
//         { value: 'posicion 2', label: 'posicion 2' },
//         { value: 'posicion 3', label: 'posicion 3' },
//         { value: 'posicion 4', label: 'posicion 4' },
//         { value: 'posicion 5', label: 'posicion 5' },
//         { value: 'posicion 6', label: 'posicion 6' },
//         { value: 'posicion 7', label: 'posicion 7' },
//         { value: 'posicion 8', label: 'posicion 8' },
//         { value: 'posicion 8', label: 'posicion 9' },
//         { value: 'posicion 8', label: 'posicion 10' },
//         { value: 'posicion 8', label: 'posicion 11' },
//         { value: 'posicion 8', label: 'posicion 12' },

//     ];

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         // Aquí se puede manejar la lógica de envío del formulario
//         console.log({
//             titulo,
//             resumen,
//             categoria,
//             ambito,
//             descripcion,
//             nombreFuente,
//             linkFuente,
//             fecha,
//             hora,
//             videoLink,
//         });
//     };

//     return (
//         <div className="card-container mx-auto mt-8 p-4">
//             <div className="bg-white shadow-lg rounded-lg p-6">
//                 {/* Título y Campos Obligatorios */}
//                 <Box className="title-bar" sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
//                     <Typography variant="h3" component="div">
//                         <h3 className="text-2xl font-semibold mb-2">Crear Noticia</h3>
//                     </Typography>
//                     <Button variant="contained" color="primary">
//                         Listado De Categoría <ListIcon />
//                     </Button>
//                 </Box>
//                 <p className="text-red-600 text-center text-sm mb-4">(*) Campos Obligatorios</p>

//                 {/* Formulario */}
//                 <form onSubmit={handleSubmit}>
//                     {/* Título */}
//                     <div className="mb-4">
//                         <label className="block text-base font-semibold text-gray-800 mb-1">
//                             Titulo <span className="text-red-600">*</span>
//                         </label>
//                         <textarea name=""
//                             id="" variant="outlined"
//                             placeholder='Ingrese un titulo'
//                             fullWidth
//                             multiline
//                             rows={3}
//                             value={titulo}
//                             onChange={(e) => setTitulo(e.target.value)}
//                             className="mt-1 block w-full rounded-md border-2 border-gray-300 shadow-sm py-2 px-4 focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
//                             required>
//                         </textarea>
//                     </div>
//                     {/* Resumen y Descripcion */}
//                     <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
//                         <div>
//                             <label className="block text-base font-semibold text-gray-800 mb-1">
//                                 resumen
//                             </label>
//                             <input
//                                 type="text"
//                                 id=""
//                                 variant="outlined"
//                                 fullWidth
//                                 multiline
//                                 rows={1}
//                                 value={resumen}
//                                 placeholder="Ingrese un resumen"
//                                 className="mt-1 block w-full rounded-md border-2 border-gray-300 shadow-sm py-2 px-4 focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
//                                 onChange={(e) => setResumen(e.target.value)}
//                                 required
//                             />
//                         </div>
//                         <div>
//                             <label className="block text-base font-semibold text-gray-800 mb-1">
//                                 Descripción
//                             </label>
//                             <input
//                                 type="text"
//                                 id=""
//                                 variant="outlined"
//                                 fullWidth
//                                 multiline
//                                 rows={1}
//                                 value={descripcion}
//                                 placeholder="Ingrese una descripcion"
//                                 className="mt-1 block w-full rounded-md border-2 border-gray-300 shadow-sm py-2 px-4 focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
//                                 onChange={(e) => setDescripcion(e.target.value)}
//                                 required
//                             />
//                         </div>
//                     </div>
//                     <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
//                         {/* Categoría */}
//                         <div>
//                             <label className="block text-base font-semibold text-gray-800 mb-1">
//                                 Categoría <span className="text-red-600">*</span>
//                             </label>
//                             <select
//                                 select
//                                 rows={1}
//                                 variant="outlined"
//                                 fullWidth
//                                 value={categoria}
//                                 onChange={(e) => setCategoria(e.target.value)}
//                                 required
//                                 className="mt-1 block w-full rounded-md border-2 border-gray-300 shadow-sm py-2 px-4 focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
//                             >
//                                 <option value="">Seleccionar..</option>
//                                 {categorias.map((option) => (
//                                     <option key={option.value} value={option.value}>
//                                         {option.label}
//                                     </option>
//                                 ))}
//                             </select>
//                         </div>

//                         {/* Ámbito */}
//                         <div>
//                             <label className="block text-base font-semibold text-gray-800 mb-1">
//                                 Ámbito <span className="text-red-600">*</span>
//                             </label>
//                             <select
//                                 select
//                                 rows={1}
//                                 variant="outlined"
//                                 fullWidth
//                                 value={ambito}
//                                 onChange={(e) => setAmbito(e.target.value)}
//                                 required
//                                 className="mt-1 block w-full rounded-md border-2 border-gray-300 shadow-sm py-2 px-4 focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
//                             >
//                                 <option value="">Seleccionar..</option>
//                                 {ambitos.map((option) => (
//                                     <option key={option.value} value={option.value}>
//                                         {option.label}
//                                     </option>
//                                 ))}
//                             </select>
//                         </div>

//                         {/* Fuente */}
//                         <div>
//                             <label className="block text-base font-semibold text-gray-800 mb-1">
//                                 Nombre Fuente
//                             </label>
//                             <input
//                                 type="text"
//                                 id=""
//                                 variant="outlined"
//                                 fullWidth
//                                 value={nombreFuente}
//                                 placeholder="Ingrese el nombre de la fuente"
//                                 className="mt-1 block w-full rounded-md border-2 border-gray-300 shadow-sm py-2 px-4 focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
//                                 onChange={(e) => setNombreFuente(e.target.value)}
//                                 required
//                             />
//                         </div>
//                         <div>
//                             <label className="block text-base font-semibold text-gray-800 mb-1">
//                                 Link Fuente
//                             </label>
//                             <input
//                                 id=""
//                                 variant="outlined"
//                                 fullWidth
//                                 value={linkFuente}
//                                 placeholder="Ingrese el link de la fuente"
//                                 className="mt-1 block w-full rounded-md border-2 border-gray-300 shadow-sm py-2 px-4 focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
//                                 onChange={(e) => setLinkFuente(e.target.value)}
//                                 required
//                             />
//                         </div>
//                         {/* Fecha Inicio */}
//                         <div>
//                             <label className="block text-base font-semibold text-gray-800 mb-1">
//                                 Fecha <span className="text-red-600">*</span>
//                             </label>
//                             <input
//                                 type="date"
//                                 id=""
//                                 variant="outlined"
//                                 fullWidth
//                                 value={fecha}
//                                 className="mt-1 block w-full rounded-md border-2 border-gray-300 shadow-sm py-2 px-4 focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
//                                 onChange={(e) => setFecha(e.target.value)}
//                                 required
//                             />
//                         </div>
//                         {/* Hora Inicio */}
//                         <div>
//                             <label className="block text-base font-semibold text-gray-800 mb-1">
//                                 Hora <span className="text-red-600">*</span>
//                             </label>
//                             <input
//                                 type="time"
//                                 id=""
//                                 variant="outlined"
//                                 fullWidth
//                                 value={hora}
//                                 className="mt-1 block w-full rounded-md border-2 border-gray-300 shadow-sm py-2 px-4 focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
//                                 onChange={(e) => setHora(e.target.value)}
//                                 required
//                             />
//                         </div>
//                         {/* Fecha Final */}
//                         <div>
//                             <label className="block text-base font-semibold text-gray-800 mb-1">
//                                 Fecha Final <span className="text-red-600">*</span>
//                             </label>
//                             <input
//                                 type="date"
//                                 id=""
//                                 variant="outlined"
//                                 fullWidth
//                                 value={fecha}
//                                 className="mt-1 block w-full rounded-md border-2 border-gray-300 shadow-sm py-2 px-4 focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
//                                 onChange={(e) => setFecha(e.target.value)}
//                                 required
//                             />
//                         </div>

//                         {/* Hora Final */}
//                         <div>
//                             <label className="block text-base font-semibold text-gray-800 mb-1">
//                                 Hora Final <span className="text-red-600">*</span>
//                             </label>
//                             <input
//                                 type="time"
//                                 id=""
//                                 variant="outlined"
//                                 fullWidth
//                                 value={hora}
//                                 className="mt-1 block w-full rounded-md border-2 border-gray-300 shadow-sm py-2 px-4 focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
//                                 onChange={(e) => setHora(e.target.value)}
//                                 required
//                             />
//                         </div>
//                     </div>
//                     <div class="flex justify-center">
//                         <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4 ">
//                             {/* Estado */}
//                             <div>
//                                 <label className="block text-base font-semibold text-gray-800 mb-1">
//                                     Estado <span className="text-red-600">*</span>
//                                 </label>
//                                 <select
//                                     select
//                                     rows={1}
//                                     variant="outlined"
//                                     fullWidth
//                                     value={estado}
//                                     onChange={(e) => setEstado(e.target.value)}
//                                     required
//                                     className="mt-1 block w-full rounded-md border-2 border-gray-300 shadow-sm py-2 px-4 focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
//                                 >
//                                     <option value="">Seleccionar..</option>
//                                     {estados.map((option) => (
//                                         <option key={option.value} value={option.value}>
//                                             {option.label}
//                                         </option>
//                                     ))}
//                                 </select>
//                             </div>
//                             {/* Video */}
//                             <div>
//                                 <label className="block text-base font-semibold text-gray-800 mb-1">
//                                     Video Link <span className="text-red-600">*</span>
//                                 </label>
//                                 <input
//                                     type="url"
//                                     id=""
//                                     variant="outlined"
//                                     fullWidth
//                                     value={videoLink}
//                                     className="mt-1 block w-full rounded-md border-2 border-gray-300 shadow-sm py-2 px-4 focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
//                                     onChange={(e) => setVideoLink(e.target.value)}
//                                     placeholder="Enter video link (e.g., https://www.youtube.com/watch?v=example)"
//                                     required
//                                 />
//                             </div>
//                             {/* Posicion */}
//                             <div>
//                                 <label className="block text-base font-semibold text-gray-800 mb-1">
//                                     Posicion <span className="text-red-600">*</span>
//                                 </label>
//                                 <select
//                                     select
//                                     rows={1}
//                                     variant="outlined"
//                                     fullWidth
//                                     value={posicion}
//                                     onChange={(e) => setPosicion(e.target.value)}
//                                     required
//                                     className="mt-1 block w-full rounded-md border-2 border-gray-300 shadow-sm py-2 px-4 focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
//                                 >
//                                     <option value="">Seleccionar..</option>
//                                     {posiciones.map((option) => (
//                                         <option key={option.value} value={option.value}>
//                                             {option.label}
//                                         </option>
//                                     ))}
//                                 </select>
//                             </div>
//                         </div>
//                     </div>
//                     {/* Insertar ícono y botón de cargar imagen */}
//                     <div className="flex flex-col items-center mt-6">
//                         <InsertPhotoIcon style={{ fontSize: 250, color: '#000000' }} />
//                         <AddBoxIcon style={{ fontSize: 50, color: '#3b82f6' }} className="mt-2 cursor-pointer hover:text-blue-800" />
//                     </div>

//                     {/* Botón de Guardar */}
//                     <div className="flex justify-center mt-8">
//                         <Button variant="contained" color="success" type="submit">
//                             Guardar
//                         </Button>
//                     </div>
//                 </form>
//             </div>
//         </div>
//     );
// };

// export default FormularioNoticia;








import React, { useState } from 'react';
import { TextField, Button, MenuItem, Box, Typography, Grid, IconButton } from '@mui/material';
import AddBoxIcon from '@mui/icons-material/AddBox';
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import ListIcon from '@mui/icons-material/List';

const FormularioNoticia = () => {
    const [titulo, setTitulo] = useState('');
    const [resumen, setResumen] = useState('');
    const [categoria, setCategoria] = useState('');
    const [ambito, setAmbito] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [nombreFuente, setNombreFuente] = useState('');
    const [linkFuente, setLinkFuente] = useState('');
    const [fecha, setFecha] = useState('');
    const [hora, setHora] = useState('');
    const [estado, setEstado] = useState('');
    const [posicion, setPosicion] = useState('');
    const [videoLink, setVideoLink] = useState('');

    const categorias = [
        { value: 'deportes', label: 'Deportes' },
        { value: 'politica', label: 'Política' },
        { value: 'cultura', label: 'Cultura' },
    ];

    const ambitos = [
        { value: 'nacional', label: 'Nacional' },
        { value: 'internacional', label: 'Internacional' },
    ];

    const estados = [
        { value: 'activa', label: 'Activa' },
        { value: 'inactiva', label: 'Inactiva' },
    ];

    const posiciones = [
        { value: 'posicion 1', label: 'Posición 1' },
        { value: 'posicion 2', label: 'Posición 2' },
        { value: 'posicion 3', label: 'Posición 3' },
        { value: 'posicion 4', label: 'Posición 4' },
        { value: 'posicion 5', label: 'Posición 5' },
        { value: 'posicion 6', label: 'Posición 6' },
        { value: 'posicion 7', label: 'Posición 7' },
        { value: 'posicion 8', label: 'Posición 8' },
        { value: 'posicion 9', label: 'Posición 9' },
        { value: 'posicion 10', label: 'Posición 10' },
        { value: 'posicion 11', label: 'Posición 11' },
        { value: 'posicion 12', label: 'Posición 12' },
    ];

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({
            titulo,
            resumen,
            categoria,
            ambito,
            descripcion,
            nombreFuente,
            linkFuente,
            fecha,
            hora,
            estado,
            posicion,
            videoLink,
        });
    };

    return (
        <div className="card-container mx-auto mt-8 p-4">
            <Box sx={{ backgroundColor: 'white', boxShadow: 3, borderRadius: 2, padding: 4 }}>
                {/* Título y Listado de Categoría */}
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                    <Typography variant="h4" component="div">
                        Crear Noticia
                    </Typography>
                    <Button variant="contained" title='Listado de Categoría' color="primary">
                        <ListIcon />
                    </Button>
                </Box>
                <Typography variant="body2" color="error" align="center" gutterBottom>
                    (*) Campos Obligatorios
                </Typography>

                {/* Formulario */}
                <form onSubmit={handleSubmit}>
                    <Grid container spacing={3}>
                        {/* Título */}
                        <Grid item xs={12}>
                            <TextField
                                label="Título"
                                placeholder="Ingrese un título"
                                fullWidth
                                multiline
                                rows={3}
                                variant="outlined"
                                value={titulo}
                                onChange={(e) => setTitulo(e.target.value)}
                                required
                            />
                        </Grid>

                        {/* Resumen y Descripción */}
                        <Grid item xs={12} sm={6}>
                            <TextField
                                label="Resumen"
                                placeholder="Ingrese un resumen"
                                fullWidth
                                value={resumen}
                                onChange={(e) => setResumen(e.target.value)}
                                required
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                label="Descripción"
                                placeholder="Ingrese una descripción"
                                fullWidth
                                value={descripcion}
                                onChange={(e) => setDescripcion(e.target.value)}
                                required
                            />
                        </Grid>

                        {/* Categoría, Ámbito, Fuente */}
                        <Grid item xs={12} sm={3}>
                            <TextField
                                select
                                label="Categoría"
                                value={categoria}
                                onChange={(e) => setCategoria(e.target.value)}
                                fullWidth
                                required
                            >
                                <MenuItem value="">Seleccionar..</MenuItem>
                                {categorias.map((option) => (
                                    <MenuItem key={option.value} value={option.value}>
                                        {option.label}
                                    </MenuItem>
                                ))}
                            </TextField>
                        </Grid>

                        <Grid item xs={12} sm={3}>
                            <TextField
                                select
                                label="Ámbito"
                                value={ambito}
                                onChange={(e) => setAmbito(e.target.value)}
                                fullWidth
                                required
                            >
                                <MenuItem value="">Seleccionar..</MenuItem>
                                {ambitos.map((option) => (
                                    <MenuItem key={option.value} value={option.value}>
                                        {option.label}
                                    </MenuItem>
                                ))}
                            </TextField>
                        </Grid>

                        <Grid item xs={12} sm={3}>
                            <TextField
                                label="Nombre Fuente"
                                placeholder="Ingrese el nombre de la fuente"
                                fullWidth
                                value={nombreFuente}
                                onChange={(e) => setNombreFuente(e.target.value)}
                                required
                            />
                        </Grid>

                        <Grid item xs={12} sm={3}>
                            <TextField
                                label="Link Fuente"
                                placeholder="Ingrese el link de la fuente"
                                fullWidth
                                value={linkFuente}
                                onChange={(e) => setLinkFuente(e.target.value)}
                                required
                            />
                        </Grid>

                        {/* Fecha y Hora */}
                        <Grid item xs={12} sm={3}>
                            <TextField
                                label="Fecha"
                                type="date"
                                fullWidth
                                value={fecha}
                                onChange={(e) => setFecha(e.target.value)}
                                required
                                InputLabelProps={{ shrink: true }}
                            />
                        </Grid>

                        <Grid item xs={12} sm={3}>
                            <TextField
                                label="Hora"
                                type="time"
                                fullWidth
                                value={hora}
                                onChange={(e) => setHora(e.target.value)}
                                required
                                InputLabelProps={{ shrink: true }}
                            />
                        </Grid>

                        {/* Estado, Video y Posición */}
                        <Grid item xs={12} sm={3}>
                            <TextField
                                select
                                label="Estado"
                                value={estado}
                                onChange={(e) => setEstado(e.target.value)}
                                fullWidth
                                required
                            >
                                <MenuItem value="">Seleccionar..</MenuItem>
                                {estados.map((option) => (
                                    <MenuItem key={option.value} value={option.value}>
                                        {option.label}
                                    </MenuItem>
                                ))}
                            </TextField>
                        </Grid>

                        <Grid item xs={12} sm={3}>
                            <TextField
                                label="Video Link"
                                placeholder="https://www.youtube.com/watch?v=example"
                                fullWidth
                                value={videoLink}
                                onChange={(e) => setVideoLink(e.target.value)}
                                required
                            />
                        </Grid>

                        <Grid item xs={12} sm={3}>
                            <TextField
                                select
                                label="Posición"
                                value={posicion}
                                onChange={(e) => setPosicion(e.target.value)}
                                fullWidth
                                required
                            >
                                <MenuItem value="">Seleccionar..</MenuItem>
                                {posiciones.map((option) => (
                                    <MenuItem key={option.value} value={option.value}>
                                        {option.label}
                                    </MenuItem>
                                ))}
                            </TextField>
                        </Grid>

                        {/* Imagen y Botón de Guardar */}
                        <Grid item xs={12} className="flex flex-col items-center mt-6" container justifyContent="center">
                            <IconButton color="black" component="span">
                                <InsertPhotoIcon style={{ fontSize: 100, color: '#000000' }} />
                            </IconButton>
                            <IconButton color="primary" component="span">
                                <AddBoxIcon className="mt-2 cursor-pointer hover:text-blue-800" style={{ fontSize: 50, color: '#3b82f6' }} />
                            </IconButton>
                        </Grid>

                        {/* <div className="flex flex-col items-center mt-6">
//                         <InsertPhotoIcon style={{ fontSize: 250, color: '#000000' }} />
//                         <AddBoxIcon style={{ fontSize: 50, color: '#3b82f6' }} className="mt-2 cursor-pointer hover:text-blue-800" />
//                     </div> */}


                        {/* Botón de Guardar */}
                        <Grid item xs={12} container justifyContent="center">
                            <Button type="submit" variant="contained" color="primary">
                                Guardar
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </Box>
        </div>
    );
};

export default FormularioNoticia;












// import React from 'react';
// import { Container, Box, Typography } from '@mui/material';
// import FormularioNoticia from './FormularioNoticia';

// const CrearNoticia = () => {
//     return (
//         <Container>
//             <Box sx={{ mt: 4 }}>
//                 <Typography variant="h4" align="center" gutterBottom>
//                     Panel de Creación de Noticias
//                 </Typography>
//                 <FormularioNoticia />
//             </Box>
//         </Container>
//     );
// };

// export default CrearNoticia;
