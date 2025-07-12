import Button from "@/shared/views/components/common/Button";
import { ROUTE_PATHS } from "@/app/routes";
import Text from "@/shared/views/components/common/Text";
import Link from "@/shared/views/components/common/Link";

function HomePage() {
  return (
    <div className="bg-[image:var(--gradient-primary)] flex flex-col items-center justify-center p-4 sm:p-6 md:p-12 w-full rounded-3xl">
      {/* Example home page */}
      <section
        aria-labelledby="welcome-title"
        className="max-w-xl sm:max-w-2xl w-full bg-[var(--color-bg)] rounded-xl shadow-lg p-6 sm:p-8 md:p-12 text-center mx-2 sm:mx-0"
      >
        <div className="mb-8">
          <Text as="h1" id="welcome-title">
            Welcome
          </Text>
          <Text as="p">Browse and manage all registered users</Text>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to={ROUTE_PATHS.USERS}
            draggable={false}
            className="w-full sm:w-auto"
          >
            <Button
              variant="decline"
              className="w-full"
              aria-label="View users"
            >
              Manage Users
            </Button>
          </Link>
        </div>

        <footer className="mt-8 pt-6 border-t border-[var(--color-border)]">
          <Text as="small">
            Last login:{" "}
            <time dateTime={new Date().toISOString()}>
              {new Date().toLocaleDateString()}
            </time>
          </Text>
        </footer>
      </section>
    </div>
  );
}

export default HomePage;
