import React from "react";
import "@testing-library/jest-dom/extend-expect";

import { render } from "@testing-library/react";
import Car from "./Car";

describe("Car component", () => {
  const carData = {
    id: 1,
    model: "Helix",
    description:
      "Introducing the Helix, a groundbreaking fusion of futuristic design.",
    image: "../../assets/helix.png",
    position: "right",
  };

  test("renders car component with correct content", () => {
    const { getByText, getByAltText } = render(
      <Car
        model={carData.model}
        description={carData.description}
        image={carData.image}
        position={carData.position}
      />
    );

    expect(getByText("Helix")).toBeInTheDocument();

    expect(
      getByText(
        "Introducing the Helix, a groundbreaking fusion of futuristic design."
      )
    ).toBeInTheDocument();

    expect(getByAltText("Helix")).toBeInTheDocument();
  });

  test("renders with correct CSS classes", () => {
    const { container } = render(
      <Car
        model={carData.model}
        description={carData.description}
        image={carData.image}
        position={carData.position}
      />
    );

    expect(container.firstChild).toHaveClass(
      "dealcars__cars-content",
      "gradient__bg",
      "right-facing"
    );

    expect(container.querySelector(".dealcars__cars-text")).toBeInTheDocument();

    expect(
      container.querySelector(".dealcars__cars-image")
    ).toBeInTheDocument();
  });
});
