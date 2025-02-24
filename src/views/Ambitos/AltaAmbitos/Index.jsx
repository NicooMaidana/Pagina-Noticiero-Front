import React, { useEffect, useState } from 'react';
import { TextField, Button, Typography, Box, MenuItem, FormControl, InputLabel, Select } from '@mui/material';
import ListIcon from '@mui/icons-material/List';
import { useForm } from 'react-hook-form'

const FormularioTarjeta = ({ titulo = 'Crear Ámbito', estados = [] }) => {
    // const [selectedEstado, setSelectedEstado] = useState('');

    // const handleEstadoChange = (event) => {
    //     setSelectedEstado(event.target.value);
    // };

    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm();
    console.log();



    return (
        <Box sx={{ maxWidth: 1225, margin: 'auto', mt: 4 }}>
            <Box sx={{ backgroundColor: 'white', boxShadow: 3, borderRadius: 2, p: 4 }}>
                {/* Título y botón de Listado  mt: 8*/}
                <Box className="title-bar" sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
                    <Typography variant="h5" component="h3" fontWeight="bold">
                        {titulo}
                    </Typography>
                    <Button variant="contained" title='Listado De Ámbitos'>
                        <ListIcon />
                    </Button>
                </Box>

                <Typography variant="caption" color="error" align="center" display="block" mb={2}>
                    (*) Campos Obligatorios
                </Typography>


                {/* Formulario */}
                <form onSubmit={handleSubmit((data) => console.log(data))}>
                    {/* Fila 1: Nombre y Estado */}
                    <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 2 }}>
                        {/* Nombre */}

                        <TextField
                            error={!!errors.name}
                            type='text'
                            label='Nombre'
                            {...register('name', { required: 'El campo es requerido' })}
                            // fullWidth
                            //required
                            // value={nombre}
                            placeholder='Ingrese un nombre'
                            className='w-full'
                            // sx={{ mb: { xs: 2, md: 0 } }}
                            helperText={errors.name?.message}
                        />



                        {/* Estado */}
                        {/* <FormControl fullWidth required>
                            <InputLabel id="estado-label">Estado</InputLabel>
                            <Select
                                labelId="estado-label"
                                id="estado"
                                value={selectedEstado}
                                label="Estado"
                                onChange={handleEstadoChange}
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
                        </FormControl> */}
                    </Box>

                    {/* Botón Guardar */}
                    <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
                        <Button variant="contained" color="success">
                            Guardar
                        </Button>
                    </Box>
                </form>
            </Box>
        </Box>
    );
};

export default FormularioTarjeta;



//ESTO ES PARA LA VIEW PARA LLAMAR AL COMPONENTE//
// import React from 'react';
// import FormularioTarjeta from './FormularioTarjeta'; // Asegúrate de ajustar la ruta de importación según tu estructura de archivos

// const FormularioView = () => {
//     // Estados de ejemplo para pasar a FormularioTarjeta
//     const estados = [
//         { value: 'activo', label: 'Activo' },
//         { value: 'inactivo', label: 'Inactivo' }
//     ];

//     return (
//         <div>
//             {/* Llamada a FormularioTarjeta */}
//             <FormularioTarjeta
//                 titulo="Crear Ámbito"  // Pasamos el título
//                 nombre=""  // Nombre vacío inicialmente
//                 estados={estados}  // Pasamos los estados al componente
//             />
//         </div>
//     );
// };

// export default FormularioView;





