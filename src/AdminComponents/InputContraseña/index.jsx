import React, { useState } from 'react';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

const InputContraseña = ({ id, placeholder, required }) => {
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className="input-box password-box relative">
            <input
                type={showPassword ? "text" : "password"}
                id={id}
                placeholder={placeholder}
                className="mt-1 block w-full rounded-md border-2 border-gray-300 shadow-sm py-2 px-4 focus:border-green-500 focus:ring focus:ring-green-200 focus:ring-opacity-50" // Cambia el foco a verde
                required={required}
            />
            <button
                type="button"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 text-green-500 hover:text-green-600" // Aplicando el color del icono
                onClick={togglePasswordVisibility}
            >
                {showPassword 
                    ? <VisibilityOffIcon /> 
                    : <VisibilityIcon />}
            </button>
        </div>
    );
};
export default InputContraseña;
