import React from "react";
import NavBarAbout from "../NavBarAbout/NavBarAbout";
import "./AboutAuthor.css";

const AboutAuthor = () => {
  return (
    <div className="aboutAuthor">
      <NavBarAbout />
      <h1 className="titleAboutAuthor">About the Author</h1>
      <p className="contentAboutAuthor">This app was developed by someone, a self-taught web developer and technical writer.</p>
    </div>
  );
};
export default AboutAuthor;
