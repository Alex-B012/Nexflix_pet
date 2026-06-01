import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { ThemeProvider } from "./context/ThemeProvider.jsx";

import MainRoutes from "./routing/MainRoutes.jsx";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <BrowserRouter>
        <MainRoutes />
      </BrowserRouter>
    </ThemeProvider>
  </StrictMode>,
);
