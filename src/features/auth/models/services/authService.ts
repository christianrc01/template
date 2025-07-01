import { loginRequest } from "@/lib/utils/authConfig";
import msalInstance from "@/lib/utils/msalInstance";
import type { AccountInfo } from "@azure/msal-browser";

class AuthService {
  async getAccountInfo(): Promise<AccountInfo | null> {
    const accounts = msalInstance.getAllAccounts();
    return accounts.length > 0 ? accounts[0] : null;
  }

  async getAccessToken(): Promise<string | null> {
    const account = await this.getAccountInfo();
    if (!account) return null;

    try {
      const response = await msalInstance.acquireTokenSilent({
        ...loginRequest,
        account,
      });
      return response.accessToken;
    } catch (error) {
      console.error("Token acquisition failed:", error);
      return null;
    }
  }

  async login(): Promise<void> {
    await msalInstance.loginRedirect(loginRequest);
  }

  async logout(): Promise<void> {
    await msalInstance.logoutRedirect();
  }
}

export const authService = new AuthService();
