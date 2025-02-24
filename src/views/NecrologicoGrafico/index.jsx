import React from 'react';
import { useForm } from 'react-hook-form';
import { TextField, MenuItem, Button, Typography, Box, Divider } from '@mui/material'

const Graficos = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="container mx-auto mt-8 p-4">
      <div className="bg-white shadow-lg rounded-lg p-6">
        <Typography variant="h5" className="mb-2 font-semibold">Gráficos</Typography>
        <Box my={1}> </Box>
        <Divider />
        <Box my={2}> </Box>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">

            {/* Campo de Rango */}
            <div>
              <Typography variant="body1" className="mb-2">Rango</Typography>
              <TextField
                {...register('rango', {
                  required: 'El campo es requerido',
                  validate: value => value !== 'SELECCIONAR' || 'Debes seleccionar un rango',
                })}
                select
                error={!!errors.rango}
                className="w-full"
                defaultValue={'SELECCIONAR'}
                helperText={errors.rango?.message}
                slotProps={{
                  input: {
                    className: 'customTextField',
                  },
                }}
              >
                <MenuItem value="SELECCIONAR">SELECCIONAR</MenuItem>
                <MenuItem value="Diario">Diario</MenuItem>
                <MenuItem value="Mensual">Mensual</MenuItem>
              </TextField>
            </div>

            {/* Campo de Mes */}
            <div>
              <Typography variant="body1" className="mb-2">Mes</Typography>
              <TextField
                {...register('mes', {
                  required: 'El campo es requerido',
                  validate: value => value !== 'SELECCIONAR' || 'Debes seleccionar un mes',
                })}
                select
                error={!!errors.mes}
                className="w-full"
                defaultValue={'SELECCIONAR'}
                helperText={errors.mes?.message}
                slotProps={{
                  input: {
                    className: 'customTextField',
                  },
                }}
              >
                <MenuItem value="SELECCIONAR">SELECCIONAR</MenuItem>
                <MenuItem value="Enero">Enero</MenuItem>
                <MenuItem value="Febrero">Febrero</MenuItem>
                <MenuItem value="Marzo">Marzo</MenuItem>
                <MenuItem value="Abril">Abril</MenuItem>
                <MenuItem value="Mayo">Mayo</MenuItem>
                <MenuItem value="Junio">Junio</MenuItem>
                <MenuItem value="Julio">Julio</MenuItem>
                <MenuItem value="Agosto">Agosto</MenuItem>
                <MenuItem value="Septiembre">Septiembre</MenuItem>
                <MenuItem value="Octubre">Octubre</MenuItem>
                <MenuItem value="Noviembre">Noviembre</MenuItem>
                <MenuItem value="Diciembre">Diciembre</MenuItem>
              </TextField>
            </div>

            {/* Campo de Año */}
            <div>
              <Typography variant="body1" className="mb-2">Año</Typography>
              <TextField
                {...register('anio', {
                  required: 'El campo es requerido',
                  validate: value => value !== 'SELECCIONAR' || 'Debes seleccionar un año',
                })}
                select
                error={!!errors.anio}
                className="w-full"
                defaultValue={'SELECCIONAR'}
                helperText={errors.anio?.message}
                slotProps={{
                  input: {
                    className: 'customTextField',
                  },
                }}
              >
                <MenuItem value="SELECCIONAR">SELECCIONAR</MenuItem>
                <MenuItem value="2023">2023</MenuItem>
                <MenuItem value="2024">2024</MenuItem>
              </TextField>
            </div>

            <div className="col-span-1 flex items-end">
              <Button
                variant="contained"
                color="primary"
                type="submit"
              >
                Guardar
              </Button>
            </div>
          </div>
        </form>

        {/* Gráfico de ejemplo */}
        <div className="bg-white p-4 shadow-md rounded-md">
          <Typography variant="h6" className="text-center mb-2">Comparativa 2023 - 2024</Typography>

          <div className="h-64 bg-gray-100 flex justify-center items-center">
            <Typography variant="body2" color="textSecondary">[Gráfico de barras]</Typography>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Graficos;


