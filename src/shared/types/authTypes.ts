import type { User } from "./userTypes";

export interface AuthState {
  user: null | User;
  loading: boolean;
  error: string | null;
}
