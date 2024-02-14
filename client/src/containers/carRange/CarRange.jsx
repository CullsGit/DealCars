import React from "react";
import carData from "../../data/cars.json";
import { Car } from "../../components";
import "./carRange.css";

const CarRange = () => {
  return (
    <div className="gradient__bg">
      <div className="dealcars__cars-title" id="our-range">
        <h1 className="gradient__text">Our Range</h1>
      </div>
      <div className="dealcars__cars-list">
        {carData.map((car) => (
          <Car
            model={car.model}
            description={car.description}
            image={car.image}
            position={car.position}
          />
        ))}
      </div>
    </div>
  );
};

export default CarRange;
