import { render } from "@testing-library/react";
import { describe, expect, vi, beforeEach, afterEach } from "vitest";
import AuthInitializer from "@/components/AuthInitializer";
import { InteractionStatus } from "@azure/msal-browser";

// Mocks para MSAL
const mockLoginRedirect = vi.fn();
const mockUseMsal = vi.fn(() => ({
  instance: {
    loginRedirect: mockLoginRedirect,
  },
  accounts: [],
  inProgress: InteractionStatus.Startup,
}));

vi.mock("@azure/msal-react", () => ({
  useMsal: mockUseMsal,
}));

// Mocks de console.log para verificar flujos
const mockConsoleLog = vi.spyOn(console, "log").mockImplementation(() => {});

describe("AuthInitializer Component", () => {
  afterEach(() => {
    vi.clearAllMocks();
  });

  // 1. Estado inicial (inProgress !== None)
  it("does nothing during auth interaction", () => {
    mockUseMsal.mockReturnValueOnce({
      instance: { loginRedirect: mockLoginRedirect },
      accounts: [],
      inProgress: InteractionStatus.HandleRedirect,
    });

    render(<AuthInitializer />);
    expect(mockLoginRedirect).not.toHaveBeenCalled();
    expect(mockConsoleLog).not.toHaveBeenCalled();
  });

  // 2. Sin sesión activa (inProgress: None + accounts vacío)
  it("triggers loginRedirect when no session exists", () => {
    mockUseMsal.mockReturnValueOnce({
      instance: { loginRedirect: mockLoginRedirect },
      accounts: [],
      inProgress: InteractionStatus.None,
    });

    render(<AuthInitializer />);
    expect(mockLoginRedirect).toHaveBeenCalledWith(loginRequest);
    expect(mockConsoleLog).toHaveBeenCalledWith(
      "🔐 No session. Redirecting to Azure login..."
    );
  });

  // 3. Sesión activa (inProgress: None + accounts lleno)
  it("logs session info when user is authenticated", () => {
    const mockAccount = { username: "test@example.com" };
    mockUseMsal.mockReturnValueOnce({
      instance: { loginRedirect: mockLoginRedirect },
      accounts: [mockAccount],
      inProgress: InteractionStatus.None,
    });

    render(<AuthInitializer />);
    expect(mockLoginRedirect).not.toHaveBeenCalled();
    expect(mockConsoleLog).toHaveBeenCalledWith(
      "✅ Session active:",
      mockAccount.username
    );
  });
});
