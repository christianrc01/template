import { useParams } from "react-router-dom";
import LoadingSpinner from "@/shared/views/components/common/LoadingSpinner";
import ErrorMessage from "@/shared/views/components/error/ErrorMessage";
import useUsers from "@/features/users/hooks/useUsers";
import UserCard from "@/features/users/views/components/UserCard";
import NotFound from "@/shared/views/components/common/NotFound";
import { ROUTE_PATHS } from "@/app/routes";

function UserProfilePage() {
  const { id } = useParams<{ id: string }>();
  const { currentUser, loading, error, refetch } = useUsers(Number(id));

  if (loading)
    return (
      <div className="grid place-items-center w-full">
        <LoadingSpinner />
      </div>
    );

  if (error) return <ErrorMessage error={error} onReset={refetch} />;

  if (!currentUser) {
    return (
      <NotFound
        title="404 | User not found"
        message="The user you're looking for doesn't exist or has been removed."
        backTo={ROUTE_PATHS.USERS}
        backLabel="Back to Users"
      />
    );
  }

  return (
    <article
      className="w-full text-center"
      aria-labelledby="user-profile-title"
    >
      <header className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-6 text-center sm:text-left">
        <h1
          id="user-profile-title"
          className="text-3xl sm:text-4xl font-bold text-gray-800 dark:text-gray-200"
        >
          User Profile
        </h1>
      </header>
      <section className="justify-items-center">
        <UserCard user={currentUser} />
      </section>
    </article>
  );
}

export default UserProfilePage;
