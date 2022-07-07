import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import React from "react";

import useStyles from "./styles";

const Footer: React.FC = () => {
  const classes = useStyles();
  return (
    <Container className={classes.footerAppBar} maxWidth={false}>
      <Toolbar className={classes.footer}>
        <p>Front Contatos Edeno</p>
      </Toolbar>
    </Container>
  );
};
export default Footer;
