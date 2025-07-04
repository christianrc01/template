import { renderHook, act } from "@testing-library/react";
import {
  beforeEach,
  describe,
  expect,
  it,
  vi,
  type MockedFunction,
} from "vitest";
import useUsers from "@/features/users/hooks/useUsers";
import { usersController } from "@/features/users/controllers/usersController";
import { mockUsers } from "@/features/users/tests/mocks/mockUsers";

// Mock del usersController
vi.mock("@/features/users/controllers/usersController", () => ({
  usersController: {
    getState: vi.fn(),
    subscribe: vi.fn(),
    loadUsers: vi.fn(),
    loadCurrentUser: vi.fn(),
    refresh: vi.fn(),
  },
}));

describe("useUsers Hook", () => {
  beforeEach(() => {
    // Reset mocks before each test
    vi.clearAllMocks();

    // Initial mock configuration
    (
      usersController.getState as MockedFunction<
        typeof usersController.getState
      >
    ).mockReturnValue({
      users: [],
      currentUser: null,
      loading: false,
      error: null,
    });

    (
      usersController.subscribe as MockedFunction<
        typeof usersController.subscribe
      >
    ).mockImplementation((callback) => {
      mockCallback = callback;
      return () => {}; // Mock de unsubscribe
    });
  });

  let mockCallback: (() => void) | null = null;

  // 1. Initial status test
  it("should return initial state", () => {
    const { result } = renderHook(() => useUsers());

    expect(result.current).toEqual({
      users: [],
      currentUser: null,
      loading: false,
      error: null,
      refetch: expect.any(Function),
    });
  });

  // 2. Initial load test
  it("should call loadUsers when empty and not loading", () => {
    renderHook(() => useUsers());
    expect(usersController.loadUsers).toHaveBeenCalledTimes(1);
  });

  // 3. Status update test
  it("should update state when controller notifies changes", () => {
    (
      usersController.getState as MockedFunction<
        typeof usersController.getState
      >
    )
      .mockReturnValueOnce({
        users: [],
        currentUser: null,
        loading: false,
        error: null,
      })
      .mockReturnValueOnce({
        users: mockUsers,
        currentUser: mockUsers[0],
        loading: false,
        error: null,
      });

    const { result } = renderHook(() => useUsers());

    act(() => {
      if (mockCallback) mockCallback();
    });

    expect(result.current.users).toEqual(mockUsers);
    expect(result.current.currentUser).toEqual(mockUsers[0]);
  });

  // 4. Methods test
  it("should expose controller methods", () => {
    const { result } = renderHook(() => useUsers());

    // Test de refetch
    act(() => {
      result.current.refetch();
    });
    expect(usersController.refresh).toHaveBeenCalledTimes(1);
  });

  it("should call loadCurrentUser when userId is provided", () => {
    renderHook(() => useUsers(1));
    expect(usersController.loadCurrentUser).toHaveBeenCalledWith(1);
  });

  // 5. Cleanliness test
  it("should unsubscribe on unmount", () => {
    const mockUnsubscribe = vi.fn();
    (
      usersController.subscribe as MockedFunction<
        typeof usersController.subscribe
      >
    ).mockReturnValue(mockUnsubscribe);

    const { unmount } = renderHook(() => useUsers());
    unmount();

    expect(mockUnsubscribe).toHaveBeenCalledTimes(1);
  });

  // 6. Error handling test
  it("should handle error state", () => {
    const error = new Error("Failed to load");
    (
      usersController.getState as MockedFunction<
        typeof usersController.getState
      >
    )
      .mockReturnValueOnce({
        users: [],
        currentUser: null,
        loading: false,
        error: null,
      })
      .mockReturnValueOnce({
        users: [],
        currentUser: null,
        loading: false,
        error: error,
      });

    const { result } = renderHook(() => useUsers());

    act(() => {
      if (mockCallback) mockCallback();
    });

    expect(result.current.error).toBe(error);
  });
});
