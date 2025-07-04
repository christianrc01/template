import React from "react";
import ReactDOM from "react-dom/client";
import App from "@/App";
import "@progress/kendo-theme-default/dist/all.css";
import "@/shared/styles/Index.css";
import "@/shared/styles/KendoTable.css";
import "@/shared/styles/KendoButton.css";
import "@/shared/styles/KendoPopup.css";

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
