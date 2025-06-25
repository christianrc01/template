import { Link } from "react-router-dom";
import { useAppSelector } from "../../../app/hooks";
import { Button } from "../common/Button";

export const Header = () => {
  const { user } = useAppSelector((state) => state.auth);

  return (
    <header className="text-white shadow-md">
      <div className="container mx-auto flex justify-between items-center p-4">
        <nav className="flex gap-4">
          <Link to="/" className="hover:!underline">
            Home
          </Link>
          <Link to="/users" className="hover:!underline">
            Users
          </Link>
        </nav>

        <nav className="flex gap-4">
          {user ? (
            <Link to="/profile" className="hover:!underline">
              Profile
            </Link>
          ) : (
            <Link to="/login">
              <Button variant="primary">Sign In</Button>
            </Link>
          )}
        </nav>
      </div>
    </header>
  );
};
