import React from "react";
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import { Button } from "../components";

describe("Button test", () => {
  test("button click", () => {
    const onModal = jest.fn();

    const { getByRole, getByText } = render(
      <Button text="testBtn" onModal={onModal} />
    );

    const btn = getByRole("button");

    fireEvent.click(btn);

    expect(getByText("testBtn")).toBeInTheDocument();
  });
});
