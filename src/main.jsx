// src/main.jsx
import React from "react";
import ReactDOM from "react-dom/client";

// Importa tu CSS de Tailwind y cualquier CSS extra de App
import "./index.css";
import "./App.css";

import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
