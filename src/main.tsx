import { StrictMode } from "react";

import { ThemeProvider, CssBaseline } from "@mui/material";
import { createRoot } from "react-dom/client";

import App from "./App.tsx";
import "./index.css";
import Theme from "./theme";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider theme={Theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </StrictMode>,
);
