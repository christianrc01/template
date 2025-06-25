import { Link } from "react-router-dom";
import { useAppSelector } from "../../../app/hooks";
import Button from "../common/Button";
import { ROUTE_PATHS } from "../../../app/routes";

function Header() {
  const { user } = useAppSelector((state) => state.auth);

  return (
    <header className="text-white shadow-md">
      <div className="container mx-auto flex justify-between items-center p-4">
        <nav aria-label="Main navigation" className="flex gap-4">
          <Link to={ROUTE_PATHS.HOME} className="hover:!underline">
            Home
          </Link>
          <Link to={ROUTE_PATHS.USERS} className="hover:!underline">
            Users
          </Link>
        </nav>

        <nav aria-label="User navigation" className="flex gap-4">
          {user ? (
            <Link to={ROUTE_PATHS.PROFILE} className="hover:!underline">
              Profile
            </Link>
          ) : (
            <Link to={ROUTE_PATHS.LOGIN}>
              <Button variant="primary">Sign In</Button>
            </Link>
          )}
        </nav>
      </div>
    </header>
  );
}

export default Header;
