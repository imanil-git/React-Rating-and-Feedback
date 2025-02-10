// import React from 'react'

import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home.jsx";
import Feedback from "../pages/Feedback.jsx";
import Navbar from "../components/Navbar.jsx";
import Sliders from "../pages/Slider.jsx";
import Anil from "../pages/Anil.jsx";

const NWRapper = () => {
    const navItems = [
        {
            name: "Home",
            path: "/"
        },
        {
            name: "Feedback",
            path: "/feedback"
        },
        {
          name: "Slider",
          path: "/slider"
        },
        {
          name:"Anil",
          path: "/anil"
        }
    ]
  return (
    <>
      <Navbar items={navItems} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/slider" element={< Sliders />} />
        <Route path="/anil" element={< Anil />} />
      </Routes>
    </>
  );
};

export default NWRapper;
