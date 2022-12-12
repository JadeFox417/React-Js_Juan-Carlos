import React from "react";
import About from "../components/About/About";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import UsersList from "../components/UsersList/UsersList";

const AboutUsPage = () => {
  return (
    <>
      <Navbar />
      <About />
      <UsersList />
      <Footer />
    </>
  );
};

export default AboutUsPage;
