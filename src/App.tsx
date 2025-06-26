import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./app/store";
import { routes } from "./app/routes";
import { MsalProvider } from "@azure/msal-react";
import AuthInitializer from "./shared/components/common/AuthInitializer";
import msalInstance from "./shared/services/msalInstance";
import ErrorFallback from "./shared/components/error/ErrorFallback";
import { ErrorBoundary } from "@sentry/react";

function App() {
  const router = createBrowserRouter(routes);

  return (
    <MsalProvider instance={msalInstance}>
      <Provider store={store}>
        <ErrorBoundary
          fallback={({ error, resetError }) => (
            <ErrorFallback error={error as Error} onReset={resetError} />
          )}
        >
          <AuthInitializer />
          <RouterProvider router={router} />
        </ErrorBoundary>
      </Provider>
    </MsalProvider>
  );
}

export default App;
