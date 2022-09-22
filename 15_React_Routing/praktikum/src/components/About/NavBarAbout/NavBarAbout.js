import React from "react";
import { Link } from "react-router-dom";
import "./NavBarAbout.css";

const NavBarAbout = () => {
  return (
    <nav className="navBarAbout">
      <ul className="showMenuAbout">
        <li>
          <Link to="/" className="navItemAbout">
            home
          </Link>
          <Link to="/about/about-app" className="navItemAbout">
            about app
          </Link>
          <Link to="/about/about-author" className="navItemAbout">
            about author
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBarAbout;
