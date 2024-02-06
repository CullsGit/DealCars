import React from "react";
import { Navbar, Hero } from "../components";

const Home = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Hero />
      </div>
    </div>
  );
};

export default Home;
