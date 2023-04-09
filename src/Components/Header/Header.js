import React from "react";
// import logo from "./logo.svg";
import "./header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhoneAlt,
  faEnvelope,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <header className="header">
      <div className="header__logo"></div>
      <div className="header__info">
        <div className="header__item">
          <FontAwesomeIcon icon={faPhoneAlt} />
          <span className="header__text">123-456-7890</span>
        </div>
        <div className="header__item">
          <FontAwesomeIcon icon={faEnvelope} />
          <span className="header__text">info@example.com</span>
        </div>
        <div className="header__item">
          <FontAwesomeIcon icon={faMapMarkerAlt} />
          <span className="header__text">123 Main St, City, State ZIP</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
