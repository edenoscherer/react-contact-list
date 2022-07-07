import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import React from "react";

import { LayoutProvider } from "./contexts/LayoutContext";
import { Routes } from "./routes";
import theme from "./theme";

const App: React.FC = () => {
  return (
    <LayoutProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Routes />
      </ThemeProvider>
    </LayoutProvider>
  );
};

export default App;
