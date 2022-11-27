import React from "react";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { InputTextarea } from "../components";

describe("InputTextarea form test", () => {
  test("InputTextarea", () => {
    const { getByText, getByPlaceholderText } = render(
      <InputTextarea title="test title" type="text" placeholder="test" />
    );

    expect(getByText("test title")).toBeInTheDocument();
    expect(getByPlaceholderText(/test/i)).toBeInTheDocument();
  });
});
