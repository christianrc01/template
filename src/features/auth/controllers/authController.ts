import { store } from "@/app/store/store";
import {
  fetchAuthData,
  login,
  logout,
} from "@/features/auth/models/slices/authSlice";

class AuthController {
  getState() {
    return store.getState().auth;
  }

  subscribe(callback: () => void) {
    const unsubscribe = store.subscribe(callback);
    return unsubscribe;
  }

  async initialize() {
    await store.dispatch(fetchAuthData());
  }

  async login() {
    await store.dispatch(login());
  }

  async logout() {
    await store.dispatch(logout());
  }

  async getToken(): Promise<string | null> {
    const state = this.getState();
    if (state.token) return state.token;

    await this.initialize();
    return this.getState().token;
  }
}

export const authController = new AuthController();
