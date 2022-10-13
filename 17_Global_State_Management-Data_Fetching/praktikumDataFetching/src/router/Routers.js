import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../components/Home";
import AboutApp from "../components/About/AboutApp/AboutApp";
import AboutAuthor from "../components/About/AboutAuthor/AboutAuthor";
import NoPage from "../components/NoPage";
import "../App.css";

function Routers() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about">
          <Route path="about-app" element={<AboutApp />} />
          <Route path="about-author" element={<AboutAuthor />} />
        </Route>
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Routers;
