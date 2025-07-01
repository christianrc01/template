import { useEffect, useState } from "react";
import { useMsal } from "@azure/msal-react";
import { InteractionStatus } from "@azure/msal-browser";
import { loginRequest } from "@/features/auth/controllers/authConfig";

function AuthInitializer() {
  const { instance, accounts, inProgress } = useMsal();
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    if (inProgress === InteractionStatus.None) {
      setInitialized(true);
    }
  }, [inProgress]);

  useEffect(() => {
    if (initialized && accounts.length === 0) {
      console.log("🔐 No session. Redirecting to Azure login...");
      instance.loginRedirect(loginRequest);
    } else if (accounts.length > 0) {
      console.log("✅ Session active:", accounts[0].username);
    }
  }, [initialized, accounts, instance]);

  return null;
}

export default AuthInitializer;
