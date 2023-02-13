import "./contactBook.css";
import { Link } from "react-router-dom";
import { handleDeleteContact } from "../services/contactBook";
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
import viewImg from "../assets/eye.png"
import contactoImg from "../assets/contactos.png";
import { UseContact } from "../hooks/UseContact";
export const ContactBook = () => {
  

  const {contact} = UseContact()

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
            <TableHeaderCell textAlignment="text-center">Nombre</TableHeaderCell>
            <TableHeaderCell textAlignment="text-center">Apellido</TableHeaderCell>
            <TableHeaderCell textAlignment="text-center">Correo Electrónico</TableHeaderCell>
            <TableHeaderCell textAlignment="text-center">Celular</TableHeaderCell>
            <TableHeaderCell textAlignment="text-center">Teléfon Fijo</TableHeaderCell>
            <TableHeaderCell textAlignment="text-center">Dirección</TableHeaderCell>
            <TableHeaderCell textAlignment="text-center">Acciones</TableHeaderCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {contact.map((datos) => (
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
            </TableCell >
            <TableCell textAlignment="text-center">
             {datos.fijo}
            </TableCell>
            <TableCell textAlignment="text-center">
             {datos.direccion}
            </TableCell>
            <TableCell textAlignment="text-center">
            <div className="btn-crud">
           {/* <Link to={"/view/"+ datos.id}>
          <button  className="btn-views">
            <img src={viewImg} width={"25px"} height={"25px"} />
          </button>
          </Link>*/}

        <button onClick={()=>handleDeleteContact(datos.id)} className="btn-delete">
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