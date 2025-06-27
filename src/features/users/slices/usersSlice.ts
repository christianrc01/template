import {
  createEntityAdapter,
  createSlice,
  type PayloadAction,
} from "@reduxjs/toolkit";
import type {
  User,
  UsersState,
} from "../../../shared/interfaces/IUser";
import type { ApiCallPayload } from "../../../shared/interfaces/IMiddleware";

const usersAdapter = createEntityAdapter<User, number>({
  selectId: (user) => user.id,
  sortComparer: (a, b) => a.name.localeCompare(b.name),
});

const initialState: UsersState = usersAdapter.getInitialState({
  loading: false,
  error: null,
});

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    fetchUsersStart(state) {
      state.loading = true;
    },
    fetchUsersSuccess(state, action: PayloadAction<User[]>) {
      usersAdapter.setAll(state, action.payload);
      state.loading = false;
      state.error = null;
    },
    fetchUsersFailure(state, action: PayloadAction<string>) {
      state.error = new Error(action.payload);
      state.loading = false;
    },
    // We can add more reducers here
    addUser: usersAdapter.addOne,
    updateUser: usersAdapter.updateOne,
    removeUser: usersAdapter.removeOne,
  },
});

export const apiCall = (payload: ApiCallPayload) => ({
  type: "API_CALL",
  payload,
});

export const fetchUsers = () =>
  apiCall({
    url: "/api/users",
    method: "GET",
    onStart: fetchUsersStart.type,
    onSuccess: fetchUsersSuccess.type,
    onError: fetchUsersFailure.type,
  });

export const {
  fetchUsersStart,
  fetchUsersSuccess,
  fetchUsersFailure,
  addUser,
  updateUser,
  removeUser,
} = usersSlice.actions;

const usersSelectors = usersAdapter.getSelectors<{ users: UsersState }>(
  (state) => state.users
);

export const {
  selectAll: selectAllUsers,
  selectById: selectUserById,
  selectIds: selectUserIds,
  selectEntities: selectUserEntities,
  selectTotal: selectTotalUsers,
} = usersSelectors;

export default usersSlice.reducer;
