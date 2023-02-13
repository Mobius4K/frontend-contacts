import { Card } from "@tremor/react";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { editContact, getcontact } from "../services/contactBook";
import "./editcontac.css";
import swal from "sweetalert";
export const EditContact = () => {
  //Estados para obtener los registros de cada uno de los campos de la libreta de contacto
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [celular, setCelular] = useState("");
  const [fijo, setFijo] = useState("");
  const [correo, setCorreo] = useState("");
  const [direccion, setDireccion] = useState("");

  const { id } = useParams();
  const navigate = useNavigate();

  //funcion para capturar cada uno de los datos
  const data: Object = {
    nombre: nombre,
    apellido: apellido,
    celular: celular,
    fijo: fijo,
    correo: correo,
    direccion: direccion,
  };

  // funcion para actualizar el formulario con los registros
  const updateContact = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    swal({
      text: "¿Desea editar el siguiente registro?",
      icon: "warning",
      buttons: ["NO", "SI"],
    }).then((respuesta) => {
      if (respuesta) {
        const res = editContact(id, data);
        console.log(res);
        navigate("/");
      }
    });
  };

  //funcion para obtener el valor de un registro dependiendo de su ID
  const getData = async (id: string) => {
    const res = await getcontact(id);
    setNombre(res.nombre);
    setApellido(res.apellido);
    setCelular(res.celular);
    setFijo(res.fijo);
    setCorreo(res.correo);
    setDireccion(res.direccion);
  };

  useEffect(() => {
    getData(id);
  }, [id]);

  return (
    <Card maxWidth="max-w-2xl" marginTop="mt-10">
      <h2 className="editTitle">Editar Contacto</h2>

      <form className="form" onSubmit={updateContact}>
        <input
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          className="inputs"
          type="text"
        />
        <input
          value={apellido}
          onChange={(e) => setApellido(e.target.value)}
          className="inputs"
          type="text"
        />
        <input
          value={celular}
          onChange={(e) => setCelular(e.target.value)}
          className="inputs"
          type="text"
        />

        <input
          value={fijo}
          onChange={(e) => setFijo(e.target.value)}
          className="inputs"
          type="text"
        />
        <input
          value={correo}
          onChange={(e) => setCorreo(e.target.value)}
          className="inputs"
          type="text"
        />
        <input
          value={direccion}
          onChange={(e) => setDireccion(e.target.value)}
          className="inputs"
          type="text"
        />
        <button className="btn-submit" type="submit">
          Guardar
        </button>
      </form>
    </Card>
  );
};
