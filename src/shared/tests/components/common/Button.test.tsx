import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Button from "@/shared/components/common/Button";

describe("Button Component", () => {
  // 1. Basic rendering and children
  it("renders children and defaults to 'primary' variant", () => {
    render(<Button>Save</Button>);
    const button = screen.getByRole("button", { name: "Save" });

    expect(button).toBeInTheDocument();
    expect(button).toHaveClass("bg-blue-500");
  });

  // 2. Variant behavior
  it("applies correct classes for each variant", () => {
    const { rerender } = render(<Button variant="danger">Delete</Button>);
    const button = screen.getByRole("button");

    expect(button).toHaveClass("bg-red-600");

    rerender(<Button variant="outline-white">Cancel</Button>);
    expect(button).toHaveClass("border", "border-white");
  });

  // 3. Customization with className
  it("merges custom classes without overriding base/variant classes", () => {
    render(
      <Button variant="secondary" className="mt-4 disabled:opacity-50">
        Submit
      </Button>
    );

    const button = screen.getByRole("button");
    expect(button).toHaveClass("mt-4", "disabled:opacity-50"); // Custom
    expect(button).toHaveClass("bg-gray-500"); // Variant
    expect(button).toHaveClass("px-4 py-2"); // Base
  });

  // 4. Passing props to the native button element
  it("forwards HTML button props correctly", () => {
    render(
      <Button
        aria-label="Close"
        disabled
        onClick={() => console.log("Clicked")}
      />
    );

    const button = screen.getByRole("button");
    expect(button).toBeDisabled();
    expect(button).toHaveAttribute("aria-label", "Close");
  });
});
