import { loginRequest } from "@/features/auth/controllers/authConfig";
import msalInstance from "@/features/auth/services//msalInstance";

async function getAccessToken(): Promise<string | null> {
  const accounts = msalInstance.getAllAccounts();
  if (accounts.length === 0) {
    console.warn("⚠️ No session. Token not available.");
    return null;
  }

  try {
    const response = await msalInstance.acquireTokenSilent({
      ...loginRequest,
      account: accounts[0],
    });
    return response.accessToken;
  } catch (error) {
    console.error("❌ Failed to acquire token silently:", error);
    return null;
  }
}

export default getAccessToken;
