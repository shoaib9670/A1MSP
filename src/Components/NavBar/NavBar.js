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
      <img src={Logo} style={{ width: 50, height: 50 }} alt="Logo" />
      <div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginleft: 200,
          }}
        >
          <text>A1 MSP Consultancy</text>
          <text>
            {"("}Manak Service Provider{")"}
          </text>
        </div>
      </div>
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
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
