/** @jest-environment jsdom */

import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Wallet from "../src/modules/wallet/components/Wallet";
import { describe, expect, it } from "@jest/globals";

jest.mock("../src/modules/Wallet/useApi", () => ({
  useApi: () => ({
    folders: [{ name: "Test Folder" }, { name: "Test Folder" }],
    fetchFolders: jest.fn(),
  }),
}));

describe("Wallet Component", () => {
  it("renders folders", async () => {
    render(<Wallet />);

    const folderElements = await screen.getAllByText("Test Folder");
    expect(folderElements).toHaveLength(2);

    const folderNames = folderElements.map((folder) => folder.textContent);
    expect(folderNames).toContain("Test Folder");
  });

  it("renders 'Add Folder' button", async () => {
    render(<Wallet />);

    // Wait for the 'Add Folder' button to be rendered
    const addFolderButton = screen.getByText("+ Add folder");
    expect(addFolderButton).toBeInTheDocument();
  });
});