import { renderHook, waitFor } from "@testing-library/react";
import {
  beforeEach,
  describe,
  expect,
  it,
  vi,
  type MockedFunction,
} from "vitest";
import useFetchUsers from "../../hooks/useFetchUsers";
import fetchUsers from "../../services/usersService";
import { useAppDispatch, useAppSelector } from "../../../../app/hooks";
import {
  fetchUsersFailure,
  fetchUsersStart,
  fetchUsersSuccess,
} from "../../slices/usersSlice";
import { mockUsers } from "../data/mockUsers";

// Mock from useAppSelector
vi.mock("../../services/usersService");
vi.mock("../../../../app/hooks");

describe("useFetchUsers hook", () => {
  beforeEach(() => {
    vi.clearAllMocks();

    // Mock de useAppSelector
    (
      useAppSelector as MockedFunction<typeof useAppSelector>
    ).mockImplementation((selector) =>
      selector({
        users: {
          users: mockUsers,
          loading: false,
          error: null,
        },
        auth: {
          user: null,
          loading: false,
          error: null,
        },
      })
    );

    // Mock de useAppDispatch
    const mockDispatch = vi.fn();
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

  it("should call fetchUsers on mount", async () => {
    (fetchUsers as MockedFunction<typeof fetchUsers>).mockResolvedValueOnce(
      mockUsers
    );

    const mockDispatch = vi.fn();
    (useAppDispatch as MockedFunction<typeof useAppDispatch>).mockReturnValue(
      mockDispatch
    );

    renderHook(() => useFetchUsers());

    await waitFor(() => {
      expect(mockDispatch).toHaveBeenCalledWith(fetchUsersStart());
      expect(fetchUsers).toHaveBeenCalledTimes(1);
    });
  });

  it("should dispatch success action when fetch succeeds", async () => {
    (fetchUsers as MockedFunction<typeof fetchUsers>).mockResolvedValueOnce(
      mockUsers
    );
    const mockDispatch = vi.fn();
    (useAppDispatch as MockedFunction<typeof useAppDispatch>).mockReturnValue(
      mockDispatch
    );

    renderHook(() => useFetchUsers());

    await waitFor(() => {
      expect(mockDispatch).toHaveBeenCalledWith(fetchUsersSuccess(mockUsers));
    });
  });

  it("should dispatch failure action when fetch fails", async () => {
    const errorMessage = "Network error";
    (fetchUsers as MockedFunction<typeof fetchUsers>).mockRejectedValueOnce(
      new Error(errorMessage)
    );
    const mockDispatch = vi.fn();
    (useAppDispatch as MockedFunction<typeof useAppDispatch>).mockReturnValue(
      mockDispatch
    );

    renderHook(() => useFetchUsers());

    await waitFor(() => {
      expect(mockDispatch).toHaveBeenCalledWith(
        fetchUsersFailure(errorMessage)
      );
    });
  });

  it("should handle unknown errors", async () => {
    (fetchUsers as MockedFunction<typeof fetchUsers>).mockRejectedValueOnce(
      "Unknown error"
    );
    const mockDispatch = vi.fn();
    (useAppDispatch as MockedFunction<typeof useAppDispatch>).mockReturnValue(
      mockDispatch
    );

    renderHook(() => useFetchUsers());

    await waitFor(() => {
      expect(mockDispatch).toHaveBeenCalledWith(
        fetchUsersFailure("An unknown error occurred")
      );
    });
  });

  it("should retry fetching when retry is called", async () => {
    (fetchUsers as MockedFunction<typeof fetchUsers>)
      .mockResolvedValueOnce([])
      .mockResolvedValueOnce(mockUsers);

    const mockDispatch = vi.fn();
    (useAppDispatch as MockedFunction<typeof useAppDispatch>).mockReturnValue(
      mockDispatch
    );

    const { result } = renderHook(() => useFetchUsers());

    await waitFor(() => {
      expect(fetchUsers).toHaveBeenCalledTimes(1);
    });

    await result.current.retry();

    await waitFor(() => {
      expect(fetchUsers).toHaveBeenCalledTimes(2);
      expect(mockDispatch).toHaveBeenCalledWith(fetchUsersSuccess(mockUsers));
    });
  });
});
