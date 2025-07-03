import { render, cleanup } from "@testing-library/react";
import { describe, expect, it, vi, afterEach, beforeEach } from "vitest";
import AccessiBe from "@/shared/components/AccessiBe";

const mockAppendChild = vi.fn();
const mockRemoveChild = vi.fn();
const mockInit = vi.fn();

vi.stubGlobal("acsbJS", { init: mockInit });

beforeEach(() => {
  global.document.head.appendChild = mockAppendChild;
  global.document.head.removeChild = mockRemoveChild;
});

afterEach(() => {
  cleanup();
  vi.clearAllMocks();
});

describe("AccessiBe Component", () => {
  // 1. The script in development is not loading
  it("does nothing in development mode", () => {
    import.meta.env.MODE = "development";
    render(<AccessiBe />);

    expect(mockAppendChild).not.toHaveBeenCalled();
  });

  // 2. Load the script into production
  describe("in production mode", () => {
    beforeEach(() => {
      import.meta.env.MODE = "production";
    });

    it("loads the script with correct attributes", () => {
      render(<AccessiBe />);

      expect(mockAppendChild).toHaveBeenCalledTimes(1);
      const script = mockAppendChild.mock.calls[0][0];

      expect(script.src).toBe("https://acsbapp.com/apps/app/dist/js/app.js");
      expect(script.async).toBe(true);
    });

    it("initializes acsbJS on script load", () => {
      render(<AccessiBe />);
      const script = mockAppendChild.mock.calls[0][0];

      // Simulate the onload event
      script.onload();

      expect(mockInit).toHaveBeenCalledWith({
        language: "es",
        position: "right",
        triggerIcon: "people",
        triggerColor: "#146FF8",
        leadColor: "#146FF8",
        triggerSize: "bottom",
        triggerOffsetX: 20,
        triggerOffsetY: 20,
        triggerRadius: "50%",
      });
    });

    it("cleans up script on unmount", () => {
      const { unmount } = render(<AccessiBe />);
      const script = mockAppendChild.mock.calls[0][0];

      unmount();
      expect(mockRemoveChild).toHaveBeenCalledWith(script);
    });
  });
});
