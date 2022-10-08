import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MdClose } from "react-icons/md";
import { FiMenu } from "react-icons/fi";

const NavBar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const handleToggle = () => {
    setNavbarOpen(!navbarOpen);
  };

  return (
    <nav className="navBar">
      <button onClick={handleToggle}>{navbarOpen ? <MdClose style={{ color: "#fff", width: "45px", height: "45px" }} /> : <FiMenu style={{ color: "#7b7b7b", width: "45px", height: "45px" }} />}</button>
      <ul className={`menuNav ${navbarOpen ? "showMenu" : ""}`}>
        <li>
          <Link to="/" className="navItem">
            home
          </Link>
          <Link to="/about/about-app" className="navItem">
            about
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
