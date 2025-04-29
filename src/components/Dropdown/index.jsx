import React, { useState } from "react";
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";

const Dropdown = ({ label = "Menú", items = [] }) => {
  const [open, setOpen] = useState(false);

  return (
    <li
      className="relative list-none"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <Menu open={open} handler={setOpen} allowHover>
        <MenuHandler>
          <div className="group p-2 rounded-md transition-all cursor-pointer">
            <div className="flex items-center justify-center text-base font-medium group-hover:text-pink-500">
              {label} <IoIosArrowDown className="ml-1" />
            </div>
            <span className="block h-1 w-6 rounded-full bg-pink-500 mx-auto mt-1" />
          </div>
        </MenuHandler>

        <MenuList className="text-white bg-gray-800 text-base font-medium focus:outline-none">
          {items.map(({ label, path }, index) => (
            <MenuItem
              key={index}
              className="hover:bg-gray-300 hover:text-black hover:shadow-md px-4 py-2 transition-all duration-150 focus:outline-none"
            >
              <Link to={path} className="block w-full h-full">
                {label}
              </Link>
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </li>
  );
};

export default Dropdown;