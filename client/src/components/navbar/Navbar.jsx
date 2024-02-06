import React, { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import "./navbar.css";
import logo from "../../assets/logo.png";

const Menu = () => (
  <>
    <p>
      <a href="#link">Link</a>
    </p>
    <p>
      <a href="#link">Link</a>
    </p>
    <p>
      <a href="#link">Link</a>
    </p>
    <p>
      <a href="#link">Link</a>
    </p>
  </>
);

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="dealcars__navbar">
      <div className="dealcars__navbar-links">
        <div className="dealcars__navbar-links_logo">
          <a href="#link">
            <img src={logo} alt="logo" />
          </a>
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
          />
        ) : (
          <RiMenu3Line
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(true)}
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