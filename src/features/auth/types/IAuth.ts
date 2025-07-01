import type { AccountInfo } from "@azure/msal-browser";

export interface AuthState {
  token: string | null;
  account: AccountInfo | null;
  loading: boolean;
  error: Error | null;
}
