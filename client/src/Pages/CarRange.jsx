import React from "react";
import carData from "../data/cars.json";
import { Car } from "../components";

const CarRange = () => {
  return (
    <div className="gradient__bg">
      <h1>Our range</h1>
      <div className="dealcars__cars-list">
        {carData.map((car) => (
          <Car
            model={car.model}
            description={car.description}
            image={car.image}
          />
        ))}
      </div>
    </div>
  );
};

export default CarRange;
