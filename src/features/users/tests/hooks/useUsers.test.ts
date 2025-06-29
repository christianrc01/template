import { renderHook } from "@testing-library/react";
import {
  beforeEach,
  describe,
  expect,
  it,
  vi,
  type MockedFunction,
} from "vitest";
import useUsers from "@/features/users/hooks/useUsers";
import { useAppDispatch, useAppSelector } from "@/app/hooks";
import { fetchUsers, selectAllUsers } from "@/features/users/slices/usersSlice";
import { mockUsers } from "@/features/users/tests/data/mockUsers";

// Mock the hooks
vi.mock("@/app/hooks");
vi.mock("@/features/users/slices/usersSlice", async (importOriginal) => {
  const actual = await importOriginal();
  return {
    ...(actual as object),
    selectAllUsers: vi.fn(),
  };
});

describe("useUsers hook", () => {
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
    const { result } = renderHook(() => useUsers());

    expect(result.current).toEqual({
      users: mockUsers,
      loading: false,
      error: null,
      retry: expect.any(Function),
    });
  });

  it("should dispatch fetchUsers on mount", () => {
    renderHook(() => useUsers());

    expect(mockDispatch).toHaveBeenCalledWith(fetchUsers());
  });

  it("should retry fetching when retry is called", async () => {
    const { result } = renderHook(() => useUsers());

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

    const { result } = renderHook(() => useUsers());
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

    const { result } = renderHook(() => useUsers());
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

    const { result } = renderHook(() => useUsers());
    expect(result.current.users).toEqual([]);
    expect(result.current.loading).toBe(true);
  });
});
