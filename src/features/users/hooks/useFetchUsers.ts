import { useCallback, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import {
  fetchUsersStart,
  fetchUsersSuccess,
  fetchUsersFailure,
  selectAllUsers,
} from "../slices/usersSlice";
import fetchUsers from "../services/usersService";

function useFetchUsers() {
  const dispatch = useAppDispatch();
  const users = useAppSelector(selectAllUsers);
  const { loading, error } = useAppSelector((state) => state.users);

  const loadUsers = useCallback(async () => {
    dispatch(fetchUsersStart());
    try {
      const users = await fetchUsers();
      dispatch(fetchUsersSuccess(users));
    } catch (err) {
      dispatch(
        fetchUsersFailure(
          err instanceof Error ? err.message : "An unknown error occurred"
        )
      );
    }
  }, [dispatch]);

  useEffect(() => {
    loadUsers();
  }, [loadUsers]);

  return { users, loading, error, retry: loadUsers };
}

export default useFetchUsers;
