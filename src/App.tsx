import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "@/app/store/store";
import { routes } from "@/app/routing/routes";
import { MsalProvider } from "@azure/msal-react";
import AuthInitializer from "@/features/auth/components/AuthInitializer";
import AccessiBe from "@/shared/components/common/AccessiBe";
import msalInstance from "@/lib/utils/msalInstance";
import { ErrorBoundary } from "@/shared/components/error/ErrorBoundary";

function App() {
  const router = createBrowserRouter(routes);

  return (
    <MsalProvider instance={msalInstance}>
      <Provider store={store}>
        <ErrorBoundary>
          <AuthInitializer />
          <AccessiBe />
          <RouterProvider router={router} />
        </ErrorBoundary>
      </Provider>
    </MsalProvider>
  );
}

export default App;
