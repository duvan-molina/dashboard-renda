import React from "react";
import ReactDOM from "react-dom/client";
import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/system";

import RootRouter from "./navigation/RootRouter";

import theme from "./config/theme";
import HttpRequestInterceptor from "./modules/shared/containers/HttpRequestInterceptor";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <HttpRequestInterceptor />
      <CssBaseline />
      <RootRouter />
    </ThemeProvider>
  </React.StrictMode>
);
