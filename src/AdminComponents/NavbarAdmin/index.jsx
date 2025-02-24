import React, { useState } from 'react';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import { Menu, MenuItem, IconButton } from '@mui/material';

const NabvarAdmin = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <nav className="bg-black text-white h-12 fixed top-0 left-0 w-full z-10 flex items-center justify-between px-4"> 
      <div className="flex items-center">
        <img src="src/assets/img/Boton_EnVivo1_1.png" alt="Logo" className="h-10" /> {/* Reemplaza con tu URL */}
      </div>
      <div className="space-x-4 flex items-center">
        <a href="/" className="flex items-center hover:text-gray-300">
          <HomeIcon />
          <span className="ml-1"></span>
        </a>
        <div>
          <IconButton
            onClick={handleClick}
            style={{ color: 'white' }}
            className="hover:text-gray-300"
          >
            <PersonIcon />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>Mi cuenta</MenuItem>
            <MenuItem onClick={handleClose}>Cerrar sesión</MenuItem>
          </Menu>
        </div>
      </div>
    </nav>
  );
};

export default NabvarAdmin;




