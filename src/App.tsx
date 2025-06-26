import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./app/store";
import { ErrorBoundary } from "./shared/components/error/ErrorBoundary";
import { routes } from "./app/routes";
import { MsalProvider } from "@azure/msal-react";
import AuthInitializer from "./shared/components/common/AuthInitializer";
import msalInstance from "./shared/services/msalInstance";

function App() {
  const router = createBrowserRouter(routes);

  return (
    <MsalProvider instance={msalInstance}>
      <Provider store={store}>
        <ErrorBoundary>
          <AuthInitializer />
          <RouterProvider router={router} />
        </ErrorBoundary>
      </Provider>
    </MsalProvider>
  );
}

export default App;
