import React from "react";
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";

const DropdownNavbar = () => {
  return (
    <li className="relative list-none">
      <Menu>
        <MenuHandler>
          <div className="group p-2 rounded-md transition-all cursor-pointer">
            <div className="flex items-center justify-center text-lg font-medium group-hover:text-pink-500">
              Otros<IoIosArrowDown className="ml-1" />
            </div>
            <span className="lock h-1 w-6 rounded-full bg-pink-500 mx-auto mt-1"/>

          </div>
        </MenuHandler>

        <MenuList className="text-white bg-gray-800 text-base font-medium active:border-none focus:outline-none">
          <MenuItem className="hover:bg-transparent hover:shadow-md hover:bg-gray-300 hover:text-black px-4 py-2 transition-all duration-150">
            <Link to="/GuiaTel" className="block w-full h-full">Guía Tel.</Link>
          </MenuItem>
          <MenuItem className="hover:bg-transparent hover:shadow-md hover:bg-gray-300 hover:text-black px-4 py-2 transition-all duration-150">
            <Link to="/Necrologico" className="block w-full h-full">Necrológico</Link>
          </MenuItem>
          <MenuItem className="hover:bg-transparent hover:shadow-md hover:bg-gray-300 hover:text-black px-4 py-2 transition-all duration-150">
            <Link to="/Clima" className="block w-full h-full">Clima</Link>
          </MenuItem>
          <MenuItem className="hover:bg-transparent hover:shadow-md hover:bg-gray-300 hover:text-black px-4 py-2 transition-all duration-150">
            <Link to="/Programas" className="block w-full h-full">Programas</Link>
          </MenuItem>
        </MenuList>
      </Menu>
    </li>
  );
};

export default DropdownNavbar;
