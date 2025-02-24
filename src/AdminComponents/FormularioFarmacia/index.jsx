import React, { useState } from 'react';
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import ViewListIcon from '@mui/icons-material/ViewList';
import AddBoxIcon from '@mui/icons-material/AddBox';
import { Button, MenuItem, TextField, Divider, Box, Typography } from '@mui/material';
import { useForm } from 'react-hook-form';
import './formularioFarmacia.css'

const FormularioFarmacia = () => {
    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm();

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
                    <h3 className="text-2xl font-semibold mb-2">Crear Farmacia</h3>
                    <Button variant='contained' type='submit'>
                        <ViewListIcon />
                    </Button>
                </Box>
                <Divider />
                <Box my={2}></Box>
                <p className="text-red-600 text-center text-sm mb-4">(*) Campos Obligatorios</p>
                <form onSubmit={handleSubmit((data) => console.log(data))}>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
                        <div>
                            <Typography variant="subtitle1">
                                Nombre <span style={{ color: 'red' }}>*</span>
                            </Typography>
                            <TextField
                                error={!!errors.name}
                                type='text'
                                placeholder='Nombre'
                                {...register('name', { required: 'El campo es requerido' })}
                                className='w-full'
                                helperText={errors.name?.message}
                                slotProps={{
                                    input: {
                                        className: 'customTextField'
                                    }
                                }}
                            />
                        </div>
                        <div>
                            <Typography variant="subtitle1">
                                Dirección <span style={{ color: 'red' }}>*</span>
                            </Typography>
                            <TextField
                                error={!!errors.address}
                                type='text'
                                placeholder='Dirección'
                                {...register('address', { required: 'El campo es requerido' })}
                                className='w-full'
                                helperText={errors.address?.message}
                                slotProps={{
                                    input: {
                                        className: 'customTextField'
                                    }
                                }}
                            />
                        </div>
                        <div>
                            <Typography variant="subtitle1">
                                Teléfono <span style={{ color: 'red' }}>*</span>
                            </Typography>
                            <TextField
                                error={!!errors.phone}
                                type='text'
                                placeholder='Teléfono'
                                {...register('phone', { required: 'El campo es requerido' })}
                                className='w-full'
                                helperText={errors.phone?.message}
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
                                <InsertPhotoIcon style={{ fontSize: 250, color: '#000000' }} />
                            )}
                        </label>
                        <Button
                            variant="contained"
                            color="primary"
                            component="span"
                            onClick={() => document.getElementById('upload-image').click()}
                        >
                            <AddBoxIcon/>
                        </Button>
                    </div>

                    <div className='flex justify-center mt-5'>
                        <Button variant='contained' color='success' type='submit'>
                            Guardar
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default FormularioFarmacia;
