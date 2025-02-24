import React, { useState } from 'react';
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import ViewListIcon from '@mui/icons-material/ViewList';
import AddBoxIcon from '@mui/icons-material/AddBox';
import { Button, MenuItem, TextField, Divider, Box, Typography, CardContent, Card, Select, FormControl, FormHelperText } from '@mui/material';
import { useForm } from 'react-hook-form';
import './formularioPublicidades.css'

const FormularioPublicidades = () => {
    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm();
    const [selectedLocation, setSelectedLocation] = useState('');
    const [selectedImage, setSelectedImage] = useState(null);

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setSelectedImage(URL.createObjectURL(file));
        }
    };

    return (
        <div className="container mx-auto mt-8 p-4">
            <div className="bg-white shadow-lg rounded-lg p-6">
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                    <h3 className="text-2xl font-semibold mb-2">Crear Publicidad</h3>
                    <ViewListIcon style={{ fontSize: 40, color: '#3b82f6', cursor: 'pointer' }} />
                </Box>
                <Divider />
                <p className="text-red-600 text-center text-sm mb-4">(*) Campos Obligatorios</p>
                <form onSubmit={handleSubmit((data) => console.log(data))}>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                        <div>
                            <Typography variant="subtitle1">
                                Razón Social <span style={{ color: 'red' }}>*</span>
                            </Typography>
                            <TextField
                                error={!!errors.companyName}
                                type='text'
                                placeholder='Ingrese una Razón Social'
                                {...register('companyName', { required: 'El campo es requerido' })}
                                className='w-full'
                                helperText={errors.companyName?.message}
                                slotProps={{
                                    input: {
                                        className: 'customTextField'
                                    }
                                }}
                            />
                        </div>
                        <div>
                            <Typography variant="subtitle1">
                                Link <span style={{ color: 'red' }}>*</span>
                            </Typography>
                            <TextField
                                error={!!errors.link}
                                type='text'
                                placeholder='Ingrese un link'
                                {...register('link', { required: 'El campo es requerido' })}
                                className='w-full'
                                helperText={errors.link?.message}
                                slotProps={{
                                    input: {
                                        className: 'customTextField'
                                    }
                                }}
                            />
                        </div>
                        <div>
                            <Typography variant="subtitle1">
                                Estado <span style={{ color: 'red' }}>*</span>
                            </Typography>
                            <TextField
                                error={!!errors.status}
                                select
                                {...register('status', {
                                    validate: value => value !== 'SELECCIONAR' || 'Debes seleccionar una opción válida.'
                                })}
                                className='w-full'
                                helperText={errors.status?.message}
                                slotProps={{
                                    input: {
                                        className: 'customTextField'
                                    }
                                }}
                                defaultValue='SELECCIONAR'
                            >
                                <MenuItem value='SELECCIONAR'>
                                    SELECCIONAR
                                </MenuItem>
                                <MenuItem value='activo'>Activo</MenuItem>
                                <MenuItem value='inactivo'>Inactivo</MenuItem>
                            </TextField>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <div>
                            <Typography variant="subtitle1">
                                Fecha Inicio <span style={{ color: 'red' }}>*</span>
                            </Typography>
                            <TextField
                                error={!!errors.startDate}
                                type='date'
                                {...register('startDate', { required: 'El campo es requerido' })}
                                className='w-full'
                                helperText={errors.startDate?.message}
                                slotProps={{
                                    input: {
                                        className: 'customTextField'
                                    }
                                }}
                            />
                        </div>
                        <div>
                            <Typography variant="subtitle1">
                                Fecha Fin <span style={{ color: 'red' }}>*</span>
                            </Typography>
                            <TextField
                                error={!!errors.endDate}
                                type='date'
                                {...register('endDate', { required: 'El campo es requerido' })}
                                className='w-full'
                                helperText={errors.endDate?.message}
                                slotProps={{
                                    input: {
                                        className: 'customTextField'
                                    }
                                }}
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <div className="flex flex-col items-center mt-6">
                            <TextField
                                type="file"
                                accept="image/*"
                                onChange={handleFileChange}
                                slotProps={{
                                    ...register('image', { required: 'Debes seleccionar una imagen' }),
                                }}
                                style={{ display: 'none' }}
                                className="hidden"
                                id="upload-image"
                            />
                            <label htmlFor="upload-image" className="cursor-pointer">
                                {selectedImage ? (
                                    <img
                                        src={selectedImage}
                                        alt="Vista previa"
                                        className="w-full h-48 object-cover rounded-md border border-gray-300"
                                    />
                                ) : (
                                    <InsertPhotoIcon style={{ fontSize: 150, color: '#000000' }} />
                                )}
                            </label>
                            <Button
                                    variant="contained"
                                    color="primary"
                                    component="span"
                                    onClick={() => document.getElementById('upload-image').click()}
                                    sx={{ mt: 2 }}
                                >
                                    <AddBoxIcon />
                                </Button>
                        </div>

                        <Card variant="outlined" className="mb-4">
                            <CardContent>
                                <Typography variant="h6" gutterBottom>
                                    Ubicaciones
                                </Typography>
                                <FormControl variant="outlined" className="w-full mb-2" error={!!errors.location}>
                                    <Select
                                        defaultValue="SELECCIONAR"
                                        {...register('location', {
                                            validate: value => value !== 'SELECCIONAR' || 'Debes seleccionar una opción válida.'
                                        })}
                                        variant="outlined"
                                        onChange={(e) => setSelectedLocation(e.target.value)}
                                        displayEmpty
                                    >
                                        <MenuItem value='SELECCIONAR'>
                                            SELECCIONAR
                                        </MenuItem>
                                        <MenuItem value='Ubicación Posición 1 (Debajo de las primeras dos categorías)'>
                                            *Ubicación Posición 1 (Debajo de las primeras dos categorías)
                                        </MenuItem>
                                        <MenuItem value='Ubicación Posición 2 (Debajo de las segundas dos categorías)'>
                                            *Ubicación Posición 2 (Debajo de las segundas dos categorías)
                                        </MenuItem>
                                        <MenuItem value='Ubicación Acompañando el Detalle de la Noticia'>
                                            Ubicación Acompañando el Detalle de la Noticia
                                        </MenuItem>
                                    </Select>
                                    <FormHelperText>{errors.location?.message}</FormHelperText>
                                </FormControl>
                                <Divider />
                                {selectedLocation && (
                                    <Typography variant="body1" className="mt-2">
                                        Opción seleccionada: {selectedLocation}
                                    </Typography>
                                )}
                            </CardContent>
                        </Card>
                    </div>

                    <div className='flex justify-center mt-8'>
                        <Button variant='contained' color='success' type='submit'>
                            Guardar
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default FormularioPublicidades;
