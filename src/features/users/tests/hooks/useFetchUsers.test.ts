import { renderHook } from "@testing-library/react";
import {
  beforeEach,
  describe,
  expect,
  it,
  vi,
  type MockedFunction,
} from "vitest";
import useFetchUsers from "../../hooks/useFetchUsers";
import { useAppDispatch, useAppSelector } from "../../../../app/hooks";
import { fetchUsers, selectAllUsers } from "../../slices/usersSlice";
import { mockUsers } from "../data/mockUsers";

// Mock the hooks
vi.mock("../../../../app/hooks");
vi.mock("../../slices/usersSlice", async (importOriginal) => {
  const actual = await importOriginal();
  return {
    ...(actual as object),
    selectAllUsers: vi.fn(),
  };
});

describe("useFetchUsers hook", () => {
  const mockDispatch = vi.fn();

  beforeEach(() => {
    vi.clearAllMocks();

    // Mock useAppSelector for loading and error
    (
      useAppSelector as MockedFunction<typeof useAppSelector>
    ).mockImplementation((selector) => {
      // Handle the selector from the hook
      if (selector === selectAllUsers) {
        return mockUsers;
      }
      // Handle the state.users selector
      return {
        loading: false,
        error: null,
      };
    });

    // Mock selectAllUsers selector
    (
      selectAllUsers as MockedFunction<typeof selectAllUsers>
    ).mockImplementation(() => mockUsers);

    // Mock useAppDispatch
    (useAppDispatch as MockedFunction<typeof useAppDispatch>).mockReturnValue(
      mockDispatch
    );
  });

  it("should return users, loading, error and retry function", () => {
    const { result } = renderHook(() => useFetchUsers());

    expect(result.current).toEqual({
      users: mockUsers,
      loading: false,
      error: null,
      retry: expect.any(Function),
    });
  });

  it("should dispatch fetchUsers on mount", () => {
    renderHook(() => useFetchUsers());

    expect(mockDispatch).toHaveBeenCalledWith(fetchUsers());
  });

  it("should retry fetching when retry is called", async () => {
    const { result } = renderHook(() => useFetchUsers());

    // Clear initial call
    mockDispatch.mockClear();
    result.current.retry();

    expect(mockDispatch).toHaveBeenCalledWith(fetchUsers());
  });

  it("should return loading state when true", () => {
    (
      useAppSelector as MockedFunction<typeof useAppSelector>
    ).mockImplementation((selector) => {
      if (selector === selectAllUsers) {
        return mockUsers;
      }
      return {
        loading: true,
        error: null,
      };
    });

    const { result } = renderHook(() => useFetchUsers());
    expect(result.current.loading).toBe(true);
  });

  it("should return error state when present", () => {
    const errorMessage = "Network error";
    (
      useAppSelector as MockedFunction<typeof useAppSelector>
    ).mockImplementation((selector) => {
      if (selector === selectAllUsers) {
        return mockUsers;
      }
      return {
        loading: false,
        error: errorMessage,
      };
    });

    const { result } = renderHook(() => useFetchUsers());
    expect(result.current.error).toBe(errorMessage);
  });

  it("should return empty users array when loading", () => {
    (
      useAppSelector as MockedFunction<typeof useAppSelector>
    ).mockImplementation((selector) => {
      if (selector === selectAllUsers) {
        return [];
      }
      return {
        loading: true,
        error: null,
      };
    });

    const { result } = renderHook(() => useFetchUsers());
    expect(result.current.users).toEqual([]);
    expect(result.current.loading).toBe(true);
  });
});
