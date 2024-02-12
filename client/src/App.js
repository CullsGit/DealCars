import React from "react";
import CarRange from "./containers/carRange/CarRange";
import { Navbar, Hero, Electrified } from "./components";

import "./App.css";

const App = () => {
  return (
    <>
      <div className="App">
        <div className="gradient__bg">
          <Navbar />
          <Hero />
        </div>
        <Electrified />
      </div>
    </>
  );
};

export default App;
