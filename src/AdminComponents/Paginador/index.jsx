import React from 'react';
import Box from '@mui/material/Box';
import TablePagination from '@mui/material/TablePagination';

const Paginador = ({ page, rowsPerPage, count, onPageChange, onRowsPerPageChange }) => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2 }}>
      <TablePagination
        rowsPerPageOptions={[5, 10, 20]}
        component="div"
        count={count}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={onPageChange}
        onRowsPerPageChange={onRowsPerPageChange}
        labelRowsPerPage="Mostrar Listado"
      />
    </Box>
  );
};

export default Paginador;