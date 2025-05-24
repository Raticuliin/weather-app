import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  // El strictmode hace que llame 2 veces a la api
  <StrictMode>
    <App />
  </StrictMode>
);
