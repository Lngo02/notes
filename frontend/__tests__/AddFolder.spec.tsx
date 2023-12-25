/** @jest-environment jsdom */

import { render, screen, fireEvent } from "@testing-library/react";
import AddFolder from "../src/modules/wallet/components/AddFolder";
import "@testing-library/jest-dom/extend-expect";

describe("AddFolder component", () => {
  it("renders AddFolder component", () => {
    render(<AddFolder setIsAdded={jest.fn()} />);
    const addButton = screen.getByText("+ Add folder");
    expect(addButton).toBeInTheDocument();
  });

  it("expands the AddFolder component", () => {
    render(<AddFolder setIsAdded={jest.fn()} />);
    const title = screen.getByText("+ Add folder");
    const formContainer = screen.getByTestId("form-container");

    fireEvent.click(title);

    // After clicking: formContainer should be visible
    expect(formContainer).toBeVisible();
    const inputElement = screen.getByPlaceholderText("Folder name");
    expect(inputElement).toBeInTheDocument();
  });
});