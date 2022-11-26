import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutUsPage from "../pages/AboutUsPage";
import Homepage from "../pages/Homepage";
import "../App.css";

const Routers = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<AboutUsPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routers;
