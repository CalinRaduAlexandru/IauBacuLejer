import React, { useEffect, useState } from "react";

import { BiMenuAltRight } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import { FiChevronDown } from "react-icons/fi";
import logo from "../../Assets/Logo.png";
import acasa from "../../Assets/NavIcons/Acasa.svg";
import materie from "../../Assets/NavIcons/Materie.svg";
import joaca from "../../Assets/NavIcons/Joaca.svg";
import simulare from "../../Assets/NavIcons/Simulare.svg";
import classes from "./Header.module.scss";
import { NavLink as Link } from "react-router-dom";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [size, setSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    const handleResize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (size.width > 768 && menuOpen) {
      setMenuOpen(false);
    }
  }, [size.width, menuOpen]);

  const menuToggleHandler = () => {
    setMenuOpen((p) => !p);
  };


  return (
    <header className={classes.header}>
      <div className={classes.header__content}>
        <Link to="/" className={classes.header__content__logo}>
          <img src={logo} alt="logo" height="80px" />
        </Link>
        <nav
          className={`${classes.header__content__nav} ${
            menuOpen && size.width < 768 ? classes.isMenu : ""
          }`}
        >
          <ul>
            <li>
              <Link
                to="/"
                exact
                className={classes.header__content__acasa}
                onClick={menuToggleHandler}
                activeStyle={{ backgroundColor: "#D5EAFE" }}
              >
                Acasa <img src={acasa} alt="acasa" width="40px" />
              </Link>
            </li>
            <li>
              <Link
                to="/materie"
                className={classes.header__content__materie}
                onClick={menuToggleHandler}
                activeStyle={{ backgroundColor: "#D5EAFE" }}
              >
                Materie <img src={materie} alt="materie" width="40px" />
              </Link>
            </li>
            <li>
              <Link
                to="/joaca"
                className={classes.header__content__joaca}
                onClick={menuToggleHandler}
                activeStyle={{ backgroundColor: "#D5EAFE" }}
              >
                Joaca <img src={joaca} alt="joaca" width="40px" />
              </Link>
            </li>
            <li>
              <Link
                to="/simulare"
                className={classes.header__content__simulare}
                onClick={menuToggleHandler}
                activeStyle={{ backgroundColor: "#D5EAFE"  }}
              >
                Simulare
                <img src={simulare} alt="simulare" width="40px" />
              </Link>
            </li>
          </ul>
        </nav>
        <div className={classes.header__profile}>
          <h4>Username</h4>
          <FiChevronDown />
        </div>
        <div className={classes.header__content__toggle}>
          {!menuOpen ? (
            <BiMenuAltRight onClick={menuToggleHandler} />
          ) : (
            <AiOutlineClose onClick={menuToggleHandler} />
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
