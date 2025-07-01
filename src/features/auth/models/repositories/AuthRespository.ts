import type { AccountInfo } from "@azure/msal-browser";
import { authService } from "@/features/auth/models/services/authService";

class AuthRepository {
  async getAccountInfo(): Promise<AccountInfo | null> {
    return authService.getAccountInfo();
  }

  async getAccessToken(): Promise<string | null> {
    return authService.getAccessToken();
  }

  async login(): Promise<void> {
    return authService.login();
  }

  async logout(): Promise<void> {
    return authService.logout();
  }
}

export const authRepository = new AuthRepository();
