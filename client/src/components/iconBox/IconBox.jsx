import React from "react";
import "./iconBox.css";

const IconBox = ({ header, text, icon, id }) => {
  return (
    <div className="dealcars__boxes-box" data-testid={`iconBox-${id}`}>
      <img src={icon} alt={header + " image"} />
      <h3>{header}</h3>
      <p>{text}</p>
    </div>
  );
};

export default IconBox;
