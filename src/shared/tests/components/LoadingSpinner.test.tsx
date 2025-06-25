import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { LoadingSpinner } from "../../components/common/LoadingSpinner";

describe("LoadingSpinner Component", () => {
  it("renders with proper accessibility attributes", () => {
    render(<LoadingSpinner />);

    const spinnerContainer = screen.getByRole("status");
    expect(spinnerContainer).toBeInTheDocument();
    expect(spinnerContainer).toHaveAttribute("aria-label", "Loading...");

    const visualSpinner = screen.getByLabelText("Loading...").firstChild;
    expect(visualSpinner).toHaveAttribute("aria-hidden", "true");
  });

  it("has correct animation classes", () => {
    render(<LoadingSpinner />);
    const spinner = screen.getByLabelText("Loading...").firstChild;
    expect(spinner).toHaveClass("animate-spin");
  });

  it("has the correct container classes", () => {
    const { container } = render(<LoadingSpinner />);
    const spinnerContainer = container.firstChild;

    expect(spinnerContainer).toHaveClass("grid");
    expect(spinnerContainer).toHaveClass("place-items-center");
    expect(spinnerContainer).toHaveClass("h-64");
  });

  it("displays a spinner with proper animation and styling", () => {
    render(<LoadingSpinner />);
    const spinner = screen.getByRole("status").firstChild;

    expect(spinner).toHaveClass("animate-spin");
    expect(spinner).toHaveClass("rounded-full");
    expect(spinner).toHaveClass("h-12");
    expect(spinner).toHaveClass("w-12");
    expect(spinner).toHaveClass("border-t-2");
    expect(spinner).toHaveClass("border-b-2");
    expect(spinner).toHaveClass("border-blue-500");
  });

  it("has aria-role for accessibility", () => {
    render(<LoadingSpinner />);
    expect(screen.getByRole("status")).toBeInTheDocument();
  });

  it("matches snapshot", () => {
    const { asFragment } = render(<LoadingSpinner />);
    expect(asFragment()).toMatchSnapshot();
  });
});
