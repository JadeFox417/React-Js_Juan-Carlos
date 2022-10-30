import React from "react";
import About from "../components/About/About";
import Footer from "../components/Footer/Footer";
import Form from "../components/Form/Form";
import Navbar from "../components/Navbar/Navbar";
import Welcome from "../components/Welcome/Welcome";

const Homepage = () => {
  return (
    <>
      <Navbar />
      <Welcome />
      <Form />
      <About />
      <Footer />
    </>
  );
};

export default Homepage;
