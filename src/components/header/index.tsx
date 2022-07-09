import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import MenuIcon from "@mui/icons-material/Menu";
import AppBar from "@mui/material/AppBar";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import React from "react";

import {
  toggleSidebar,
  useLayoutDispatch,
  useLayoutState,
} from "../../contexts/LayoutContext";

const Header: React.FC = () => {
  const layoutState = useLayoutState();
  const layoutDispatch = useLayoutDispatch();

  return (
    <AppBar position="fixed">
      <Toolbar>
        <IconButton
          color="inherit"
          onClick={() => toggleSidebar(layoutDispatch)}
        >
          {layoutState.isSidebarOpened ? <ArrowBackIcon /> : <MenuIcon />}
        </IconButton>
        <Typography variant="h6" noWrap component="div">
          Edeno | Lista de contatos
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
