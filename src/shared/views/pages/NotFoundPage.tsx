import { ROUTE_PATHS } from "@/app/routes";
import NotFound from "@/shared/views/components/common/NotFound";

function NotFoundPage() {
  return (
    <NotFound
      title="404 | Page not found"
      message="The page you're looking for doesn't exist or has been moved."
      backTo={ROUTE_PATHS.HOME}
      backLabel="Go back home"
    />
  );
}

export default NotFoundPage;
