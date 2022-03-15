import React from "react";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { Error } from "../components";

describe("Error component", () => {
  test("Error text test", () => {
    const { getByText } = render(<Error>Children error</Error>);

    expect(getByText(/children error/i)).toBeInTheDocument();
  });
});
