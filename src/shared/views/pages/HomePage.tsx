import { Link } from "react-router-dom";
import Button from "@/shared/views/components/common/Button";
import { ROUTE_PATHS } from "@/app/routes";

function HomePage() {
  return (
    <div className="bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-800 dark:to-gray-900 flex flex-col items-center justify-center p-4 sm:p-6 md:p-12 w-full rounded-3xl">
      {/* Example home page */}
      <section
        aria-labelledby="welcome-title"
        className="max-w-xl sm:max-w-2xl w-full bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 sm:p-8 md:p-12 text-center mx-2 sm:mx-0"
      >
        <h1
          id="welcome-title"
          className="!text-3xl sm:!text-4xl md:!text-5xl font-bold text-gray-800 dark:text-gray-100 mb-4 break-words"
        >
          Welcome
        </h1>

        <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8">
          Browse and manage all registered users
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to={ROUTE_PATHS.USERS} className="w-full sm:w-auto">
            <Button
              variant="decline"
              className="w-full"
              aria-label="View users"
            >
              Manage Users
            </Button>
          </Link>
        </div>

        <footer className="mt-8 pt-6 border-t border-gray-100 dark:border-gray-700">
          <p className="text-sm sm:text-base text-gray-500 dark:text-gray-400">
            Last login: {new Date().toLocaleDateString()}
          </p>
        </footer>
      </section>
    </div>
  );
}

export default HomePage;
