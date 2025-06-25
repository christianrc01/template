import { vi, beforeEach, describe, expect, it, type Mock } from "vitest";
import { renderHook, act } from "@testing-library/react";
import { localStorageService } from "../../services/localStorageService";
import useLocalStorage from "../../hooks/useLocalStorage";

// Mock localStorage
vi.mock("../../services/localStorageService", () => ({
  localStorageService: {
    getItem: vi.fn(),
    setItem: vi.fn(),
    removeItem: vi.fn(),
    clear: vi.fn(),
  },
}));

describe("useLocalStorage hook", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("should use initial value when no value in localStorage", () => {
    (localStorageService.getItem as Mock).mockReturnValueOnce(null);

    const { result } = renderHook(() => useLocalStorage("testKey", "initial"));

    expect(result.current[0]).toBe("initial");
    expect(localStorageService.getItem).toHaveBeenCalledWith("testKey");
  });

  it("should retrieve existing value from localStorage", () => {
    (localStorageService.getItem as Mock).mockReturnValueOnce("storedValue");

    const { result } = renderHook(() => useLocalStorage("testKey", "initial"));

    expect(result.current[0]).toBe("storedValue");
  });

  it("should update localStorage when value changes", () => {
    const { result } = renderHook(() => useLocalStorage("testKey", "initial"));

    act(() => {
      result.current[1]("newValue");
    });

    expect(result.current[0]).toBe("newValue");
    expect(localStorageService.setItem).toHaveBeenCalledWith(
      "testKey",
      "newValue"
    );
  });

  it("should handle errors gracefully", () => {
    const consoleSpy = vi.spyOn(console, "error").mockImplementation(() => {});
    (localStorageService.setItem as Mock).mockImplementationOnce(() => {
      throw new Error("Storage failed");
    });

    const { result } = renderHook(() => useLocalStorage("errorKey", "initial"));

    act(() => {
      result.current[1]("shouldFail");
    });

    expect(consoleSpy).toHaveBeenCalled();
    expect(result.current[0]).toBe("shouldFail");

    consoleSpy.mockRestore();
  });
});
