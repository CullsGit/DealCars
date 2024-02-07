import React from "react";
import "./hero.css";
import panther from "../../assets/panther.png";

const Hero = () => {
  return (
    <div className="dealcars__header section__padding">
      <div className="dealcars__header-content">
        <h1 className="gradient__text">
          Introducing the Future of Driving Excellence
        </h1>
        <p>Explore the Panther GZ: A Symphony of Innovation and Style</p>
      </div>
      <div className="dealcars__header-image car__circle">
        <img src={panther} alt="panther" />
      </div>
    </div>
  );
};

export default Hero;
