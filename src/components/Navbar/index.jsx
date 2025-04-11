import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.styles.css";
import { IoMdSearch } from "react-icons/io";
import { CiMenuFries } from "react-icons/ci";
import DropdownNavbar from "../DropdownNavbar";

const navItems = [
  { name: "Inicio", path: "/", color: "text-white hover:text-zinc-200" },
  { name: "Sociales", path: "/Sociales", color: "text-orange-500 hover:text-orange-600" },
  { name: "Deportes", path: "/Deportes", color: "text-red-700 hover:text-red-800" },
  { name: "Policiales", path: "/Policiales", color: "text-blue-700 hover:text-blue-800" },
  { name: "Política", path: "/Politica", color: "text-yellow-400 hover:text-yellow-500" },
  { name: "Economía", path: "/Economia", color: "text-green-600 hover:text-green-700" },
  { name: "Salud", path: "/Salud", color: "text-blue-400 hover:text-blue-500" },
  { name: "Educación", path: "/Educacion", color: "text-purple-700 hover:text-purple-800" },
  { name: "Guía telefónica", path: "/GuiaTel", color: "text-gray-200" },
  { name: "Necrológico", path: "/Necrologico", color: "text-gray-200" },
  { name: "Clima", path: "/Clima", color: "text-gray-200" },
  { name: "Programas", path: "/Programas", color: "text-gray-200" },
];

const menuItems = [
  { to: "/", label: "Inicio", color: "zinc-200" },
  { to: "/Sociales", label: "Sociales", color: "orange-500" },
  { to: "/Deportes", label: "Deportes", color: "red-700" },
  { to: "/Policiales", label: "Policiales", color: "blue-700" },
  { to: "/Politica", label: "Política", color: "yellow-400" },
  { to: "/Economia", label: "Economía", color: "green-600" },
  { to: "/Salud", label: "Salud", color: "blue-400" },
  { to: "/Educacion", label: "Educación", color: "purple-700" },
];
const NavItem = ({ item, onClick, isMobile }) => (
  <li
    className={`list-none ${isMobile ? "w-full text-center p-3 bg-gray-800 hover:bg-gray-300 hover:text-gray-800" : "p-2 rounded-md transition-all"} ${item.color} cursor-pointer`}
  >
    <Link to={item.path} onClick={onClick}>{item.name}</Link>
  </li>
);

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="relative z-40 flex justify-between items-center text-white py-3 px-8 md:px-32 bg-gray-800 drop-shadow-md">
      
      <a href="#">
        <img src="src/assets/img/Boton_EnVivo1_1.png" alt="Logo" className="w-52" />
      </a>

      {/* Navegación en pantallas grandes */}
      <ul className="hidden xl:flex items-center gap-1 text-lg font-medium">
        {menuItems.map(({ to, label, color }) => (
          <li key={to} className={`p-2 hover:text-${color} rounded-md transition-all`}>
            <Link to={to}>{label}</Link>
            <span className={`block h-1 w-6 rounded-full bg-${color} mx-auto mt-1`}></span>
          </li>
        ))}
        <DropdownNavbar />
      </ul>

      {/* Buscador */}
      <div className="relative hidden md:flex items-center justify-center gap-2">
        <i className="absolute right-3 text-2xl text-gray-800 font-semibold">
          <IoMdSearch />
        </i>
        <input
          type="text"
          placeholder="Buscar..."
          className="py-2 pl-4 rounded-xl border-2 border-blue-300 focus:bg-slate-100 focus:outline-none text-gray-800"
        />
      </div>

      {/* Botón hamburguesa */}
      <i
        className="xl:hidden block text-2xl cursor-pointer font-semibold"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <CiMenuFries />
      </i>

      {/* Menú móvil */}
      <ul className={`absolute xl:hidden top-20 left-0 w-full bg-white flex flex-col items-center font-semibold text-lg transform transition-all duration-300 ease-in-out ${isMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"}`}>
        {navItems.map((item, index) => (
          <NavItem key={index} item={item} onClick={() => setIsMenuOpen(false)} isMobile />
        ))}
      </ul>
    </header>
  );
};

export default Navbar;
