import React from "react";
import boxData from "../../data/boxData.json";
import { IconBox } from "../../components";
import "./getStarted.css";

const getStarted = () => {
  return (
    <div className="dealcars__own-content" id="drive-away">
      <div className="dealcars__own-content_header">
        <h1>Step into tomorrow today</h1>
        <h4>Drive home with a piece of the future</h4>
      </div>
      <div className="dealcars__own-boxes">
        {boxData.map((box) => (
          <IconBox
            key={box.id}
            header={box.header}
            text={box.text}
            icon={box.icon}
            id={box.id}
          />
        ))}
      </div>
    </div>
  );
};

export default getStarted;
