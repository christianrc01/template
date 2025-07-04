import { loginRequest } from "@/lib/utils/authConfig";
import msalInstance from "@/lib/utils/msalInstance";
import type { AccountInfo as MSALAccountInfo } from "@azure/msal-browser";
import type { SerializableAccountInfo } from "@/features/auth/types/IAuth";

class AuthService {
  private async getMSALAccount(): Promise<MSALAccountInfo | null> {
    const accounts = msalInstance.getAllAccounts();
    return accounts.length > 0 ? accounts[0] : null;
  }

  async getAccountInfo(): Promise<SerializableAccountInfo | null> {
    const account = await this.getMSALAccount();
    if (!account) return null;

    return {
      ...account,
      tenantProfiles:
        account.tenantProfiles instanceof Map
          ? Object.fromEntries(account.tenantProfiles)
          : account.tenantProfiles,
    };
  }

  async getAccessToken(): Promise<string | null> {
    const account = await this.getMSALAccount(); 
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
