import { useEffect, useState } from "react";
import { useMsal } from "@azure/msal-react";
import { InteractionStatus } from "@azure/msal-browser";
import LoadingSpinner from "@/shared/components/common/LoadingSpinner";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { routes } from "@/app/routing/routes";

const router = createBrowserRouter(routes);

function AuthInitializer() {
  const { instance, accounts, inProgress } = useMsal();
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    if (inProgress === InteractionStatus.None) {
      setInitialized(true);
    }
  }, [inProgress]);

  useEffect(() => {
    if (!initialized) return;

    if (accounts.length === 0 && inProgress === InteractionStatus.None) {
      console.log("🔐 No session. Redirecting to Azure login...");
      instance
        .loginRedirect({
          scopes: ["openid", "profile", "User.Read"],
        })
        .catch(console.error);
    } else if (accounts.length > 0) {
      console.log("✅ Session active:", accounts[0].username);
    }
  }, [initialized, accounts, inProgress, instance]);

  if (inProgress !== InteractionStatus.None || !initialized) {
    return (
      <main
        className="grid place-items-center w-screen"
        role="status"
        aria-live="polite"
      >
        <LoadingSpinner />
      </main>
    );
  }

  return <RouterProvider router={router} />;
}

export default AuthInitializer;
