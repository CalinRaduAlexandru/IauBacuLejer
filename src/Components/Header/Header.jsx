import React, { useState } from "react";
import { useAuth } from "../../contexts/AuthContext";

import { BiMenuAltRight } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import logo from "../../Assets/Logo.png";
import classes from "./Header.module.scss";
import { NavLink as Link } from "react-router-dom";
import Btn from "../../Ingredients/Btn/Btn.jsx";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { logout, currentUser } = useAuth();

  const menuToggleHandler = () => {
    setMenuOpen((p) => !p);
  };

  return (
    <header className={classes.header}>
      <div className={classes.header__content}>
        <Link to="/" className={classes.header__content__logo}>
          <img src={logo} alt="logo" height="80px" />
        </Link>
        {currentUser ? (
          <>
            <h2 className={classes.header__title}>Bine ai venit!</h2>{" "}
            <nav className={classes.header__content__nav}>
              <h4 className={classes.header__profile}>
                {JSON.stringify(currentUser.email)}
              </h4>{" "}
              <Link
                to="/"
                name="Logout"
                onClick={async (e) => {
                  e.preventDefault();
                  await logout();
                }}
              >
                <Btn>Logout</Btn>
              </Link>
            </nav>
          </>
        ) : null}

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
