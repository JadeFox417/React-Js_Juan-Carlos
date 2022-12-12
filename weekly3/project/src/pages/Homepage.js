import React from "react";
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
      <Footer />
    </>
  );
};

export default Homepage;
