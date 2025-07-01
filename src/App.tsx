import { Provider } from "react-redux";
import { store } from "@/app/store/store";
import { MsalProvider } from "@azure/msal-react";
import AuthInitializer from "@/features/auth/components/AuthInitializer";
import AccessiBe from "@/shared/components/common/AccessiBe";
import msalInstance from "@/lib/utils/msalInstance";
import { ErrorBoundary } from "@/shared/components/error/ErrorBoundary";

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
