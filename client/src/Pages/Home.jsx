import React from "react";
import { Navbar, Hero, Electrified, Car } from "../components";

const Home = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Hero />
      </div>
      <Electrified />
    </div>
  );
};

export default Home;
