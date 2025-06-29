import { Link } from "react-router-dom";
import Button from "@/shared/components/common/Button";
import { ROUTE_PATHS } from "@/app/routes";

function HomePage() {
  return (
    <div className="bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-800 dark:to-gray-900 flex flex-col items-center justify-center p-6 w-full rounded-3xl">
      <div className="max-w-2xl w-full bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 md:p-12 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-gray-100 mb-4">
          Welcome
        </h1>

        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8">
          Browse and manage all registered users
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to={ROUTE_PATHS.USERS} className="w-full sm:w-auto">
            <Button
              variant="outline-white"
              className="w-full"
              aria-label="View users"
            >
              Manage Users
            </Button>
          </Link>
        </div>

        <div className="mt-8 pt-6 border-t border-gray-100 dark:border-gray-700">
          <p className="text-gray-500 dark:text-gray-400">
            Last login: {new Date().toLocaleDateString()}
          </p>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
