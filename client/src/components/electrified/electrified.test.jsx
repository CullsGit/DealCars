import React from "react";
import "@testing-library/jest-dom/extend-expect";

import { render } from "@testing-library/react";
import Electrified from "./Electrified";

describe("Electrified component", () => {
  test("renders electrified section with correct content", () => {
    const { getByText, getByAltText } = render(<Electrified />);

    expect(getByText("Everything Electrified")).toBeInTheDocument();

    expect(
      getByText("Our cars are all 100% powered by electricity.")
    ).toBeInTheDocument();

    expect(getByText("View our Range")).toBeInTheDocument();

    expect(getByAltText("electric image")).toBeInTheDocument();
  });

  test("renders with correct CSS classes", () => {
    const { container } = render(<Electrified />);

    expect(container.firstChild).toHaveClass("dealcars__electrified");

    expect(
      container.querySelector(".dealcars__electrified-image")
    ).toBeInTheDocument();

    expect(
      container.querySelector(".dealcars__electrified-content")
    ).toBeInTheDocument();
  });
});
