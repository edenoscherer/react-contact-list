import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { useSnackbar } from "notistack";
import React from "react";
import { Link } from "react-router-dom";

import { Person } from "../../model";
import {
  DefaultResponse,
  ErrorResponse,
  RemoveContact,
} from "../../services/api";

const ContactRow: React.FC<{ person: Person }> = ({ person }) => {
  const [open, setOpen] = React.useState(false);
  const [isDeleted, setDeleted] = React.useState(false);
  const { enqueueSnackbar } = useSnackbar();

  const removerProduto = (id: number) => {
    RemoveContact(id)
      .then(res => {
        let error = res as ErrorResponse;
        if (error.message) {
          enqueueSnackbar(`Erro ao remover contato. ${error.message}`, {
            variant: "error",
          });
        } else {
          const data = res as DefaultResponse<boolean>;
          if (data.success) {
            enqueueSnackbar("Contato removido com sucesso", {
              variant: "success",
            });
            setDeleted(true);
          } else {
            enqueueSnackbar("Erro ao remover contato", { variant: "error" });
          }
        }
      })
      .catch(err => {
        let error = err as ErrorResponse;
        enqueueSnackbar(`Erro ao remover contato. ${error.message}`, {
          variant: "error",
        });
      });
  };

  if (isDeleted) {
    return <React.Fragment />;
  }
  return (
    <React.Fragment>
      <TableRow key={person.id}>
        <TableCell>
          {" "}
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell>{person.id}</TableCell>
        <TableCell>{person.name}</TableCell>
        <TableCell align="right">
          <IconButton
            title="Editar"
            component={Link}
            to={{
              pathname: `/produtos/${person.id}`,
            }}
          >
            <EditIcon />
          </IconButton>
          <IconButton title="Remover" onClick={() => removerProduto(person.id)}>
            <DeleteIcon />
          </IconButton>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={4}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Tipo</TableCell>
                    <TableCell>Contato</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {person.contacts.map((contact, index) => (
                    <TableRow key={index}>
                      <TableCell>{contact.type}</TableCell>
                      <TableCell>{contact.value}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
};
export default ContactRow;
