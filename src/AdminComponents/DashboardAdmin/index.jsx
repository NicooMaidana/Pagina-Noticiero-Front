import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../Sidebar";
import NavBar from "../NavbarAdmin"; // Importamos el NavBar
import Footer from "../FooterAdmin"; // Importamos el Footer

const DashboardAdmin = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* NavBar, que queda fijo en la parte superior */}
      <NavBar />

      <div className="flex flex-grow mt-12"> {/* Asegúrate de que el Sidebar inicie después del NavBar */}
        <Sidebar className="w-60" /> {/* Sidebar en el lado izquierdo */}

        <main className="flex-grow p-4"> {/* Aquí ya no es necesario el margen superior */}
          <Outlet />
        </main>
      </div>

      {/* Footer al final */}
      <Footer />
    </div>
    // https://practicas.coopmorteros.coop/Login Pasantias1234 coopmorteros@pasantias.coop
  );
};

export default DashboardAdmin;


