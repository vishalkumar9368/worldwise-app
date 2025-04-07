import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { CountriesProvider } from "./context/CountriesContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <CountriesProvider>
        <App />
      </CountriesProvider>
    </BrowserRouter>
  </StrictMode>
);
