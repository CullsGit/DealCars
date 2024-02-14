import React from "react";
import "@testing-library/jest-dom/extend-expect";

import { render } from "@testing-library/react";
import Hero from "./Hero";

describe("Hero component", () => {
  test("renders hero component with correct content", () => {
    const { getByText, getByAltText } = render(<Hero />);

    expect(
      getByText("Introducing the Future of Driving Excellence")
    ).toBeInTheDocument();

    expect(
      getByText("Explore the Panther GZ: A Symphony of Innovation and Style")
    ).toBeInTheDocument();

    expect(getByAltText("panther")).toBeInTheDocument();
  });

  test("renders with correct CSS classes", () => {
    const { container } = render(<Hero />);

    expect(container.firstChild).toHaveClass(
      "dealcars__header",
      "section__padding"
    );

    expect(
      container.querySelector(".dealcars__header-content")
    ).toBeInTheDocument();

    expect(
      container.querySelector(".dealcars__header-image")
    ).toBeInTheDocument();
    expect(container.querySelector(".dealcars__header-image")).toHaveClass(
      "car__circle"
    );
  });
});
