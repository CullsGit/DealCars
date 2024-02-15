import React from "react";
import "@testing-library/jest-dom/extend-expect";

import { render } from "@testing-library/react";
import IconBox from "./IconBox";

describe("IconBox component", () => {
  const iconBoxData = {
    id: 1,
    header: "Pick Vehicle",
    text: "Whether you prioritize efficiency, space, or performance.",
    icon: "../../assets/pickicon.png",
  };

  test("renders iconBox component with correct content", () => {
    const { getByText, getByAltText } = render(
      <IconBox
        header={iconBoxData.header}
        text={iconBoxData.text}
        icon={iconBoxData.icon}
      />
    );

    expect(getByText("Pick Vehicle")).toBeInTheDocument();

    expect(
      getByText("Whether you prioritize efficiency, space, or performance.")
    ).toBeInTheDocument();

    expect(getByAltText(`Pick Vehicle image`)).toBeInTheDocument();
  });

  test("renders with correct CSS classes", () => {
    const { container } = render(
      <IconBox
        header={iconBoxData.header}
        text={iconBoxData.text}
        icon={iconBoxData.icon}
      />
    );

    expect(container.firstChild).toHaveClass("dealcars__boxes-box");

    expect(container.querySelector("img")).toBeInTheDocument();
  });
});
