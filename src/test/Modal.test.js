import React from "react";
import "@testing-library/jest-dom";
import { render, fireEvent, screen } from "@testing-library/react";
import { Modal } from "../components";
import { BrowserRouter } from "react-router-dom";
import { act } from "react-dom/test-utils";
import { Provider } from "react-redux";
import store from "../redux/store";

describe("Modal test", () => {
  test("Modal Content", () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Modal modalState={true}>For Testing</Modal>
        </BrowserRouter>
      </Provider>
    );

    expect(screen.getByText("For Testing")).toBeInTheDocument();
    expect(screen.getByTestId("modal")).toBeInTheDocument();
    const cancelBtn = screen.getByTestId("modal-cancelBtn");

    expect(cancelBtn).toBeInTheDocument();

    expect(document.body.style.overflow).toBe("hidden");
  });

  test("Modal content doesnt exist", () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Modal modalState={false}>For Testing</Modal>
        </BrowserRouter>
      </Provider>
    );

    expect(document.body.style.overflow).toBe("unset");
  });
});
