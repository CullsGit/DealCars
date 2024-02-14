import React from "react";
import "./electrified.css";
import ev from "../../assets/ev.png";

const Electrified = () => {
  return (
    <div className="dealcars__electrified section__padding">
      <div className="dealcars__electrified-image">
        <img src={ev} alt="electric image" />
      </div>
      <div className="dealcars__electrified-content">
        <h1>Everything Electrified</h1>
        <p>Our cars are all 100% powered by electricity.</p>
        <button>
          <a href="#our-range">View our Range</a>
        </button>
      </div>
    </div>
  );
};

export default Electrified;
