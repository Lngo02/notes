/** @jest-environment jsdom */

import { render } from "@testing-library/react";
import Nav from "../src/modules/wallet/components/Nav";
import { describe, expect, it } from "@jest/globals";
import "@testing-library/jest-dom/extend-expect";
import { screen } from "@testing-library/dom";

describe("Nav Component", () => {
  it("should render the Nav component", () => {
    render(<Nav />);

    // Check if the main navigation has the correct aria-label
    expect(screen.getByLabelText("Main Navigation")).toBeInTheDocument();

    // Check if the title "Notes" is rendered
    expect(screen.getByText("Notes")).toBeInTheDocument();

    // Check if the welcome message is rendered
    expect(screen.getByText("Welcome,")).toBeInTheDocument();

    // Check if the name "Sam Nixon" is rendered
    expect(screen.getByText("Sam Nixon.")).toBeInTheDocument();
  });
});