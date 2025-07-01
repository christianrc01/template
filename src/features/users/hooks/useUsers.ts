import { useEffect, useState } from "react";
import { usersController } from "@/features/users/controllers/usersController";

function useUsers() {
  const [state, setState] = useState(usersController.getState());

  useEffect(() => {
    const unsubscribe = usersController.subscribe(() => {
      setState(usersController.getState());
    });

    if (state.users.length === 0 && !state.loading) {
      usersController.loadUsers();
    }

    return unsubscribe;
  }, []);

  return {
    users: state.users,
    loading: state.loading,
    error: state.error,
    getUser: usersController.getUserById.bind(usersController),
    refetch: usersController.refresh.bind(usersController),
  };
}

export default useUsers;
