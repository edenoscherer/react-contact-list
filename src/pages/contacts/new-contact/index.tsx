import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import React from "react";

import PageContent, { PageBreadcrumbs } from "../../../components/page-content";
import { AddContactParams } from "../../../services/api";
import ContactForm from "../components/contact-form";

type FormData = AddContactParams;

const NewContact: React.FC = () => {
  const initialValues: FormData = {
    name: "",
    contacts: [{ type: "email", value: "" }],
  };

  const pageBreadcrumbs: PageBreadcrumbs[] = [
    { title: "Contatos", to: "/contacts" },
    { title: "Novo Contatos" },
  ];

  return (
    <PageContent pageBreadcrumbs={pageBreadcrumbs}>
      <Paper sx={{ p: 2 }}>
        <Typography variant="h4" sx={{ mb: 2 }}>
          Novo Cotato
        </Typography>
        <ContactForm initialValues={initialValues} />
      </Paper>
    </PageContent>
  );
};

export default NewContact;
