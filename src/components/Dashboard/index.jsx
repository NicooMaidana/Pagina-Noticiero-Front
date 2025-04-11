import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../footer";
import "./Dashboard.css";
import Navbar from "../Navbar";

const Dashboard = () => {
  return (
<div className="flex flex-col min-h-screen">
  <Navbar />
  <main className="flex-grow custom-main">
    <Outlet />
  </main>
  <Footer />
</div>
  );
};

export default Dashboard;

