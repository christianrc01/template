import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import {
  fetchUsersStart,
  fetchUsersSuccess,
  fetchUsersFailure,
} from "../slices/usersSlice";
import { fetchUsers } from "../services/usersApi";

export const useUsers = () => {
  const dispatch = useAppDispatch();
  const { users, loading, error } = useAppSelector((state) => state.users);

  useEffect(() => {
    const loadUsers = async () => {
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
    };
    loadUsers();
  }, [dispatch]);

  return { users, loading, error };
};
