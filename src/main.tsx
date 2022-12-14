import React from "react";
import ReactDOM from "react-dom/client";
import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/system";

import HtppInterceptor from "./modules/shared/hooks/useHtppInterceptor";
import RootRouter from "./navigation/RootRouter";

import theme from "./config/theme";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <HtppInterceptor>
        <CssBaseline />
        <RootRouter />
      </HtppInterceptor>
    </ThemeProvider>
  </React.StrictMode>
);
