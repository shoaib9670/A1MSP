import React, { useState } from "react";
import "./Navigation.css";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

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
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to={"/services"}>Services</Link>
        </li>
        <li>
          <Link to={"/about"}>About</Link>
        </li>
        <li>
          <Link to={"/recent"}>Recent Updates</Link>
        </li>
        <li>
          <Link to={"/contact"}>Contact Us</Link>
        </li>
        <li>
          <Link to={"/gallery"}>Gallery</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
