import React from "react";
import { Link } from "react-router-dom";
import logo from "../Assets/Logo.png";
import acasa from "../Assets/NavIcons/Casa.png";
import carte from "../Assets/NavIcons/Carte.png";
import sabii from "../Assets/NavIcons/Sabii.png";
import simulare from "../Assets/NavIcons/Simulare.png";
import "../Styles/Components/Navbar/Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navlogo">
        <Link to="/" className="brand w-nav-brand">
          <img src={logo} height="60px" />
        </Link>
      </div>

      <div className="navlinks">
        <ul className="acasa">
          <Link to="/">
            <li>Acasa</li>
            <img src={acasa} alt="acasa" width="30px" className="acasa-icon" />
          </Link>
        </ul>
        <div className="materie">
          <Link to="/materie">
            <li>Materie </li>
            <img
              src={carte}
              alt="carte"
              width="20px"
              className="materie-icon"
            />
          </Link>
        </div>
        <div className="joaca">
          <Link to="/joaca">
            <li>Joacă </li>
            <img src={sabii} alt="sabii" width="24px" className="joaca-icon" />
          </Link>
        </div>
            <Link to="/simulare">
        <div className="simulare">
          <button className="simulare-btn">
              <li>Simulare </li>
              <img
                src={simulare}
                alt="simulare"
                width="24px"
                className="simulare-icon"
              />
          </button>
        </div>
            </Link>
      </div>
    </nav>
  );
}

export default Navbar;
