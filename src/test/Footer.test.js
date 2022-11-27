import React from "react";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { Footer } from "../components";

describe("Footer component", () => {
  test("Footer text test", () => {
    const { getByText, getByAltText } = render(<Footer />);

    expect(getByAltText(/footer/i)).toBeInTheDocument();
  });
});
