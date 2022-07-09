import CircularProgress from "@mui/material/CircularProgress";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { useSnackbar } from "notistack";
import React from "react";
import { useParams } from "react-router-dom";

import PageContent, { PageBreadcrumbs } from "../../../components/page-content";
import { Person } from "../../../model";
import {
  AddContactParams,
  DefaultResponse,
  ErrorResponse,
  GetContact,
} from "../../../services/api";
import ContactForm from "../components/contact-form";

type FormData = AddContactParams;

const EditContact: React.FC = () => {
  const { enqueueSnackbar } = useSnackbar();
  const [initialValues, setInitialValues] = React.useState<
    FormData | undefined
  >();

  const params = useParams();
  const contactId = params.contactId
    ? Number.parseInt(params.contactId, 10)
    : undefined;

  React.useEffect((): void => {
    if (contactId) {
      GetContact(contactId).then(res => {
        if ((res as ErrorResponse).error) {
          enqueueSnackbar("Erro ao buscar contato", { variant: "error" });
        } else {
          const contact = (res as DefaultResponse<Person>).data;

          setInitialValues({ name: contact.name, contacts: contact.contacts });
        }
      });
    } else {
      enqueueSnackbar("Contato não encontrado", { variant: "error" });
    }
  }, [contactId]);

  const pageBreadcrumbs: PageBreadcrumbs[] = [
    { title: "Contatos", to: "/contacts" },
    { title: "Editar Contato" },
  ];

  return (
    <PageContent pageBreadcrumbs={pageBreadcrumbs}>
      <Paper sx={{ p: 2 }}>
        <Typography variant="h4" sx={{ mb: 2 }}>
          Editar Cotato
        </Typography>
        {initialValues ? (
          <ContactForm initialValues={initialValues} contactId={contactId} />
        ) : (
          <Stack
            direction="column"
            justifyContent="center"
            alignItems="center"
            spacing={2}
            sx={{ m: 4 }}
          >
            <CircularProgress />
          </Stack>
        )}
      </Paper>
    </PageContent>
  );
};

export default EditContact;
