import { Link } from "react-router-dom";
import { useAppSelector } from "../../app/hooks";
import { Button } from "./Button";

export const Header = () => {
  const { user } = useAppSelector((state) => state.auth);

  return (
    <header className="bg-blue-600 text-white shadow-md">
      <div className="container mx-auto flex justify-between items-center p-4">
        <Link to="/" className="text-2xl font-bold">
          Template
        </Link>

        <nav className="flex gap-4">
          <Link to="/" className="hover:underline">
            Home
          </Link>
          <Link to="/users" className="hover:underline">
            Users
          </Link>
          {user ? (
            <Link to="/profile" className="hover:underline">
              Profile
            </Link>
          ) : (
            <Link to="/login">
              <Button variant="outline-white">Login</Button>
            </Link>
          )}
        </nav>
      </div>
    </header>
  );
};
