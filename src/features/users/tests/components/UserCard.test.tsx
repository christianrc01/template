import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import UserCard from "@/features/users/views/components/UserCard";
import { mockUser } from "@/features/users/tests/mocks/mockUsers";

vi.mock("@/shared/components/icons/IconMail", () => ({
  default: () => <svg data-testid="icon-mail" />,
}));

vi.mock("@/shared/components/icons/IconPhone", () => ({
  default: () => <svg data-testid="icon-phone" />,
}));

describe("UserCard Component", () => {
  // 1. Basic rendering
  it("renders user information correctly", () => {
    render(<UserCard user={mockUser} />);

    // Key data
    expect(screen.getByText(mockUser.name)).toBeInTheDocument();
    expect(screen.getByText(`@${mockUser.username}`)).toBeInTheDocument();

    // Contact
    expect(screen.getByText(mockUser.email)).toBeInTheDocument();
    expect(screen.getByText(mockUser.phone)).toBeInTheDocument();
    expect(screen.getByText(mockUser.website)).toBeInTheDocument();
  });

  // 2. Links and interactive elements
  it("renders website link with correct attributes", () => {
    render(<UserCard user={mockUser} />);
    const websiteLink = screen.getByText(mockUser.website).closest("a");

    expect(websiteLink).toHaveAttribute("href", `https://${mockUser.website}`);
    expect(websiteLink).toHaveAttribute("target", "_blank");
    expect(websiteLink).toHaveAttribute("rel", "noopener noreferrer");
  });

  // 3. Address section
  it("displays formatted address information", () => {
    render(<UserCard user={mockUser} />);

    // Find the address container
    const addressHeading = screen.getByText("Address");
    const addressContainer = addressHeading.parentElement;

    // Check the entire contents of the container
    expect(addressContainer).toHaveTextContent(
      `${mockUser.address.street}, ${mockUser.address.suite}${mockUser.address.city}, ${mockUser.address.zipcode}Coordinates: ${mockUser.address.geo.lat}, ${mockUser.address.geo.lng}`
    );
  });

  // 4. Company section
  it("displays company information with catch phrase", () => {
    render(<UserCard user={mockUser} />);

    expect(screen.getByText(mockUser.company.name)).toBeInTheDocument();
    expect(
      screen.getByText(`"${mockUser.company.catchPhrase}"`)
    ).toBeInTheDocument();
    expect(screen.getByText(mockUser.company.bs)).toBeInTheDocument();
  });

  // 5. Icon rendering
  it("includes contact icons", () => {
    render(<UserCard user={mockUser} />);
    expect(screen.getAllByTestId("icon-mail").length).toBe(1);
    expect(screen.getAllByTestId("icon-phone").length).toBe(2);
  });
});
