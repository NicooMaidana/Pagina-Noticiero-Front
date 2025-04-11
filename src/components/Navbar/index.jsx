import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.styles.css";
import { IoMdSearch } from "react-icons/io";
import { CiMenuFries } from "react-icons/ci";
import DropdownNavbar from "../DropdownNavbar";

const navItems = [
  { name: "Inicio", path: "/", color: "hover:text-zinc-200" },
  { name: "Sociales", path: "/Sociales", color: "hover:text-orange-500" },
  { name: "Deportes", path: "/Deportes", color: "hover:text-red-700" },
  { name: "Policiales", path: "/Policiales", color: "hover:text-blue-700" },
  { name: "Política", path: "/Politica", color: "hover:text-yellow-400" },
  { name: "Economía", path: "/Economia", color: "hover:text-green-600" },
  { name: "Salud", path: "/Salud", color: "hover:text-blue-400" },
  { name: "Educación", path: "/Educacion", color: "hover:text-purple-700" },
  { name: "Guía telefónica", path: "/GuiaTel", color: "text-gray-200" },
  { name: "Necrológico", path: "/Necrologico", color: "text-gray-200" },
  { name: "Clima", path: "/Clima", color: "text-gray-200" },
  { name: "Programas", path: "/Programas", color: "text-gray-200" },
];

const menuItems = [
  { to: "/", label: "Inicio", hover: "hover:text-zinc-200", bar: "bg-zinc-200" },
  { to: "/Sociales", label: "Sociales", hover: "hover:text-orange-500", bar: "bg-orange-500" },
  { to: "/Deportes", label: "Deportes", hover: "hover:text-red-700", bar: "bg-red-700" },
  { to: "/Policiales", label: "Policiales", hover: "hover:text-blue-700", bar: "bg-blue-700" },
  { to: "/Politica", label: "Política", hover: "hover:text-yellow-400", bar: "bg-yellow-400" },
  { to: "/Economia", label: "Economía", hover: "hover:text-green-600", bar: "bg-green-600" },
  { to: "/Salud", label: "Salud", hover: "hover:text-blue-400", bar: "bg-blue-400" },
  { to: "/Educacion", label: "Educación", hover: "hover:text-purple-700", bar: "bg-purple-700" },
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
        {menuItems.map(({ to, label, hover, bar }) => (
          <li key={to} className={`p-2 rounded-md transition-all ${hover}`}>
            <Link to={to}>{label}</Link>
            <span className={`block h-1 w-6 rounded-full mx-auto mt-1 ${bar}`}></span>
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
