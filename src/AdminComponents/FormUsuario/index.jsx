import React from 'react'
import { Button, MenuItem, TextField, Divider, Box, Typography } from '@mui/material'
import { useForm } from 'react-hook-form'
import ViewListIcon from '@mui/icons-material/ViewList';
import './formUsuario.css'

const FormUsuario = ({ }) => {
    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm();

    return (
        <div className="container mx-auto mt-8 p-4">
            <div className="bg-white shadow-lg rounded-lg p-6">
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                    <h3 className="text-2xl font-semibold mb-2">Crear Usuario</h3>
                    <Button variant='contained' type='submit'>
                        <ViewListIcon />
                    </Button>
                </Box>
                <Divider />
                <Box my={2}></Box>
                <p className="text-red-600 text-center text-sm mb-4">(*) Campos Obligatorios</p>
                <form onSubmit={handleSubmit((data) => console.log(data))}>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                        <div>
                            <Typography variant="subtitle1">
                                Nombre <span style={{ color: 'red' }}>*</span>
                            </Typography>
                            <TextField
                                error={!!errors.firstName}
                                type="text"
                                placeholder='Ingresar Nombre'
                                {...register('firstName', { required: 'El campo es requerido' })}
                                className="w-full"
                                helperText={errors.firstName?.message}
                                slotProps={{
                                    input: {
                                        className: 'customTextField'
                                    }
                                }}
                            />
                        </div>
                        <div>
                            <Typography variant="subtitle1">
                                Apellido <span style={{ color: 'red' }}>*</span>
                            </Typography>
                            <TextField
                                error={!!errors.lastName}
                                type='text'
                                placeholder='Ingresar Apellido'
                                {...register('lastName', { required: 'El campo es requerido' })}
                                className='w-full'
                                helperText={errors.lastName?.message}
                                slotProps={{
                                    input: {
                                        className: 'customTextField',
                                    },
                                }}
                            />
                        </div>
                        <div>
                            <Typography variant="subtitle1">
                                Email <span style={{ color: 'red' }}>*</span>
                            </Typography>
                            <TextField
                                error={!!errors.email}
                                type='email'
                                placeholder='Ingresar Email'
                                {...register('email', { required: 'El campo es requerido' })}
                                className='w-full'
                                helperText={errors.email?.message}
                                slotProps={{
                                    input: {
                                        className: 'customTextField',
                                    },
                                }}
                            />
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                        <div>
                            <Typography variant="subtitle1">
                                Contraseña <span style={{ color: 'red' }}>*</span>
                            </Typography>
                            <TextField
                                error={!!errors.password}
                                type='password'
                                placeholder='Ingresar Contraseña'
                                {...register('password', { required: 'El campo es requerido' })}
                                className='w-full'
                                helperText={errors.password?.message}
                                slotProps={{
                                    input: {
                                        className: 'customTextField',
                                    },
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
                                        className: 'customTextField',
                                    },
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
                        <div>
                            <Typography variant="subtitle1">
                                Perfil <span style={{ color: 'red' }}>*</span>
                            </Typography>
                            <TextField
                                error={!!errors.profile}
                                select
                                {...register('profile', {
                                    validate: value => value !== 'SELECCIONAR' || 'Debes seleccionar una opción válida.'
                                })}
                                className='w-full'
                                helperText={errors.profile?.message}
                                slotProps={{
                                    input: {
                                        className: 'customTextField',
                                    },
                                }}
                                defaultValue='SELECCIONAR'
                            >
                                <MenuItem value='SELECCIONAR'>
                                    SELECCIONAR
                                </MenuItem>
                                <MenuItem value='administrador'>ADMINISTRADOR</MenuItem>
                                <MenuItem value='operario'>OPERARIO</MenuItem>
                                <MenuItem value='sepelio'>SEPELIO</MenuItem>
                            </TextField>
                        </div>
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

export default FormUsuario;