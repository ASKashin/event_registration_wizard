import React from "react";
import ReactDOM from "react-dom/client";
import "./languages/i18n.ts";
import App from "./App";
import "./index.sass";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
