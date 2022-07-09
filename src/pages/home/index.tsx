import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import React from "react";

import PageContent from "../../components/page-content";

const Home: React.FC = () => {
  return (
    <PageContent>
      <Paper sx={{ p: 2 }}>
        <Stack direction="column" spacing={2}>
          <Typography variant="h4" textAlign="center">
            Projeto teste lista de contatos
          </Typography>
          <Typography variant="body1" textAlign="center">
            Projeto desenvolvido para testar a combinação do React, Typescipt,
            Material UI, Formik e Yup
          </Typography>

          <Typography variant="body1" textAlign="center">
            Antes de testar, não esqueça de renomear o arquivo
            .env.development.example para .env.development e atualizar o
            endereço da api.
          </Typography>
        </Stack>
      </Paper>
    </PageContent>
  );
};

export default Home;
