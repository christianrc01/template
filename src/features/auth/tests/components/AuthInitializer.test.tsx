import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi, beforeEach, type Mock } from "vitest";
import AuthInitializer from "@/features/auth/components/AuthInitializer";
import { useMsal } from "@azure/msal-react";
import { InteractionStatus } from "@azure/msal-browser";

vi.mock("@azure/msal-react", () => ({
  useMsal: vi.fn(),
}));

vi.mock("@/shared/components/common/LoadingSpinner", () => ({
  default: () => <div>Loading...</div>,
}));

vi.mock("react-router-dom", () => ({
  RouterProvider: () => <div>Router Provider</div>,
  createBrowserRouter: vi.fn(),
}));

const mockConsoleLog = vi.spyOn(console, "log").mockImplementation(() => {});

describe("AuthInitializer Component", () => {
  const mockInstance = {
    loginRedirect: vi.fn().mockResolvedValue(undefined),
  };

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("should show loading spinner when initializing", () => {
    (useMsal as Mock).mockReturnValue({
      instance: mockInstance,
      accounts: [],
      inProgress: InteractionStatus.Startup,
    });

    render(<AuthInitializer />);
    expect(screen.getByText("Loading...")).toBeInTheDocument();
    expect(mockInstance.loginRedirect).not.toHaveBeenCalled();
  });

  it("should initialize when interaction is none and show active session", async () => {
    (useMsal as Mock).mockReturnValue({
      instance: mockInstance,
      accounts: [{ username: "test@example.com" }],
      inProgress: InteractionStatus.None,
    });

    render(<AuthInitializer />);

    expect(mockConsoleLog).toHaveBeenCalledWith(
      "✅ Session active:",
      "test@example.com"
    );
    expect(mockInstance.loginRedirect).not.toHaveBeenCalled();
    expect(screen.getByText("Router Provider")).toBeInTheDocument();
  });

  it("should redirect to login when no session exists", async () => {
    (useMsal as Mock).mockReturnValue({
      instance: mockInstance,
      accounts: [],
      inProgress: InteractionStatus.None,
    });

    render(<AuthInitializer />);

    expect(mockConsoleLog).toHaveBeenCalledWith(
      "🔐 No session. Redirecting to Azure login..."
    );
    expect(mockInstance.loginRedirect).toHaveBeenCalledWith({
      scopes: ["openid", "profile", "User.Read"],
    });
  });

  it("should not initialize when MSAL is still processing", () => {
    (useMsal as Mock).mockReturnValue({
      instance: mockInstance,
      accounts: [],
      inProgress: InteractionStatus.Login,
    });

    render(<AuthInitializer />);

    expect(mockConsoleLog).not.toHaveBeenCalled();
    expect(mockInstance.loginRedirect).not.toHaveBeenCalled();
    expect(screen.getByText("Loading...")).toBeInTheDocument();
  });

  it("should handle multiple accounts scenario by using the first one", async () => {
    (useMsal as Mock).mockReturnValue({
      instance: mockInstance,
      accounts: [
        { username: "test1@example.com" },
        { username: "test2@example.com" },
      ],
      inProgress: InteractionStatus.None,
    });

    render(<AuthInitializer />);

    expect(mockConsoleLog).toHaveBeenCalledWith(
      "✅ Session active:",
      "test1@example.com"
    );
    expect(mockInstance.loginRedirect).not.toHaveBeenCalled();
    expect(screen.getByText("Router Provider")).toBeInTheDocument();
  });
});
