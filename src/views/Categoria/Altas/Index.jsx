import React, { useState } from 'react';
import { TextField, Button, Typography, Box, MenuItem, FormControl, InputLabel, Select } from '@mui/material';
import ListIcon from '@mui/icons-material/List';

const CrearCalle = ({ titulo = 'Crear Categoría', nombre = '', orden = '', estados = [] }) => {
    const [color, setColor] = useState('#000000');

    const handleColorChange = (event) => {
        setColor(event.target.value);  // Cambiar el estado del color cuando se selecciona uno nuevo
    };

    return (
        <Box sx={{ maxWidth: 1225, margin: 'auto', mt: 4 }}>
            <Box sx={{ backgroundColor: 'white', boxShadow: 3, borderRadius: 2, p: 4 }}>
                {/* Título y botón de Listado */}
                <Box className="title-bar" sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
                    <Typography variant="h5" component="h3" fontWeight="bold">
                        {titulo}
                    </Typography>
                    <Button title='Listado De Categorias' variant="contained">
                        <ListIcon />
                    </Button>
                </Box>

                <Typography variant="caption" color="error" align="center" display="block" mb={2}>
                    (*) Campos Obligatorios
                </Typography>

                {/* Formulario */}
                <form>
                    <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 2 }}>
                        {/* Nombre */}
                        <TextField
                            label="Nombre"
                            fullWidth
                            required
                            value={nombre}
                            placeholder="Ingrese un nombre"
                        />

                        {/* Estado */}
                        <FormControl fullWidth required>
                            <InputLabel id="estado-label">Estado</InputLabel>
                            <Select
                                labelId="estado-label"
                                id="estado"
                                value=""
                                label="Estado"
                            >
                                <MenuItem value="">
                                    <em>Seleccionar...</em>
                                </MenuItem>
                                {estados.map((estado, index) => (
                                    <MenuItem key={index} value={estado.value}>
                                        {estado.label}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>

                        {/* Orden */}
                        <TextField
                            label="Orden"
                            fullWidth
                            required
                            value={orden}
                            placeholder="Ingrese un orden"
                        />

                        {/* Selección de Color */}
                        {/* <Typography variant="body1" sx={{ mb: 1 }}>
                            Color <span style={{ color: 'red' }}>*</span>
                        </Typography> */}
                        <TextField
                            label="Color"
                            type="color"
                            value={color}
                            onChange={handleColorChange}
                            // fullWidth
                            sx={{ width: 300 }}
                        />
                    </Box>

                    {/* Selección de Color */}
                    {/* <Box sx={{ mt: 1 }}>
                        <Typography variant="body1" sx={{ mb: 1 }}>
                            Color <span style={{ color: 'red' }}>*</span>
                        </Typography>
                        <TextField
                            type="color"
                            value={color}
                            onChange={handleColorChange}
                            fullWidth
                        />
                    </Box> */}
                </form>

                <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
                    <Button variant="contained" color="success">
                        Guardar
                    </Button>
                </Box>
            </Box>
        </Box>
    );
};

export default CrearCalle;



//ESTO ES PARA LA VIEW PARA LLAMAR AL COMPONENTE//
// import React from 'react';
// import CrearCalle from './CrearCalle';  // Ajusta la ruta si es necesario

// const CrearCalleView = () => {
//     const estados = [
//         { value: 'activo', label: 'Activo' },
//         { value: 'inactivo', label: 'Inactivo' }
//     ];

//     return (
//         <div>
//             <CrearCalle
//                 titulo="Crear Categoría"
//                 nombre=""
//                 orden=""
//                 estados={estados}
//             />
//         </div>
//     );
// };

// export default CrearCalleView;
