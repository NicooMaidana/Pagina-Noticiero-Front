import React, { useState } from "react";
import "./loginForm.css";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div className="wrapper bg-zinc-700">
      <div className="top bg-zinc-800">
        <img src="src/assets/img/Boton_EnVivo1_1.png" alt="" />
      </div>
      <div className="bottom">
        <form action="#">
          <div className="input-box">
            <input type="text" placeholder="Email" required />
          </div>
          <div className="input-box password-box">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Contraseña"
              required
            />
            <button
              type="button"
              className="toggle-password-btn"
              onClick={togglePasswordVisibility}
            >
              {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
            </button>
          </div>
          <div className="input-box">
            <input type="submit" value="Ingresar" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
