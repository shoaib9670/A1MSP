import React from "react";
// import logo from "./logo.svg";
import "./header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhoneAlt,
  faEnvelope,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";
import Logo from "../../Assets/logo/Logo.png";

const Header = () => {
  return (
    <header className="header">
      <div className="header__logo"></div>
      <div
        style={{ alignItems: "center", width: "100%" }}
        className="header__info"
      >
        <div style={{ display: "flex", flexDirection: "row" }}>
          <img src={Logo} style={{ width: 50, height: 50 }} alt="Logo" />
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
        <div className="header__item">
          <FontAwesomeIcon icon={faPhoneAlt} />
          <div style={{ display: "flex" }}>
            <a className="header__text" href="tel:8294778366">
              8294778366,{"  "}
            </a>
            <a className="header__text" href="tel:9650109185">
              9650109185
            </a>
          </div>
        </div>
        <div className="header__item">
          <FontAwesomeIcon icon={faEnvelope} />
          <a href="mailto:mspconsultancy23@gmail.com" className="header__text">
            mspconsultancy23@gmail.com
          </a>
        </div>
        <div
          style={{ alignItems: "center", justifyContent: "space-between" }}
          className="header__item"
        >
          <FontAwesomeIcon icon={faMapMarkerAlt} />
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span className="header__text">
              Office No. 600, Level 5, Shopprix Mall, Sector-5,
            </span>
            <span className="header__text">
              Vaishali, Ghaziabad, Uttar Pradesh - 201010
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
