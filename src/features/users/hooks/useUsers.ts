import { useEffect, useState } from "react";
import { usersController } from "@/features/users/controllers/usersController";

function useUsers(userId?: number) {
  const [state, setState] = useState(usersController.getState());

  useEffect(() => {
    const unsubscribe = usersController.subscribe(() => {
      setState(usersController.getState());
    });

    if (!state.loading) {
      if (userId !== undefined) {
        usersController.loadCurrentUser(userId);
      } else if (state.users.length === 0) {
        usersController.loadUsers();
      }
    }

    return unsubscribe;
  }, []);

  return {
    users: state.users,
    currentUser: state.currentUser,
    loading: state.loading,
    error: state.error,
    refetch: () => {
      if (userId !== undefined) {
        usersController.loadCurrentUser(userId);
      } else {
        usersController.refresh();
      }
    },
  };
}

export default useUsers;
