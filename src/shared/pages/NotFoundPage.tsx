import { Link } from "react-router-dom";
import { ROUTE_PATHS } from "@/app/routing/routes";
import Button from "@/shared/components/common/Button";

function NotFoundPage() {
  return (
    <div className="grid place-items-center w-full bg-gray-50 dark:bg-gray-900">
      <section aria-labelledby="not-found-title" className="text-center">
        <h1
          id="not-found-title"
          className="text-5xl font-bold text-gray-800 dark:text-gray-200 mb-4"
        >
          404 | Page not found
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link to={ROUTE_PATHS.HOME}>
          <Button variant="primary">Go back home</Button>
        </Link>
      </section>
    </div>
  );
}

export default NotFoundPage;
