import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useForm } from 'react-hook-form'
import { TextField, MenuItem, Button } from '@mui/material'

const CrearCalle = ({ titulo = 'Crear Calle', nombre = '' }) => {
	const {
		register,
		handleSubmit,
		formState: { errors },
		setValue,
	} = useForm({
		defaultValues: {
			name: nombre,
		},
	})

	const [provincias, setProvincias] = useState([])
	const [localidades, setLocalidades] = useState([])
	const [selectedProvincia, setSelectedProvincia] = useState(true)

	const getProvincias = async () => {
		try {
			const response = await axios.get('https://apis.datos.gob.ar/georef/api/provincias')
			setProvincias(
				response.data.provincias.map((item) => ({
					id: item.id,
					name: item.nombre,
				}))
			)
		} catch (error) {
			console.error('Error al obtener provincias:', error)
		}
	}

	const getLocalidades = async (provinciaId) => {
		if (!provinciaId) return
		try {
			const response = await axios.get(`https://apis.datos.gob.ar/georef/api/localidades?provincia=${provinciaId}&campos=id,nombre&max=5000`)
			setLocalidades(
				response.data.localidades.map((item) => ({
					id: item.id,
					name: item.nombre,
				}))
			)
		} catch (error) {
			console.error('Error al obtener localidades:', error)
		}
	}

	useEffect(() => {
		getProvincias()
	}, [])

	const handleProvinciaChange = (event) => {
		const provinciaId = event.target.value
		setSelectedProvincia(false)
		getLocalidades(provinciaId)
	}

	const onSubmit = (data) => {
		const provinciaSeleccionada = provincias.find((p) => p.id === data.provincia)
		const localidadSeleccionada = localidades.find((l) => l.id === data.localidad)
		data.provincia = provinciaSeleccionada
		data.localidad = localidadSeleccionada
		console.log(data)
	}

	return (
		<div className='container mx-auto mt-8 p-4'>
			<div className='bg-white shadow-lg rounded-lg p-6'>
				<h3 className='text-2xl font-semibold mb-2'>{titulo}</h3>
				<hr className='mb-4' />
				<p className='text-red-600 text-center text-sm mb-4'>(*) Campos Obligatorios</p>

                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className='grid grid-cols-1 md:grid-cols-4 gap-4 mb-4'>
                        <TextField {...register('name', { required: 'El campo es requerido' })} 
                        error={!!errors.name} 
                        label='Nombre' 
                        className='w-full' 
                        helperText={errors.name?.message} 
                        />

                        <TextField {...register('provincia', { required: 'El campo es requerido' })} 
                        select error={!!errors.provincia} 
                        label='Provincias' 
                        className='w-full' 
                        defaultValue={''} 
                        onChange={handleProvinciaChange} 
                        helperText={errors.provincia?.message}>
                            <MenuItem value=''>
                                <em>Seleccione una provincia</em>
                            </MenuItem>
                            {provincias.map((provincia) => (
                                <MenuItem key={provincia.id} value={provincia.id}>
                                    {provincia.name}
                                </MenuItem>
                            ))}
                        </TextField>

                        <TextField {...register('localidad', { required: 'El campo es requerido' })} 
                        select error={!!errors.localidad} 
                        label='Localidades' 
                        className='w-full' 
                        defaultValue={''} 
                        disabled={selectedProvincia} 
                        helperText={errors.localidad?.message}>
                            <MenuItem value=''>
                                <em>Seleccione una localidad</em>
                            </MenuItem>
                            {localidades.map((localidad) => (
                                <MenuItem key={localidad.id} value={localidad.id}>
                                    {localidad.name}
                                </MenuItem>
                            ))}
                        </TextField>

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
						>
							<MenuItem value='SELECCIONAR'>
								SELECCIONAR
							</MenuItem>
							<MenuItem value='activo'>Activo</MenuItem>
							<MenuItem value='inactivo'>Inactivo</MenuItem>
						</TextField>
					</div>

					<div className='flex justify-center mt-8'>
						<Button variant='contained' color='success' type='submit'>
							Guardar
						</Button>
					</div>
				</form>
			</div>
		</div>
	)
}

export default CrearCalle

// const {
// 	register,
// 	setValue,
// 	formState: { errors },
// 	handleSubmit,
// } = useForm();

// const [provincias, setProvincias] = useState([]);
// const [localidades, setLocalidades] = useState([]);
// const [selectedProvincia, setSelectedProvincia] = useState(null);

// // Función para obtener las provincias
// const getProvincias = async () => {
// 	const listProvincia = await axios.get('https://apis.datos.gob.ar/georef/api/provincias');
// 	setProvincias(
// 		listProvincia.data.provincias.map((item) => {
// 			return { id: item.id, name: item.nombre };
// 		})
// 	);
// };

// // Función para obtener las localidades de una provincia
// const getLocalidades = async (provinciaId) => {
// 	if (provinciaId) {
// 		const listLocalidades = await axios.get(`https://apis.datos.gob.ar/georef/api/localidades?provincia=${provinciaId}`);
// 		setLocalidades(
// 			listLocalidades.data.localidades.map((item) => {
// 				return { id: item.id, name: item.nombre };
// 			})
// 		);
// 	}
// };

// // useEffect para obtener las provincias cuando el componente se monta
// useEffect(() => {
// 	getProvincias();
// }, []);

// // useEffect para obtener las localidades cuando cambia la provincia seleccionada
// useEffect(() => {
// 	if (selectedProvincia) {
// 		getLocalidades(selectedProvincia);
// 	} else {
// 		setLocalidades([]);
// 	}
// }, [selectedProvincia]);
