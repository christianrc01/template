import { Link } from "react-router-dom";
import Button from "@/shared/components/common/Button";
import { ROUTE_PATHS } from "@/app/routing/routes";

function Header() {
  const mainLinks = [
    { to: ROUTE_PATHS.HOME, label: "Home" },
    { to: ROUTE_PATHS.USERS, label: "Users" },
  ];

  return (
    <header className="bg-gray-800 text-white dark:bg-gray-900 dark:border-b dark:border-gray-700 shadow-md">
      <div className="container mx-auto flex justify-between items-center p-4">
        <nav aria-label="Main navigation" className="flex gap-4">
          <ul className="flex gap-4">
            {mainLinks.map((link) => (
              <li key={link.to}>
                <Link to={link.to}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="User navigation" className="flex gap-4">
          <Link to={ROUTE_PATHS.PROFILE}>
            <Button variant="primary">Profile</Button>
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
