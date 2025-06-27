import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./shared/styles/index.css";
import "@progress/kendo-theme-default/dist/all.css";
import msalInstance from "./shared/services/msalInstance";
import * as Sentry from "@sentry/react";

async function initializeApp() {
  // Sentry initialization (synchronous)
  if (import.meta.env.VITE_SENTRY_DSN) {
    Sentry.init({
      dsn: import.meta.env.VITE_SENTRY_DSN,
      environment: import.meta.env.VITE_NODE_ENV,
      integrations: [
        Sentry.browserTracingIntegration(),
        Sentry.replayIntegration(),
      ],
      tracesSampleRate:
        import.meta.env.VITE_NODE_ENV === "production" ? 0.1 : 1.0,
      replaysSessionSampleRate: 0.1,
      replaysOnErrorSampleRate: 1.0,
    });
  }

  // Asynchronous initialization of axe-core (only in development)
  const axePromise = import.meta.env.DEV
    ? import("@axe-core/react").then((axe) => {
        axe.default(React, ReactDOM, 1000);
      })
    : Promise.resolve();

  // Asynchronous initialization of MSAL
  const msalPromise = msalInstance
    .initialize()
    .then(() => msalInstance.handleRedirectPromise())
    .then((response) => {
      if (response) {
        msalInstance.setActiveAccount(response.account);
      } else {
        const currentAccounts = msalInstance.getAllAccounts();
        if (currentAccounts.length > 0) {
          msalInstance.setActiveAccount(currentAccounts[0]);
        }
      }
    });

  try {
    await Promise.all([axePromise, msalPromise]);
    const root = ReactDOM.createRoot(document.getElementById("root")!);
    root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
  } catch (error) {
    console.error("❌ Error initializing application:", error);
  }
}

// Call the main function
initializeApp();
