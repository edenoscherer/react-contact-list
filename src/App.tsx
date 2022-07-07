import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import { SnackbarProvider } from "notistack";
import React from "react";

import { LayoutProvider } from "./contexts/LayoutContext";
import { Routes } from "./routes";
import theme from "./theme";

const App: React.FC = () => {
  return (
    <LayoutProvider>
      <ThemeProvider theme={theme}>
        <SnackbarProvider
          maxSnack={5}
          anchorOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
        >
          <CssBaseline />
          <Routes />
        </SnackbarProvider>
      </ThemeProvider>
    </LayoutProvider>
  );
};

export default App;
