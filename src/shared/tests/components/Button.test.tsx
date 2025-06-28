import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Button from "../../components/common/Button";

describe("Button Component", () => {
  // Test 1: Render Button with default props
  it("renders children correctly", () => {
    render(<Button>Click me</Button>);
    expect(screen.getByText("Click me")).toBeInTheDocument();
  });

  // Test 2: Base class application
  it("applies base classes", () => {
    render(<Button />);
    const button = screen.getByRole("button");
    expect(button).toHaveClass(
      "px-4 py-2 rounded transition-colors font-medium"
    );
  });


  // Test 4: Additional classes
  it("merges custom classes correctly", () => {
    render(<Button className="custom-class" />);
    const button = screen.getByRole("button");
    expect(button).toHaveClass("custom-class");
    expect(button).toHaveClass("px-4 py-2"); // Verify base classes are still applied
  });

  // Test 5: Additional props
  it("passes additional props to button element", () => {
    render(<Button data-testid="special-button" disabled />);
    const button = screen.getByTestId("special-button");
    expect(button).toBeDisabled();
  });
});
