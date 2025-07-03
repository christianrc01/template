import LoadingSpinner from "@/shared/views/components/common/LoadingSpinner";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

describe("LoadingSpinner Component", () => {
  // 1. Basic rendering and accessibility attributes
  it("has proper accessibility attributes", () => {
    render(<LoadingSpinner />);

    const container = screen.getByRole("status");
    const spinnerContainer = screen.getByTestId("spinner");

    expect(container).toHaveAttribute("aria-label", "Loading...");
    expect(spinnerContainer).toBeInTheDocument();
  });

  // 2. Since animation and border classes are handled internally by Kendo Loader,

  it("renders the loader container", () => {
    render(<LoadingSpinner />);
    const spinner = screen.getByTestId("spinner");
    expect(spinner).toBeInTheDocument();
  });

  // 3. Container structure
  it("centers the spinner vertically/horizontally", () => {
    render(<LoadingSpinner />);
    const container = screen.getByRole("status");

    expect(container).toHaveClass("grid"); // Tailwind grid centering
    expect(container).toHaveClass("place-items-center");
    expect(container).toHaveClass("h-64");
  });
});
