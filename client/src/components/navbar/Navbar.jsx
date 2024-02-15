import React, { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import "./navbar.css";
import logo from "../../assets/logo.png";

const Menu = () => (
  <>
    <p>
      <a href="#our-range">Our Range</a>
    </p>
    <p>
      <a href="#drive-away">Drive Away</a>
    </p>
    <p>
      <a href="#contact">Contact</a>
    </p>
  </>
);

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="dealcars__navbar">
      <div className="dealcars__navbar-links">
        <div className="dealcars__navbar-links_logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="dealcars__navbar-links_container">
          <Menu />
        </div>
      </div>
      <div className="dealcars__navbar-menu">
        {toggleMenu ? (
          <RiCloseLine
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(false)}
            data-testid="close-icon"
          />
        ) : (
          <RiMenu3Line
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(true)}
            data-testid="open-icon"
          />
        )}
        {toggleMenu && (
          <div className="dealcars__navbar-menu_container scale-up-center">
            <div className="dealcars__navbar-menu_container-links">
              <Menu />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
