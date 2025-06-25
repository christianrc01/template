import { Link } from "react-router-dom";
import { useAppSelector } from "../../../app/hooks";
import Button from "../../../shared/components/common/Button";

function HomePage() {
  const { user } = useAppSelector((state) => state.auth);

  return (
    <div className="bg-gradient-to-br from-blue-50 to-indigo-100 flex flex-col items-center justify-center p-6 w-full rounded-2xl">
      <div className="max-w-2xl w-full bg-white rounded-xl shadow-lg p-8 md:p-12 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          Welcome
        </h1>

        <p className="text-lg md:text-xl text-gray-600 mb-8">
          Browse and manage all registered users
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {user ? (
            <Link to="/profile" className="w-full sm:w-auto">
              <Button variant="outline-white" className="w-full">
                Your Profile
              </Button>
            </Link>
          ) : (
            <Link to="/users" className="w-full sm:w-auto">
              <Button variant="outline-white" className="w-full">
                Manage Users
              </Button>
            </Link>
          )}
        </div>

        {user && (
          <div className="mt-8 pt-6 border-t border-gray-100">
            <p className="text-gray-500">
              Last login: {new Date().toLocaleDateString()}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default HomePage;
