import React from "react";
import "./iconBox.css";

const IconBox = ({ header, text, icon }) => {
  return (
    <div className="dealcars__boxes-box">
      <img src={icon} alt={header + " image"} />
      <h3>{header}</h3>
      <p>{text}</p>
    </div>
  );
};

export default IconBox;
