import React from "react";
import "@testing-library/jest-dom/extend-expect";

import { render, fireEvent } from "@testing-library/react";
import Navbar from "./Navbar";

describe("Navbar component", () => {
  test("renders logo and menu links", () => {
    const { getByAltText, getByText } = render(<Navbar />);

    expect(getByAltText("logo")).toBeInTheDocument();

    expect(getByText("Our Range")).toBeInTheDocument();
    expect(getByText("Drive Away")).toBeInTheDocument();
    expect(getByText("Contact")).toBeInTheDocument();
  });

  test("toggles menu when menu icon is clicked", () => {
    const { getByTestId } = render(<Navbar />);
    const openIcon = getByTestId("open-icon");

    expect(
      document.querySelector(".dealcars__navbar-menu_container")
    ).toBeNull();

    fireEvent.click(openIcon);

    expect(
      document.querySelector(".dealcars__navbar-menu_container")
    ).toBeInTheDocument();

    const closeIcon = getByTestId("close-icon");

    fireEvent.click(closeIcon);

    expect(
      document.querySelector(".dealcars__navbar-menu_container")
    ).toBeNull();
  });
});
