import LoadingSpinner from "@/shared/components/common/LoadingSpinner";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

describe("LoadingSpinner Component", () => {
  // 1. Basic rendering and accessibility attributes
  it("has proper accessibility attributes", () => {
    render(<LoadingSpinner />);

    const container = screen.getByRole("status");
    const spinner = screen.getByTestId("spinner");

    expect(container).toHaveAttribute("aria-label", "Loading...");
    expect(spinner).toHaveAttribute("aria-hidden", "true");
  });

  // 2. Key visual behavior
  it("applies animation classes", () => {
    render(<LoadingSpinner />);
    const spinner = screen.getByTestId("spinner");

    expect(spinner).toHaveClass("animate-spin"); // Tailwind's spin animation
    expect(spinner).toHaveClass("border-t-2");
  });

  // 3. Container structure
  it("centers the spinner vertically/horizontally", () => {
    render(<LoadingSpinner />);
    const container = screen.getByRole("status");

    expect(container).toHaveClass("grid"); // Tailwind grid centering
    expect(container).toHaveClass("place-items-center");
  });
});
