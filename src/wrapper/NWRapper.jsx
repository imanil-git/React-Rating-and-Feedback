// import React from 'react'

import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home.jsx";
import Feedback from "../pages/Feedback.jsx";
import Navbar from "../components/Navbar.jsx";

const NWRapper = () => {
    const navItems = [
        {
            name: "Home",
            path: "/"
        },
        {
            name: "Feedback",
            path: "/feedback"
        }
    ]
  return (
    <>
      <Navbar items={navItems} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/feedback" element={<Feedback />} />
      </Routes>
    </>
  );
};

export default NWRapper;
