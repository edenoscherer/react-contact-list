import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import MenuItem from "@mui/material/MenuItem";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { Field, FieldArray, Formik, FormikHelpers } from "formik";
import { TextField } from "formik-mui";
import { useSnackbar } from "notistack";
import React from "react";
import * as yup from "yup";

import PageContent, { PageBreadcrumbs } from "../../../components/page-content";
import {
  AddContact,
  AddContactParams,
  ErrorResponse,
} from "../../../services/api";
import theme from "../../../theme";

const validationSchema = yup.object({
  name: yup
    .string()
    .min(3, "Informe o nome completo")
    .required("Informe o nome"),
  contacts: yup.array().of(
    yup.object({
      type: yup.string().required("Informe o tipo do contato"),
      value: yup.string().required("Informe o contato"),
    }),
  ),
});

type FormData = AddContactParams;

const NewContact: React.FC = () => {
  const { enqueueSnackbar } = useSnackbar();

  const initialValues: FormData = {
    name: "",
    contacts: [{ type: "email", value: "" }],
  };

  const onSubmit = async (
    values: FormData,
    formikHelpers: FormikHelpers<FormData>,
  ) => {
    try {
      console.log(values);
      const res = await AddContact(values);
      if ((res as ErrorResponse).error) {
        const err = res as ErrorResponse;
        console.error(err.error);
        console.error(err.message);
        enqueueSnackbar(err.message, { variant: "error" });
      } else {
        enqueueSnackbar("Contato cadastrado com sucesso", {
          variant: "success",
        });
        formikHelpers.resetForm();
      }
    } catch (error) {
      console.error(error);
      enqueueSnackbar((error as Error).message, { variant: "error" });
    }
    formikHelpers.setSubmitting(false);
  };

  const pageBreadcrumbs: PageBreadcrumbs[] = [
    { title: "Contatos", to: "/contacts" },
    { title: "Novo Contatos" },
  ];

  return (
    <PageContent pageBreadcrumbs={pageBreadcrumbs}>
      <Paper sx={{ p: 2 }}>
        <Formik<FormData>
          initialValues={initialValues}
          onSubmit={onSubmit}
          validationSchema={validationSchema}
        >
          {({ values, submitForm, resetForm, isSubmitting }) => (
            <Stack
              direction="column"
              justifyContent="center"
              alignItems="stretch"
              spacing={2}
            >
              <Field
                component={TextField}
                type="string"
                label="Nome"
                name="name"
              />
              <Box>
                <Grid container spacing={2} direction="row">
                  <FieldArray
                    name="contacts"
                    render={({ remove, push }) => (
                      <>
                        {values.contacts.map((item, index) => (
                          <Grid item sm={6} md={4} key={index}>
                            <Paper
                              sx={{
                                p: 2,
                                backgroundColor: theme.palette.background.light,
                              }}
                            >
                              <Stack
                                spacing={2}
                                direction="column"
                                alignItems="flex-star"
                                justifyContent="space-between"
                                key={index}
                              >
                                <Field
                                  component={TextField}
                                  type="select"
                                  select
                                  label="Tipo do contato"
                                  name={`contacts.${index}.type`}
                                >
                                  <MenuItem value="email">Email</MenuItem>
                                  <MenuItem value="phone">Telefone</MenuItem>
                                  <MenuItem value="whatsapp">WhatsApp</MenuItem>
                                </Field>
                                <Field
                                  component={TextField}
                                  type="string"
                                  label="Contato"
                                  name={`contacts.${index}.value`}
                                />
                                <Button
                                  type="button"
                                  variant="contained"
                                  size="small"
                                  color="error"
                                  onClick={() => remove(index)}
                                >
                                  Remover Contato
                                </Button>
                              </Stack>
                            </Paper>
                          </Grid>
                        ))}
                        <Grid item xs={12}>
                          <Button
                            type="button"
                            variant="contained"
                            size="small"
                            color="secondary"
                            onClick={() => push({ type: "email", value: "" })}
                          >
                            Adicionar Contato
                          </Button>
                        </Grid>
                      </>
                    )}
                  />
                </Grid>
              </Box>
              <Stack
                spacing={2}
                direction="row"
                alignItems="flex-star"
                justifyContent="space-between"
              >
                <Button
                  variant="contained"
                  color="primary"
                  disabled={isSubmitting}
                  onClick={submitForm}
                >
                  Salvar
                </Button>
                <Button
                  type="button"
                  variant="contained"
                  color="error"
                  disabled={isSubmitting}
                  onClick={() => {
                    resetForm();
                  }}
                >
                  Limpar dados
                </Button>
              </Stack>
              <pre>{JSON.stringify(values, null, 2)}</pre>
            </Stack>
          )}
        </Formik>
      </Paper>
    </PageContent>
  );
};

export default NewContact;
