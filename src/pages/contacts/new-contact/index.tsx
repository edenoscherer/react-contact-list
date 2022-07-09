import Paper from "@mui/material/Paper";
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
        <ContactForm initialValues={initialValues} />
      </Paper>
    </PageContent>
  );
};

export default NewContact;
