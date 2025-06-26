import LoadingSpinner from "../../../shared/components/common/LoadingSpinner";
import ErrorMessage from "../../../shared/components/error/ErrorMessage";
import UserCard from "../components/UserCard";
import useUsers from "../hooks/useUsers";

function UsersPage() {
  const { users, loading, error, retry} = useUsers();

  if (loading)
    return (
      <div className="grid place-items-center w-full">
        <LoadingSpinner />
      </div>
    );
  if (error) return <ErrorMessage error={error} onRetry={retry} />;

  return (
    <div className="w-full text-center">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">Users</h1>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
}

export default UsersPage;
