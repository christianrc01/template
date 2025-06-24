import { UserCard } from "../components/UserCard";
import { useUsers } from "../hooks/useUsers";

export const UsersPage = () => {
  const { users, loading, error } = useUsers();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h1>Users</h1>
      <div className="users-list">
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
}