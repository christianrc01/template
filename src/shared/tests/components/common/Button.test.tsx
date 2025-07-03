import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Button from "@/shared/views/components/common/Button";

describe("Button Component", () => {
  it("renders children and defaults to 'primary' variant", () => {
    render(<Button>Save</Button>);
    const button = screen.getByRole("button", { name: "Save" });

    expect(button).toBeInTheDocument();
    expect(button).toHaveClass("k-button-primary");
  });

  it("applies correct classes for each variant", () => {
    const { rerender } = render(<Button variant="danger">Delete</Button>);
    const button = screen.getByRole("button", { name: "Delete" });

    expect(button).toHaveClass("k-button-danger");

    rerender(<Button variant="outline-white">Cancel</Button>);
    const updatedButton = screen.getByRole("button", { name: "Cancel" });

    expect(updatedButton).toHaveClass("k-button-outline-white");
  });

  it("merges custom classes without overriding variant class", () => {
    render(
      <Button variant="secondary" className="mt-4 custom-class">
        Submit
      </Button>
    );

    const button = screen.getByRole("button", { name: "Submit" });
    expect(button).toHaveClass("k-button-secondary");
    expect(button).toHaveClass("mt-4", "custom-class");
  });

  it("forwards HTML button props correctly", () => {
    render(
      <Button aria-label="Close" disabled type="submit">
        Close
      </Button>
    );

    const button = screen.getByRole("button", { name: "Close" });
    expect(button).toBeDisabled();
    expect(button).toHaveAttribute("aria-label", "Close");
    expect(button).toHaveAttribute("type", "submit");
  });
});
