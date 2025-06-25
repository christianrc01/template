import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { UserCard } from "../../components/UserCard";
import { mockUser } from "../data/mockUsers";

describe("UserCard Component", () => {
  it("renders user basic information correctly", () => {
    render(<UserCard user={mockUser} />);

    expect(screen.getByText(mockUser.name)).toBeInTheDocument();
    expect(screen.getByText(`@${mockUser.username}`)).toBeInTheDocument();
    expect(screen.getByText(mockUser.email)).toBeInTheDocument();
    expect(screen.getByText(mockUser.phone)).toBeInTheDocument();
  });

  it("renders the website link correctly", () => {
    render(<UserCard user={mockUser} />);

    const websiteLink = screen.getByText(mockUser.website);
    expect(websiteLink).toBeInTheDocument();
    expect(websiteLink.closest("a")).toHaveAttribute(
      "href",
      `https://${mockUser.website}`
    );
    expect(websiteLink.closest("a")).toHaveAttribute("target", "_blank");
    expect(websiteLink.closest("a")).toHaveAttribute(
      "rel",
      "noopener noreferrer"
    );
  });

  it("renders address information correctly", () => {
    render(<UserCard user={mockUser} />);

    const addressSection = screen.getByText("Address").parentElement;
    expect(addressSection).toHaveTextContent(
      `${mockUser.address.street}, ${mockUser.address.suite}`
    );
    expect(addressSection).toHaveTextContent(
      `${mockUser.address.city}, ${mockUser.address.zipcode}`
    );
    expect(
      screen.getByText(
        `Coordinates: ${mockUser.address.geo.lat}, ${mockUser.address.geo.lng}`
      )
    ).toBeInTheDocument();
  });

  it("renders company information correctly", () => {
    render(<UserCard user={mockUser} />);

    expect(screen.getByText("Company")).toBeInTheDocument();
    expect(screen.getByText(mockUser.company.name)).toBeInTheDocument();
    expect(
      screen.getByText(`"${mockUser.company.catchPhrase}"`)
    ).toBeInTheDocument();
    expect(screen.getByText(mockUser.company.bs)).toBeInTheDocument();
  });

  it("applies correct styling classes", () => {
    const { container } = render(<UserCard user={mockUser} />);

    // Verify that the card has the correct classes
    expect(container.firstChild).toHaveClass(
      "p-6 border border-gray-200 rounded-lg shadow-sm hover:shadow-md"
    );

    // Verify that the address section has the correct classes
    expect(screen.getByText("Address").parentElement).toHaveClass(
      "mt-4 p-3 bg-gray-50 rounded-lg"
    );
  });

  it("matches snapshot", () => {
    const { asFragment } = render(<UserCard user={mockUser} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
