import { useState } from "react";
import LoadingSpinner from "../../../shared/components/common/LoadingSpinner";
import ErrorMessage from "../../../shared/components/error/ErrorMessage";
import UserTable from "../components/UserTable";
import useUsers from "../hooks/useUsers";
import UserCard from "../components/UserCard";
import Button from "../../../shared/components/common/Button";

function UsersPage() {
  const { users, loading, error, retry } = useUsers();
  const [viewMode, setViewMode] = useState<"cards" | "table">("table");

  if (loading)
    return (
      <div className="grid place-items-center w-full">
        <LoadingSpinner />
      </div>
    );
  if (error) return <ErrorMessage error={error as Error} onReset={retry} />;

  return (
    <div className="w-full text-center">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-4xl font-bold text-gray-800">Users</h1>
        <div className="flex space-x-2">
          {(["table", "cards"] as const).map((mode) => (
            <Button
              key={mode}
              onClick={() => setViewMode(mode)}
              variant={viewMode === mode ? "primary" : "outline-white"}
            >
              {mode === "cards" ? "Cards View" : "Table View"}
            </Button>
          ))}
        </div>
      </div>

      {viewMode === "cards" ? (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {users.map((user) => (
            <UserCard key={user.id} user={user} />
          ))}
        </div>
      ) : (
        <UserTable users={users} />
      )}
    </div>
  );
}

export default UsersPage;
