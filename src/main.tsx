import React from "react";
import ReactDOM from "react-dom/client";
import App from "@/App";
import "@progress/kendo-theme-default/dist/all.css";
import "@/shared/styles/Index.css";

if (import.meta.env.DEV) {
  import("@axe-core/react").then(({ default: axe }) => {
    axe(React, ReactDOM, 1000);
  });
}

const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
