import React from "react";
import ReactDOM from "react-dom/client";
import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/system";
import RootRouter from "./navigation/RootRouter";
import theme from "./config/theme";
import HttpRequestInterceptor from "./modules/shared/containers/HttpRequestInterceptor";
import { Provider } from "react-redux";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import { store } from "./store/store";

const App = () => {
  const persistor = persistStore(store);

  return (
    <React.StrictMode>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <ThemeProvider theme={theme}>
            <HttpRequestInterceptor />
            <CssBaseline />
            <RootRouter />
          </ThemeProvider>
        </PersistGate>
      </Provider>
    </React.StrictMode>
  );
};

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <App />
);
