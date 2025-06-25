import type { User } from "./IUser";

export interface AuthState {
  user: null | User;
  loading: boolean;
  error: string | null;
}
