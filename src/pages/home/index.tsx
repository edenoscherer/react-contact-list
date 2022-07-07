import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import React from "react";

import PageContent from "../../components/page-content";

const Home: React.FC = () => {
  return (
    <PageContent>
      <Stack
        direction="column"
        justifyContent="center"
        alignItems="center"
        spacing={2}
      >
        <Button variant="contained">empty</Button>
        <Button variant="contained" color="primary">
          primary
        </Button>
        <Button variant="contained" color="secondary">
          secondary
        </Button>
        <Button variant="contained" color="success">
          success
        </Button>
        <Button variant="contained" color="info">
          info
        </Button>
        <Button variant="contained" color="warning">
          warning
        </Button>
        <Button variant="contained" color="error">
          error
        </Button>
      </Stack>
    </PageContent>
  );
};

export default Home;
