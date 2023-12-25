/** @jest-environment jsdom */

import { render, fireEvent, screen } from "@testing-library/react";
import AddNote from "../src/modules/wallet/components/AddNote";
import "@testing-library/jest-dom/extend-expect";

// Mock useApi hook
jest.mock("../src/modules/Wallet/useApi", () => ({
  useApi: () => ({
    createNote: jest.fn(),
  }),
}));

describe("AddNote", () => {
  let props: any;

  beforeEach(() => {
    // Define mock props once
    props = {
      openNewNote: true,
      setOpenNewNote: jest.fn(),
      newNoteHeight: 40,
      setNewNoteHeight: jest.fn(),
      folder: "testFolder",
      newNote: false,
      setNewNote: jest.fn(),
    };
  });

  it("should render the component properly", () => {
    render(<AddNote {...props} />);
    expect(screen.getByText("+ Add note")).toBeInTheDocument();
  });

  it("should expand the form when openNewNote is true", async () => {
    render(<AddNote {...props} />);
    const title = screen.getByText("+ Add note");
    fireEvent.click(title);

    const formContainer = screen.getByTestId("form-container");
    expect(formContainer).toBeVisible();
    const inputElement = screen.getByPlaceholderText("Note title...");
    expect(inputElement).toBeInTheDocument();
  });
});