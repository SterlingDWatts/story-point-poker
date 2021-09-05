import React from "react";
import { render, screen } from "@testing-library/react";
import Button from "./Button";

describe("Button Component", () => {
  it("renders the label passed in", () => {
    render(<Button label="SUBMIT" type="contained" color="blue" />);
    const button = screen.getByText("SUBMIT");
    expect(button).toBeInTheDocument();
  });
});
