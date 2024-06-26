import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { WeaponModalProvider } from "./context/weaponModal.context.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <WeaponModalProvider>
      <App />
    </WeaponModalProvider>
  </React.StrictMode>
);
