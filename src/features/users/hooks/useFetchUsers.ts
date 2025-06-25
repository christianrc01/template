import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { selectAllUsers, fetchUsers } from "../slices/usersSlice";

function useFetchUsers() {
  const dispatch = useAppDispatch();
  const users = useAppSelector(selectAllUsers);
  const { loading, error } = useAppSelector((state) => state.users);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return { users, loading, error, retry: () => dispatch(fetchUsers()) };
}

export default useFetchUsers;
