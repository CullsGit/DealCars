import React from "react";
import { RiMenu3Line, RiCloseLin } from "react-icons/ri";
import "./navbar.css";
import logo from "../../assets/logo.png";

const Navbar = () => {
  return (
    <div className="dealcars__navbar">
      <div className="dealcars__navbar-links">
        <div className="dealcars__navbar-links_logo">
          <a href="#link">
            <img src={logo} alt="logo" />
          </a>
        </div>
        <div className="dealcars__navbar-links_container">
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
        </div>
      </div>
    </div>
  );
};

export default Navbar;
