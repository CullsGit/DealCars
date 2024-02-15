import React from "react";
import { render, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import CarRange from "./CarRange";
import carData from "../../data/cars.json";

describe("CarRange component", () => {
  test("renders car range component with correct title", () => {
    const { getByText } = render(<CarRange />);
    expect(getByText("Our Range")).toBeInTheDocument();
  });

  test("renders correct number of Car components with correct props", async () => {
    const { getAllByTestId } = render(<CarRange />);
    const carComponents = getAllByTestId(/car-\d+/);

    expect(carComponents.length).toBe(carData.length);

    await Promise.all(
      carData.map(async (car, index) => {
        const carComponent = carComponents[index];
        await waitFor(() => {
          expect(carComponent).toHaveTextContent(car.model);
          expect(carComponent).toHaveTextContent(car.description);
          expect(carComponent).toHaveClass(`${car.position}-facing`);
          expect(carComponent.querySelector("img")).toHaveAttribute(
            "src",
            car.image
          );
        });
      })
    );
  });
});
