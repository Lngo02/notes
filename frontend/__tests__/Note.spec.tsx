/** @jest-environment jsdom */

import { render, screen, fireEvent } from "@testing-library/react";
import Note from "../src/modules/wallet/components/Note";
import "@testing-library/jest-dom/extend-expect";
import React from "react";

describe("Note Component", () => {
  const props = {
    folder: "Test Folder",
    noteTitle: "Test Note",
    noteBody: "This is a test note.",
    openNote: false,
    setOpenNote: jest.fn(),
    noteHeight: 100,
    setNoteHeight: jest.fn(),
  };

  it("should render the note with truncated text when not open", () => {
    render(<Note {...props} />);
    const truncatedText = `${props.noteBody.slice(0, 100)}...`;
    const textArea = screen.getByText(truncatedText);
    expect(textArea).toBeInTheDocument();
  });

  it("should render the full note text when open", () => {
    const openNoteProps = { ...props, openNote: true };
    render(<Note {...openNoteProps} />);
    const fullText = screen.getByText(openNoteProps.noteBody);
    expect(fullText).toBeInTheDocument();
  });

  it("should toggle the note's open state when clicked", () => {
    render(<Note {...props} />);
    const card = screen.getByTestId("note");
    fireEvent.click(card);
    expect(props.setOpenNote).toHaveBeenCalledTimes(1);
    expect(props.setOpenNote).toHaveBeenCalledWith(true);
  });

  it("should update the note height when open state changes", () => {
    const mockRef = { current: { scrollHeight: 200 } };
    const openNoteProps = {
      ...props,
      openNote: true,
    };
    jest.spyOn(React, "useRef").mockReturnValueOnce(mockRef);
    render(<Note {...openNoteProps} />);

    // Rest of the test case...
  });
});