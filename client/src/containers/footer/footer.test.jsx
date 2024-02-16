import React from "react";
import "@testing-library/jest-dom/extend-expect";

import { render } from "@testing-library/react";
import Footer from "./Footer";

describe("Footer component", () => {
  test("renders footer component with correct heading", () => {
    const { getByText, getAllByText } = render(<Footer />);
    expect(getByText("Stay in touch with the future")).toBeInTheDocument();
  });

  test("renders footer component with correct logo", () => {
    const { getByAltText } = render(<Footer />);
    expect(getByAltText("logo")).toBeInTheDocument();
  });

  test("renders footer component with correct address", () => {
    const { queryAllByText } = render(<Footer />);
    const addressElements = queryAllByText(
      "1234 Rainbow Avenue Sunshine City, CA 90210 United States"
    );

    expect(addressElements.length).toBe(2);
    expect(addressElements[0]).toBeInTheDocument();
  });

  test("renders footer component with correct links", () => {
    const { getByText } = render(<Footer />);
    expect(getByText("Social Media")).toBeInTheDocument();
    expect(getByText("Counters")).toBeInTheDocument();
    expect(getByText("Contact")).toBeInTheDocument();
  });

  test("renders footer component with correct company information", () => {
    const { getByText } = render(<Footer />);
    expect(getByText("Terms & Conditions")).toBeInTheDocument();
    expect(getByText("Privacy Policy")).toBeInTheDocument();
    expect(getByText("Contact")).toBeInTheDocument();
  });

  test("renders footer component with correct contact information", () => {
    const { getByText } = render(<Footer />);
    expect(getByText("085-124992")).toBeInTheDocument();
    expect(getByText("info@xta.net")).toBeInTheDocument();
  });

  test("renders footer component with correct copyright information", () => {
    const { getByText } = render(<Footer />);
    expect(
      getByText(
        "© 2024 XTA. All rights reserved. Unauthorized duplication or distribution is prohibited. XTA and the XTA logo are trademarks of XTA Inc. All other trademarks are the property of their respective owners."
      )
    ).toBeInTheDocument();
  });
});
