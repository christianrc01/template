import { Link } from "react-router-dom";
import { useAppSelector } from "../../../app/hooks";
import { Button } from "../../../shared/components/Button";

export const HomePage = () => {
  const { user } = useAppSelector((state) => state.auth);

  return (
    <div className="text-center py-12">
      <h1 className="text-4xl font-bold mb-6">Welcome</h1>
      <p className="text-lg mb-8">Manage users</p>

      <div className="flex gap-4 justify-center">
        {user ? (
          <Link to="/users">
            <Button variant="primary">See users</Button>
          </Link>
        ) : (
          <Link to="/users">
            <Button variant="primary">Users</Button>
          </Link>
        )}
      </div>
    </div>
  );
};
