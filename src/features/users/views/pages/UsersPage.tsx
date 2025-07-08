import { useState } from "react";
import LoadingSpinner from "@/shared/views/components/common/LoadingSpinner";
import Button from "@/shared/views/components/common/Button";
import useUsers from "@/features/users/hooks/useUsers";
import ErrorMessage from "@/shared/views/components/error/ErrorMessage";
import UserCard from "@/features/users/views/components/UserCard";
import UserTable from "@/features/users/views/components/UserTable";

function UsersPage() {
  const { users, loading, error, refetch } = useUsers();
  const [viewMode, setViewMode] = useState<"cards" | "table">("table");

  if (loading)
    return (
      <div className="grid place-items-center w-full">
        <LoadingSpinner />
      </div>
    );
  if (error) return <ErrorMessage error={error} onReset={refetch} />;

  return (
    <article className="w-full text-center" aria-labelledby="user-page-title">
      <header className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-6 text-center sm:text-left">
        <h1
          id="user-page-title"
          className="text-3xl sm:text-4xl font-bold text-gray-800 dark:text-gray-200"
        >
          Users
        </h1>
        <div
          className="flex justify-center sm:justify-end flex-wrap gap-2"
          role="group"
          aria-label="View mode toggle"
        >
          {(["table", "cards"] as const).map((mode) => (
            <Button
              key={mode}
              onClick={() => setViewMode(mode)}
              variant={viewMode === mode ? "primary" : "secondary"}
              aria-pressed={viewMode === mode}
            >
              {mode === "cards" ? "Cards View" : "Table View"}
            </Button>
          ))}
        </div>
      </header>

      {viewMode === "cards" ? (
        <section
          aria-label="User cards"
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center"
        >
          {users.map((user) => (
            <UserCard key={user.id} user={user} />
          ))}
        </section>
      ) : (
        <UserTable users={users} />
      )}
    </article>
  );
}

export default UsersPage;
