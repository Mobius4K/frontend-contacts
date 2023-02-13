import "./contactBook.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import swal from "sweetalert";
import {
  Card,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeaderCell,
  TableRow,
} from "@tremor/react";
import deleteImg from "../assets/bin.png";
import editImg from "../assets/pencil.png";
import contactoImg from "../assets/contactos.png";
import { UseContact } from "../hooks/UseContact";
import { editContact } from "../services/contactBook";

export const ContactBook = () => {

  //Creamos un Hooks para separar la logica,  el cual llamamos UseContact
  const { contactBook, setContactBook } = UseContact();

// Creamos un navigate para hacer redirecciones
  const navigate = useNavigate();

  //Funcion para eliminar un registro
  const handleDeleteContact = (id: number) => {
    swal({
      text: "¿Desea eliminar el siguiente contacto?",
      icon: "warning",
      buttons: ["NO", "SI"],
    }).then((respuesta) => {
      if (respuesta) {
        axios.delete(`${import.meta.env.VITE_URL_BACK}/${id}`);
        setContactBook(
          contactBook.filter((contactBook) => contactBook.id != id)
        );
      }
      swal({ text: "Contacto Eliminado!", icon: "success" });
      navigate("/");
    });
  };




  return (
    <div>
      <div className="title">
        <img src={contactoImg} width="50px" />
        <h1> Agenda de contactos</h1>
      </div>

      <Link className="linkRoute" to={"/createContact"}>
        <button className="btn-contact">Crear Contacto</button>
      </Link>
      <Card marginTop="mt-10" maxWidth="max-w-6xl">
        <Table>
          <TableHead>
            <TableRow>
              <TableHeaderCell textAlignment="text-center">
                Nombre
              </TableHeaderCell>
              <TableHeaderCell textAlignment="text-center">
                Apellido
              </TableHeaderCell>
              <TableHeaderCell textAlignment="text-center">
                Correo Electrónico
              </TableHeaderCell>
              <TableHeaderCell textAlignment="text-center">
                Celular
              </TableHeaderCell>
              <TableHeaderCell textAlignment="text-center">
                Teléfon Fijo
              </TableHeaderCell>
              <TableHeaderCell textAlignment="text-center">
                Dirección
              </TableHeaderCell>
              <TableHeaderCell textAlignment="text-center">
                Acciones
              </TableHeaderCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {contactBook.map((datos) => (
              <TableRow key={datos.id}>
                <TableCell textAlignment="text-center">
                  {datos.nombre}
                </TableCell>
                <TableCell textAlignment="text-center">
                  {datos.apellido}
                </TableCell>
                <TableCell textAlignment="text-center">
                  {datos.correo}
                </TableCell>
                <TableCell textAlignment="text-center">
                  {datos.celular}
                </TableCell>
                <TableCell textAlignment="text-center">{datos.fijo}</TableCell>
                <TableCell textAlignment="text-center">
                  {datos.direccion}
                </TableCell>
                <TableCell textAlignment="text-center">
                  <div className="btn-crud">
         

                    <button
                      onClick={() => {
                        handleDeleteContact(datos.id);
                      }}
                      className="btn-delete"
                    >
                      <img src={deleteImg} width={"25px"} height={"25px"} />
                    </button>
                     <Link to={"/editContact/"+ datos.id}>
                      <button  className="btn-edit">
                        <img src={editImg} width={"25px"} height={"25px"} />
                      </button>
                     </Link>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    </div>
  );
};
