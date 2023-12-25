/** @jest-environment jsdom */

import Folder from "../src/modules/wallet/components/Folder";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

jest.mock("../src/modules/Wallet/useApi", () => ({
  useApi: () => ({
    folders: [{ name: "My Folder" }],
    notes: [
      { title: "Note 1", content: "Content 1" },
      { title: "Note 2", content: "Content 2" },
    ],
    fetchNotes: jest.fn(),
    updateNote: jest.fn(),
    deleteNote: jest.fn(),
  }),
}));

describe("Folder Component", () => {
  it("should render at least one Folder component with title prop", () => {
    render(<Folder title="My Folder" />);
    const folderTitleElement = screen.getByLabelText("Toggle My Folder folder");
    expect(folderTitleElement).toBeInTheDocument();
  });

  it("should include notes", async () => {
    render(<Folder title="My Folder" />);
    const folderTitleElement = screen.getByLabelText("Toggle My Folder folder");

    // Click on the folder title to open it
    fireEvent.click(folderTitleElement);

    // Wait for potential asynchronous updates
    await waitFor(() => {
      expect(screen.queryByText("Note 1")).toBeVisible();
      expect(screen.queryByText("Note 2")).toBeVisible();
    });
  });

  it("should increase height to show notes when the folder is open", async () => {
    render(<Folder title="My Folder" />);
    const folderTitleElement = screen.getByLabelText("Toggle My Folder folder");

    const folderElement = screen.getByLabelText("My Folder folder");
    expect(folderElement).toHaveStyle({ "max-height": "180px" });

    fireEvent.click(folderTitleElement);

    await waitFor(() => {
      expect(folderElement).not.toHaveStyle({ "max-height": "180px" }); // Adjust the maxHeight condition as needed
    });
  });
});