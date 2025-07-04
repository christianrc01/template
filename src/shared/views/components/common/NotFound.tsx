import { Link } from "react-router-dom";
import Button from "@/shared/views/components/common/Button";
import type { NotFoundProps } from "@/shared/types/IShared";

function NotFound({
  title = "404 | Not found",
  message = "The resource you're looking for doesn't exist or has been removed.",
  backTo = "/",
  backLabel = "Go back home",
}: NotFoundProps) {
  return (
    <div className="grid place-items-center w-full bg-gray-50 dark:bg-gray-900 min-h-[50vh] px-4">
      <section
        aria-labelledby="not-found-title"
        className="text-center max-w-lg"
      >
        <h1
          id="not-found-title"
          className="text-4xl font-bold text-gray-800 dark:text-gray-200 mb-4"
        >
          {title}
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mb-6">{message}</p>
        <Link to={backTo}>
          <Button variant="primary">{backLabel}</Button>
        </Link>
      </section>
    </div>
  );
}

export default NotFound;
