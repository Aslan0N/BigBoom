import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "../src/assets/sass/style.scss";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import "./i18/I18nex.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
