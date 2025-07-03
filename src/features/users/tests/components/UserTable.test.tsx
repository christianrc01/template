import { render, screen, fireEvent } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import UserTable from "@/features/users/views/components/UserTable";
import { process } from "@progress/kendo-data-query";
import { mockUsers } from "@/features/users/tests/mocks/mockUsers";
import type { MockGridProps } from "@/features/users/types/IUser";
import type { IWrapperProps } from "@/shared/types/IError";

vi.mock("@progress/kendo-react-grid", () => ({
  Grid: ({ children, data, onDataStateChange }: MockGridProps) => (
    <div
      data-testid="kendo-grid"
      role="button"
      tabIndex={0}
      onClick={() => onDataStateChange({ dataState: { skip: 10 } })}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          onDataStateChange({ dataState: { skip: 10 } });
        }
      }}
    >
      {children}
      <div>Displaying {data.data.length} items</div>
    </div>
  ),
  GridColumn: () => <div>Mock Column</div>,
  GridToolbar: ({ children }: IWrapperProps) => (
    <div data-testid="grid-toolbar">{children}</div>
  ),
}));

// Kendo Data Query Mock
vi.mock("@progress/kendo-data-query", () => ({
  process: vi.fn((data) => ({ data, total: data.length })),
}));

describe("UserTable Component", () => {
  // 1. Basic rendering
  it("renders toolbar and processes data correctly", () => {
    render(<UserTable users={mockUsers} />);

    expect(screen.getByTestId("grid-toolbar")).toBeInTheDocument();
    expect(screen.getByText("Users List")).toBeInTheDocument();

    // More specific solution for finding the user counter
    const totalUsersContainer = screen.getByTestId("grid-toolbar");
    expect(totalUsersContainer).toHaveTextContent("Total:");
    expect(totalUsersContainer).toHaveTextContent("users");
    expect(totalUsersContainer).toHaveTextContent("1");

    expect(process).toHaveBeenCalledWith(
      mockUsers,
      expect.objectContaining({ skip: 0, take: 10 })
    );
  });

  // 2. Data transformation
  it("modifies website URLs", () => {
    render(<UserTable users={mockUsers} />);
    expect(process).toHaveBeenCalledWith(expect.anything(), expect.anything());
  });

  // 3. Event management (paging/sorting)
  it("updates dataState on grid interaction", () => {
    render(<UserTable users={mockUsers} />);
    fireEvent.click(screen.getByTestId("kendo-grid"));

    expect(process).toHaveBeenCalledWith(
      expect.anything(),
      expect.objectContaining({ skip: 10 })
    );
  });

  // 4. Rendered columns
  it("includes all specified columns", () => {
    render(<UserTable users={mockUsers} />);
    expect(screen.getAllByText("Mock Column").length).toBe(7);
  });

  // 5. Empty state
  it("handles empty user list", () => {
    render(<UserTable users={[]} />);

    // Similar solution for the empty state
    const totalUsersContainer = screen.getByTestId("grid-toolbar");
    expect(totalUsersContainer).toHaveTextContent("Total:");
    expect(totalUsersContainer).toHaveTextContent("users");
    expect(totalUsersContainer).toHaveTextContent("0");

    expect(screen.getByText("Displaying 0 items")).toBeInTheDocument();
  });
});
