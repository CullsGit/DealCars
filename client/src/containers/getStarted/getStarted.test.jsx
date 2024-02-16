import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import GetStarted from "./GetStarted";
import boxData from "../../data/boxData.json";

describe("GetStarted component", () => {
  test("renders getStarted component with correct heading", () => {
    const { getByText } = render(<GetStarted />);
    expect(getByText("Step into tomorrow today")).toBeInTheDocument();
    expect(
      getByText("Drive home with a piece of the future")
    ).toBeInTheDocument();
  });

  test("renders correct number of IconBox components with correct props", () => {
    const { getAllByTestId } = render(<GetStarted />);
    const iconBoxComponents = getAllByTestId(/iconBox-\d+/);

    expect(iconBoxComponents.length).toBe(boxData.length);

    boxData.forEach((box, index) => {
      expect(iconBoxComponents[index]).toHaveTextContent(box.header);
      expect(iconBoxComponents[index]).toHaveTextContent(box.text);
      expect(iconBoxComponents[index].querySelector("img")).toHaveAttribute(
        "src",
        box.icon
      );
    });
  });
});
