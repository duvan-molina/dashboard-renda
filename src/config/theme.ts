import { createTheme } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Theme {
    overrides: {
      MuiCssBaseline: any;
    };
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    overrides: {
      MuiCssBaseline: {
        "@global": any;
      };
    };
  }
}

const theme = createTheme({
  overrides: {
    MuiCssBaseline: {
      "@global": {
        html: {
          margin: 0,
          padding: 0,
          boxSizing: "border-box",
        },
      },
    },
  },
});

export default theme;
