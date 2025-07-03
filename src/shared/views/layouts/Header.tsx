import { Link } from "react-router-dom";
import Button from "@/shared/views/components/common/Button";
import { ROUTE_PATHS } from "@/app/routes";
import { authController } from "@/features/auth/controllers/authController";

function Header() {
  const mainLinks = [
    { to: ROUTE_PATHS.HOME, label: "Home" },
    { to: ROUTE_PATHS.USERS, label: "Users" },
  ];

  const handleLogout = () => {
    authController.logout();
  };

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
          <Button variant="primary" aria-label="Logout" onClick={handleLogout}>
            Logout
          </Button>
        </nav>
      </div>
    </header>
  );
}

export default Header;
