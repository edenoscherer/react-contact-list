import AddIcon from "@mui/icons-material/AddCircle";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import React from "react";
import { Link } from "react-router-dom";

import PageContent, { PageBreadcrumbs } from "../../components/page-content";

const Contacts: React.FC = () => {
  const pageBreadcrumbs: PageBreadcrumbs[] = [{ title: "Contatos" }];

  return (
    <PageContent pageBreadcrumbs={pageBreadcrumbs}>
      <Paper sx={{ p: 2 }}>
        <Stack
          direction="column"
          justifyContent="center"
          alignItems="stretch"
          spacing={2}
        >
          <Stack direction="row" spacing={2} justifyContent="space-between">
            <Typography variant="h4">Cotatos</Typography>

            <Button
              component={Link}
              to="/contacts/new"
              color="primary"
              variant="contained"
              startIcon={<AddIcon />}
            >
              Novo Contato
            </Button>
          </Stack>
        </Stack>
      </Paper>
    </PageContent>
  );
};

export default Contacts;
