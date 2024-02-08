import React from "react";

import "./car.css";

const Car = ({ model, summary, image }) => {
  return (
    <div className="dealcars__cars-content gradient__bg">
      <div className="dealcars__cars-text">
        <h1 className="gradient__text">{model}</h1>
        <p>{summary}</p>
      </div>
      <div className="dealcars__cars-image">
        <img src={image} alt="viper" />
      </div>
    </div>
  );
};

export default Car;
