import React from "react";
import ReactDOM from "react-dom/client";
import App from "@/App";
import "@/shared/styles/index.css";
import "@progress/kendo-theme-default/dist/all.css";

async function initializeApp() {
  // Asynchronous initialization of axe-core (only in development)
  if (import.meta.env.DEV) {
    const { default: axe } = await import("@axe-core/react");
    axe(React, ReactDOM, 1000);
  }

  const root = ReactDOM.createRoot(document.getElementById("root")!);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}

initializeApp().catch(console.error);
