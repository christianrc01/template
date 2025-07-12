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
    <div className="grid place-items-center w-full bg-[var(--color-bg)] min-h-[50vh] px-4">
      <section
        aria-labelledby="not-found-title"
        className="text-center max-w-lg"
      >
        <div className="mb-6">
          <h2 id="not-found-title">{title}</h2>
          <p className="mt-1">{message}</p>
        </div>
        <Link to={backTo} draggable={false}>
          <Button variant="primary">{backLabel}</Button>
        </Link>
      </section>
    </div>
  );
}

export default NotFound;
