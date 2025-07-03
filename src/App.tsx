import { Provider } from "react-redux";
import { store } from "@/app/store/store";
import { MsalProvider } from "@azure/msal-react";
import AuthInitializer from "@/features/auth/components/AuthInitializer";
import AccessiBe from "@/shared/components/AccessiBe";
import msalInstance from "@/lib/utils/msalInstance";
import { ErrorBoundary } from "@/shared/components/ErrorBoundary";

function App() {
  return (
    <MsalProvider instance={msalInstance}>
      <Provider store={store}>
        <ErrorBoundary>
          <AccessiBe />
          <AuthInitializer />
        </ErrorBoundary>
      </Provider>
    </MsalProvider>
  );
}

export default App;
