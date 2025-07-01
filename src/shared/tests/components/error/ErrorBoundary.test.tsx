import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi, beforeEach } from "vitest";
import { appInsights } from "@/lib/utils/appInsights";
import { ErrorBoundary } from "@/shared/components/error/ErrorBoundary";
import ErrorFallback from "@/shared/components/error/ErrorFallback";

// Mocks
vi.mock("@/shared/components/error/ErrorFallback", () => ({
  default: vi.fn(() => <div>Mocked ErrorFallback</div>),
}));

vi.mock("@/lib/utils/appInsights", () => ({
  appInsights: {
    trackException: vi.fn(),
  },
}));

const mockConsoleError = vi
  .spyOn(console, "error")
  .mockImplementation(() => {});

describe("ErrorBoundary Component", () => {
  const ThrowError = () => {
    throw new Error("Test Error");
  };

  beforeEach(() => {
    vi.clearAllMocks();
  });

  // 1. Normal rendering
  it("renders children when no error occurs", () => {
    render(
      <ErrorBoundary>
        <div>Safe Content</div>
      </ErrorBoundary>
    );
    expect(screen.getByText("Safe Content")).toBeInTheDocument();
    expect(ErrorFallback).not.toHaveBeenCalled();
  });

  // 2. Error capture
  it("displays ErrorFallback when child throws", () => {
    render(
      <ErrorBoundary>
        <ThrowError />
      </ErrorBoundary>
    );

    expect(ErrorFallback).toHaveBeenCalled();
    expect(screen.getByText("Mocked ErrorFallback")).toBeInTheDocument();
  });

  // 3. Exception tracking
  it("logs error to AppInsights and console", () => {
    const testError = new Error("Test Error");

    render(
      <ErrorBoundary>
        <ThrowError />
      </ErrorBoundary>
    );

    // Verify that AppInsights was called
    expect(appInsights.trackException).toHaveBeenCalledWith({
      exception: testError,
      properties: { componentStack: expect.any(String) },
    });

    // Check console.error
    expect(mockConsoleError).toHaveBeenCalledWith(
      "❌ ErrorBoundary caught:",
      testError,
      expect.objectContaining({ componentStack: expect.any(String) })
    );
  });
});
