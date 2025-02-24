import React from "react";
import { Pagination } from "@mui/material";

const PaginationHome = (props) => {
  const handleMouseDown = (event) => {
    event.preventDefault(); // Previene el scroll al enfocar
  };

  return (
    <Pagination
      {...props}
      onMouseDown={handleMouseDown} // Evita el enfoque por mouse
    />
  );
};

export default PaginationHome;