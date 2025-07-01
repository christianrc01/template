import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
} from "@reduxjs/toolkit";
import type { User } from "@/features/users/types/IUser";
import { userRepository } from "@/features/users/models/repositories/UserRepository";

const usersAdapter = createEntityAdapter<User, number>({
  selectId: (user) => user.id,
  sortComparer: (a, b) => a.name.localeCompare(b.name),
});

export const fetchUsers = createAsyncThunk(
  "users/fetchAll",
  async (_, { rejectWithValue }) => {
    try {
      return await userRepository.fetchAll();
    } catch (error) {
      if (error instanceof Error) {
        return rejectWithValue(error.message);
      }
      return rejectWithValue("An unknown error occurred");
    }
  }
);

export const fetchUserById = createAsyncThunk(
  "users/fetchById",
  async (id: number, { rejectWithValue }) => {
    try {
      return await userRepository.fetchById(id);
    } catch (error) {
      if (error instanceof Error) {
        return rejectWithValue(error.message);
      }
      return rejectWithValue("Unknown error");
    }
  }
);

const initialState = usersAdapter.getInitialState({
  loading: false,
  error: null as Error | null,
  currentUser: null as User | null,
});

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    clearCurrentUser(state) {
      state.currentUser = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        usersAdapter.setAll(state, action.payload);
        state.loading = false;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = new Error(action.payload as string);
      })
      .addCase(fetchUserById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUserById.fulfilled, (state, action) => {
        state.currentUser = action.payload;
        state.loading = false;
      })
      .addCase(fetchUserById.rejected, (state, action) => {
        state.loading = false;
        state.error = new Error(action.payload as string);
      });
  },
});

export const {
  selectAll: selectAllUsers,
  selectById: selectUserById,
  selectEntities: selectUserEntities,
} = usersAdapter.getSelectors();

export const { clearCurrentUser } = usersSlice.actions;
export default usersSlice.reducer;
