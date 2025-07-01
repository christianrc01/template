import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { authRepository } from "@/features/auth/models/repositories/AuthRespository";
import type { AuthState } from "@/features/auth/types/IAuth";

const initialState: AuthState = {
  account: null,
  token: null,
  loading: false,
  error: null,
};

export const fetchAuthData = createAsyncThunk(
  "auth/fetchData",
  async (_, { rejectWithValue }) => {
    try {
      const [account, token] = await Promise.all([
        authRepository.getAccountInfo(),
        authRepository.getAccessToken(),
      ]);
      return { account, token };
    } catch (error) {
      return rejectWithValue(
        error instanceof Error ? error.message : "Unknown auth error"
      );
    }
  }
);

export const login = createAsyncThunk(
  "auth/login",
  async (_, { rejectWithValue }) => {
    try {
      await authRepository.login();
    } catch (error) {
      return rejectWithValue(
        error instanceof Error ? error.message : "Login failed"
      );
    }
  }
);

export const logout = createAsyncThunk(
  "auth/logout",
  async (_, { rejectWithValue }) => {
    try {
      await authRepository.logout();
    } catch (error) {
      return rejectWithValue(
        error instanceof Error ? error.message : "Logout failed"
      );
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    clearAuthData(state) {
      state.account = null;
      state.token = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAuthData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAuthData.fulfilled, (state, action) => {
        state.account = action.payload.account;
        state.token = action.payload.token;
        state.loading = false;
      })
      .addCase(fetchAuthData.rejected, (state, action) => {
        state.loading = false;
        state.error = new Error(action.payload as string);
      })
      .addCase(login.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.error = new Error(action.payload as string);
      })
      .addCase(logout.fulfilled, (state) => {
        state.account = null;
        state.token = null;
      });
  },
});

export const { clearAuthData } = authSlice.actions;
export const selectAuth = (state: { auth: AuthState }) => state.auth;
export default authSlice.reducer;
