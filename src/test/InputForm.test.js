import React from "react";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { InputForm } from "../components";

describe("Input form test", () => {
  test("Input", () => {
    const { getByText, getByPlaceholderText } = render(
      <InputForm title="test title" type="text" placeholder="test" />
    );

    expect(getByText("test title")).toBeInTheDocument();
    expect(getByPlaceholderText(/test/i)).toBeInTheDocument();
  });
});
