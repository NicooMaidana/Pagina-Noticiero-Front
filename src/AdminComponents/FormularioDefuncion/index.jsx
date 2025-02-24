import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { TextField, MenuItem, Button } from '@mui/material';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import './formularioDefuncion.css';


const CrearDefuncion = () => {
  const { register, handleSubmit, setValue, watch, formState: { errors } } = useForm();

  const [provincias, setProvincias] = useState([]);
  const [localidades, setLocalidades] = useState([]);
  const [selectedProvincia, setSelectedProvincia] = useState(true);
  const [edad, setEdad] = useState('');

  const getProvincias = async () => {
    try {
      const response = await axios.get('https://apis.datos.gob.ar/georef/api/provincias');
      const provinciasOrdenadas = response.data.provincias
        .map((item) => ({
          id: item.id,
          name: item.nombre,
        }))
        .sort((a, b) => a.name.localeCompare(b.name));

      setProvincias(provinciasOrdenadas);
    } catch (error) {
      console.error('Error al obtener provincias:', error);
    }
  };

  const getLocalidades = async (provinciaId) => {
    if (!provinciaId) return;
    try {
      const response = await axios.get(`https://apis.datos.gob.ar/georef/api/localidades?provincia=${provinciaId}&campos=id,nombre&max=5000`);
      const localidadesOrdenadas = response.data.localidades
        .map((item) => ({
          id: item.id,
          name: item.nombre,
        }))
        .sort((a, b) => a.name.localeCompare(b.name));

      setLocalidades(localidadesOrdenadas);
    } catch (error) {
      console.error('Error al obtener localidades:', error);
    }
  };

  useEffect(() => {
    getProvincias();
  }, []);

  const handleProvinciaChange = (event) => {
    const provinciaId = event.target.value;
    setSelectedProvincia(false);
    getLocalidades(provinciaId);
    setValue('localidad', '');
  };

  const calcularEdad = (fechaNacimiento, fechaFallecimiento) => {
    if (!fechaNacimiento || !fechaFallecimiento) return;
    const nacimiento = new Date(fechaNacimiento);
    const fallecimiento = new Date(fechaFallecimiento);
    let calculatedAge = fallecimiento.getFullYear() - nacimiento.getFullYear();
    const monthDifference = fallecimiento.getMonth() - nacimiento.getMonth();

    if (monthDifference < 0 || (monthDifference === 0 && fallecimiento.getDate() < nacimiento.getDate())) {
      calculatedAge--;
    }

    setEdad(calculatedAge);
    setValue('edad', calculatedAge);
  };

  const onSubmit = (data) => {
    const provinciaSeleccionada = provincias.find((p) => p.id === data.provincia);
    const localidadSeleccionada = localidades.find((l) => l.id === data.localidad);
    data.provincia = provinciaSeleccionada;
    data.localidad = localidadSeleccionada;
    console.log(data);
  };

  return (
    <div className='container mx-auto mt-8 p-4'>
      <div className='bg-white shadow-lg rounded-lg p-6'>
        <h3 className='text-2xl font-semibold mb-2'>Crear Defunción</h3>
        <Divider />
        <Box my={2}> </Box>
        <p className='text-red-600 text-center text-sm mb-4'>(*) Campos Obligatorios</p>
        <Box my={2}> </Box>
        <h5 className="font-semibold mb-2">Datos Personales</h5>
        <Divider />
        <Box my={2}> </Box>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mb-4'>
            <div className="flex flex-col">
              <Typography variant="subtitle1">
                Nombre/s <span style={{ color: 'red' }}>*</span>
              </Typography>
              <TextField
                {...register('nombre', { required: 'Debes ingresar un nombre' })}
                error={!!errors.nombre}
                className='w-full'
                helperText={errors.nombre?.message}
                placeholder='Nombre/s'
                slotProps={{
                  input: {
                    className: 'customTextField',
                  },
                }}
              />
            </div>

            <div className="flex flex-col">
              <Typography variant="subtitle1">
                Apellido/s <span style={{ color: 'red' }}>*</span>
              </Typography>
              <TextField
                {...register('apellido', { required: 'Debes ingresar un apellido' })}
                error={!!errors.apellido}
                className='w-full'
                helperText={errors.apellido?.message}
                placeholder='Apellido/s'
                slotProps={{
                  input: {
                    className: 'customTextField',
                  },
                }}
              />
            </div>

            <div className="flex flex-col">
              <Typography variant="subtitle1">
                Fecha de nacimiento <span style={{ color: 'red' }}>*</span>
              </Typography>
              <TextField
                {...register('fechaNacimiento', { required: 'Debes ingresar una fecha de nacimiento' })}
                type="date"
                error={!!errors.fechaNacimiento}
                className='w-full'
                onChange={(e) => {
                  setValue('fechaNacimiento', e.target.value);
                  if (e.target.value && watch('fechaFallecimiento')) {
                    calcularEdad(e.target.value, watch('fechaFallecimiento'));
                  }
                }}
                helperText={errors.fechaNacimiento?.message}
                slotProps={{
                  input: {
                    className: 'customTextField',
                  },
                }}
              />
            </div>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-6 gap-4 mb-4'>
            <div className="md:col-span-2 flex flex-col">
              <Typography variant="subtitle1">
                Fecha de fallecimiento <span style={{ color: 'red' }}>*</span>
              </Typography>
              <TextField
                {...register('fechaFallecimiento', { required: 'Debes ingresar una fecha de fallecimiento' })}
                type="date"
                error={!!errors.fechaFallecimiento}
                className='w-full'
                onChange={(e) => {
                  setValue('fechaFallecimiento', e.target.value);
                  if (e.target.value && watch('fechaNacimiento')) {
                    calcularEdad(watch('fechaNacimiento'), e.target.value);
                  }
                }}
                helperText={errors.fechaFallecimiento?.message}
                slotProps={{
                  input: {
                    className: 'customTextField',
                  },
                }}
              />
            </div>

            <div className="md:col-span-1 flex flex-col">
              <Typography variant="subtitle1">Edad</Typography>
              <TextField
                {...register('edad', {
                  required: 'No se cargó la edad',
                  validate: value => {
                    const numValue = Number(value);
                    return !isNaN(numValue) && numValue > 0 || 'La edad debe ser un número positivo';
                  }
                })}
                type="number"
                error={!!errors.edad}
                className="w-full"
                helperText={errors.edad?.message}
                slotProps={{
                  input: {
                    className: 'customTextField',
                    readOnly: true,
                  },
                }}
              />

            </div>

            <div className="md:col-span-1 flex flex-col">
              <Typography variant="subtitle1">
                Hora <span style={{ color: 'red' }}>*</span>
              </Typography>
              <TextField
                {...register('hora', { required: 'Debes selecionar una hora' })}
                type="time"
                error={!!errors.hora}
                className='w-full'
                helperText={errors.hora?.message}
                slotProps={{
                  input: {
                    className: 'customTextField',
                  },
                }}
              />
            </div>

            <div className="md:col-span-1 flex flex-col">
              <Typography variant="subtitle1">
                Provincia <span style={{ color: 'red' }}>*</span>
              </Typography>
              <TextField
                {...register('provincia', {
                  required: 'El campo es requerido',
                  validate: value => value !== 'SELECCIONAR' || 'Debes seleccionar una provincia'
                })}
                select
                error={!!errors.provincia}
                className='w-full'
                defaultValue={'SELECCIONAR'}
                onChange={handleProvinciaChange}
                helperText={errors.provincia?.message}
                slotProps={{
                  input: {
                    className: 'customTextField',
                  },
                }}
              >
                <MenuItem value='SELECCIONAR'>
                  SELECCIONAR
                </MenuItem>
                {provincias.map((provincia) => (
                  <MenuItem key={provincia.id} value={provincia.id}>
                    {provincia.name}
                  </MenuItem>
                ))}
              </TextField>
            </div>

            <div className="md:col-span-1 flex flex-col">
              <Typography variant="subtitle1">
                Localidad <span style={{ color: 'red' }}>*</span>
              </Typography>
              <TextField
                {...register('localidad', { required: 'Debes seleccionar una localidad' })}
                select
                error={!!errors.localidad}
                className='w-full'
                defaultValue={'SELECCIONAR'}
                disabled={selectedProvincia}
                helperText={errors.localidad?.message}
                slotProps={{
                  input: {
                    className: 'customTextField',
                  },
                }}
              >
                <MenuItem value='SELECCIONAR'>
                  SELECCIONAR
                </MenuItem>
                {localidades.map((localidad) => (
                  <MenuItem key={localidad.id} value={localidad.id}>
                    {localidad.name}
                  </MenuItem>
                ))}
              </TextField>
            </div>
          </div>
          <Box my={2}> </Box>
          <h5 className="font-semibold mb-2">Datos de la Sala</h5>
          <Divider />
          <Box my={2}> </Box>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <div className="md:col-span-1 flex flex-col">
              <Typography variant="subtitle1">
                Fecha de apertura <span style={{ color: 'red' }}>*</span>
              </Typography>
              <TextField
                {...register('fechaAperturaSala', { required: 'Debes selecionar Fecha de apertura' })}
                type="date"
                error={!!errors.fechaAperturaSala}
                className='w-full'
                onChange={(e) => {
                  setValue('fechaAperturaSala', e.target.value);
                }}
                helperText={errors.fechaAperturaSala?.message}
                slotProps={{
                  input: {
                    className: 'customTextField',
                  },
                }}
              />
            </div>

            <div className="md:col-span-1 flex flex-col">
              <Typography variant="subtitle1">
                Hora de apertura <span style={{ color: 'red' }}>*</span>
              </Typography>
              <TextField
                {...register('horaAperturaSala', { required: 'Debes selecionar Hora de apertura' })}
                type="time"
                error={!!errors.horaAperturaSala}
                className='w-full'
                helperText={errors.horaAperturaSala?.message}
                slotProps={{
                  input: {
                    className: 'customTextField',
                  },
                }}
              />
            </div>

            <div className="md:col-span-1 flex flex-col">
              <Typography variant="subtitle1">
                N° de Sala <span style={{ color: 'red' }}>*</span>
              </Typography>
              <TextField
                {...register('numeroSala', {
                  required: 'El campo es requerido',
                  validate: value => value !== 'SELECCIONAR' || 'Debes seleccionar una sala'
                })}
                select
                error={!!errors.numeroSala}
                className='w-full'
                defaultValue={'SELECCIONAR'}
                helperText={errors.numeroSala?.message}
                slotProps={{
                  input: {
                    className: 'customTextField',
                  },
                }}
              >
                <MenuItem value='SELECCIONAR'>
                  SELECCIONAR
                </MenuItem>
                <MenuItem value='sala1'>Sala N°1</MenuItem>
                <MenuItem value='sala2'>Sala N°2</MenuItem>
                <MenuItem value='sala3'>Sala N°3</MenuItem>
                <MenuItem value='sala4'>Sala N°4</MenuItem>
                <MenuItem value='sala5'>Sala N°5</MenuItem>
                <MenuItem value='sala6'>Sala N°6</MenuItem>
              </TextField>
            </div>
          </div>

          <Box my={2}> </Box>
          <h5 className="font-semibold mb-2">Datos del Sepelio</h5>
          <Divider />
          <Box my={2}> </Box>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <div className="md:col-span-1 flex flex-col">
              <Typography variant="subtitle1">
                Fecha de sepelio <span style={{ color: 'red' }}>*</span>
              </Typography>
              <TextField
                {...register('fechaSepelio', { required: 'Debes selecionar Fecha de sepelio' })}
                type="date"
                error={!!errors.fechaSepelio}
                className='w-full'
                onChange={(e) => {
                  setValue('fechaSepelio', e.target.value);
                }}
                helperText={errors.fechaSepelio?.message}
                slotProps={{
                  input: {
                    className: 'customTextField',
                  },
                }}
              />
            </div>

            <div className="md:col-span-1 flex flex-col">
              <Typography variant="subtitle1">
                Hora de sepelio <span style={{ color: 'red' }}>*</span>
              </Typography>
              <TextField
                {...register('horaSepelio', { required: 'Debes selecionar Hora de sepelio' })}
                type="time"
                error={!!errors.horaSepelio}
                className='w-full'
                helperText={errors.horaSepelio?.message}
                slotProps={{
                  input: {
                    className: 'customTextField',
                  },
                }}
              />
            </div>

            <div className="md:col-span-1 flex flex-col">
              <Typography variant="subtitle1">
                Iglesias <span style={{ color: 'red' }}>*</span>
              </Typography>
              <TextField
                {...register('iglesias', {
                  required: 'El campo es requerido',
                  validate: value => value !== 'SELECCIONAR' || 'Debes seleccionar una iglesia'
                })}
                select
                error={!!errors.iglesias}
                className='w-full'
                defaultValue={'SELECCIONAR'}
                helperText={errors.iglesias?.message}
                slotProps={{
                  input: {
                    className: 'customTextField',
                  },
                }}
              >
                <MenuItem value='SELECCIONAR'>
                  SELECCIONAR
                </MenuItem>
                <MenuItem value='iglesia1'>Iglesia 1</MenuItem>
                <MenuItem value='iglesia2'>Iglesia 2</MenuItem>
                <MenuItem value='iglesia3'>Iglesia 3</MenuItem>
              </TextField>
            </div>
          </div>


          <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
            <div className="md:col-span-2 flex flex-col">
              <Typography variant="subtitle1">
                Cementerios <span style={{ color: 'red' }}>*</span>
              </Typography>
              <TextField
                {...register('cementerios', {
                  required: 'El campo es requerido',
                  validate: value => value !== 'SELECCIONAR' || 'Debes seleccionar un cementerio'
                })}
                select
                error={!!errors.cementerios}
                className='w-full'
                defaultValue={'SELECCIONAR'}
                helperText={errors.cementerios?.message}
                slotProps={{
                  input: {
                    className: 'customTextField',
                  },
                }}
              >
                <MenuItem value='SELECCIONAR'>
                  SELECCIONAR
                </MenuItem>
                <MenuItem value='cementerio1'>Cementerio 1</MenuItem>
                <MenuItem value='cementerio2'>Cementerio 2</MenuItem>
                <MenuItem value='cementerio3'>Cementerio 3</MenuItem>
                <MenuItem value='cementerio4'>Cementerio 4</MenuItem>
                <MenuItem value='cementerio5'>Cementerio 5</MenuItem>
                <MenuItem value='cementerio6'>Cementerio 6</MenuItem>
              </TextField>
            </div>

            <div className="md:col-span-2 flex flex-col">
              <Typography variant="subtitle1">
                Casa de duelos <span style={{ color: 'red' }}>*</span>
              </Typography>
              <TextField
                {...register('casaDeDuelos', {
                  required: 'El campo es requerido',
                  validate: value => value !== 'SELECCIONAR' || 'Debes seleccionar una casa de duelos'
                })}
                select
                error={!!errors.casaDeDuelos}
                className='w-full'
                defaultValue={'SELECCIONAR'}
                helperText={errors.casaDeDuelos?.message}
                slotProps={{
                  input: {
                    className: 'customTextField',
                  },
                }}
              >
                <MenuItem value='SELECCIONAR'>
                  SELECCIONAR
                </MenuItem>
                <MenuItem value='calle1'>Calle 1</MenuItem>
                <MenuItem value='calle2'>Calle 2</MenuItem>
                <MenuItem value='calle3'>Calle 3</MenuItem>
                <MenuItem value='calle4'>Calle 4</MenuItem>
                <MenuItem value='calle5'>Calle 5</MenuItem>
                <MenuItem value='calle6'>Calle 6</MenuItem>
              </TextField>
            </div>

            <div className="md:col-span-1 flex flex-col">
              <Typography variant="subtitle1">
                Número de calle <span style={{ color: 'red' }}>*</span>
              </Typography>
              <TextField
                {...register('numeroCalle', { required: 'Debes ingresar un numero de calle' })}
                type="number"
                error={!!errors.numeroCalle}
                className='w-full'
                helperText={errors.numeroCalle?.message}
                placeholder="N° de Calle"
                slotProps={{
                  input: {
                    className: 'customTextField',
                  },
                }}
              />
            </div>

            <div className="md:col-span-1 flex flex-col">
              <Typography variant="subtitle1">
                Estado <span style={{ color: 'red' }}>*</span>
              </Typography>
              <TextField
                {...register('estado', {
                  required: 'El campo es requerido',
                  validate: value => value !== 'SELECCIONAR' || 'Debes seleccionar un estado'
                })}
                select
                error={!!errors.estado}
                className='w-full'
                defaultValue={'SELECCIONAR'}
                helperText={errors.estado?.message}
                slotProps={{
                  input: {
                    className: 'customTextField',
                  },
                }}
              >
                <MenuItem value='SELECCIONAR'>
                  SELECCIONAR
                </MenuItem>
                <MenuItem value='activo'>Activo</MenuItem>
                <MenuItem value='inactivo'>Inactivo</MenuItem>
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

export default CrearDefuncion;
















