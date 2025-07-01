import React from "react";
import ReactDOM from "react-dom/client";
import App from "@/App";
import "@/shared/styles/index.css";
import "@progress/kendo-theme-default/dist/all.css";
import msalInstance from "@/lib/utils/msalInstance";

async function initializeApp() {
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
