import AddIcon from "@mui/icons-material/AddCircle";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import SearchIcon from "@mui/icons-material/Search";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import SvgIcon from "@mui/material/SvgIcon";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { useSnackbar } from "notistack";
import React from "react";
import { Link } from "react-router-dom";

import PageContent, { PageBreadcrumbs } from "../../components/page-content";
import { Person } from "../../model";
import {
  DefaultResponse,
  ErrorResponse,
  ListContacts,
} from "../../services/api";
import ContactRow from "./ContactRow";

const Contacts: React.FC = () => {
  const [people, setPeople] = React.useState<Person[]>([]);
  const { enqueueSnackbar } = useSnackbar();

  const pageBreadcrumbs: PageBreadcrumbs[] = [{ title: "Contatos" }];

  React.useEffect((): void => {
    ListContacts().then(res => {
      if ((res as ErrorResponse).error) {
        enqueueSnackbar("Erro ao buscar contatos", { variant: "error" });
      } else {
        setPeople((res as DefaultResponse<Person[]>).data);
      }
    });
  }, []);

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
          <TableContainer
            sx={{ minHeight: "250px", maxHeight: "calc(100vh - 280px)" }}
          >
            <Table stickyHeader aria-label="collapsible table">
              <TableHead>
                <TableRow>
                  <TableCell />
                  <TableCell>Código</TableCell>
                  <TableCell>Nome</TableCell>
                  <TableCell />
                </TableRow>
              </TableHead>
              <TableBody>
                {people.length &&
                  people.map(person => (
                    <ContactRow key={person.id} person={person} />
                  ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Stack>
      </Paper>
    </PageContent>
  );
};

export default Contacts;
