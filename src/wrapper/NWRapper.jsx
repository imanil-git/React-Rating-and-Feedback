// import React from 'react'

import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home.jsx";
import Feedback from "../pages/Feedback.jsx";
import Navbar from "../components/Navbar.jsx";
import Sliders from "../pages/Slider.jsx";

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
        }
    ]
  return (
    <>
      <Navbar items={navItems} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/slider" element={< Sliders />} />
      </Routes>
    </>
  );
};

export default NWRapper;
