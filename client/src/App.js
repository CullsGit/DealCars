import React from "react";
import { CarRange, Footer } from "./containers";
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
        <CarRange />
        <Footer />
      </div>
    </>
  );
};

export default App;
