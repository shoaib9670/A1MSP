import React, { useState } from "react";
import "./Navigation.css";
import { FaBars, FaTimes } from "react-icons/fa";
import Logo from "../../Assets/logo/Logo.png";

function NavBar() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className="navbar">
      <button className="navbar-toggle" onClick={toggleMenu}>
        {showMenu ? <FaTimes /> : <FaBars />}
      </button>
      <ul
        className={
          showMenu ? "navbar-links navbar-links-show" : "show navbar-links"
        }
      >
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Services</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Recent Updates</a>
        </li>
        <li>
          <a href="#">Contact Us</a>
        </li>
        <li>
          <a href="#">Gallery</a>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
