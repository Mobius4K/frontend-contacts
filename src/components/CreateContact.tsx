import "./createContact.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import imgcontacto from "../assets/comunicar.png";
import { crateContacts } from "../services/contactBook";
import swal from 'sweetalert';

interface DATA {
  nombre: string;
  apellido: string;
  celular: string;
  fijo: string;
  correo: string;
  direccion: string;
}

export const CreateContact = (): JSX.Element => {

  const navigate = useNavigate()

  const [contact, setContact] = useState<DATA>({
    nombre: "",
    apellido: "",
    celular: "",
    fijo: "",
    correo: "",
    direccion: "",
  });

  const updateState = (e: React.ChangeEvent<HTMLInputElement>) => {
    setContact({
      ...contact,
      [e.target.name]: e.target.value,
    });
  };

  const handleChange = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    swal({
      text:"¿Desea guardar el siguiente contacto?",
      icon:"warning",
      buttons:["NO","SI"]
    }).then(respueta=>{

      if(respueta){
        crateContacts(contact)
        navigate("/")
      }
    })

  };

  return (
    <div>
             <div className="title">
        <img src={imgcontacto} width="50px" />
        <h1> Crear contacto</h1>
      </div>

      <form onSubmit={handleChange} id="resetform">
    <div className="container-fluid">
        
       
          <div className="input">
            <label htmlFor="nombre">Nombre</label>
            <input
              onChange={updateState}
              name="nombre"
              type="text"
              id="nombre"
              placeholder="Digitar nombre"
              value={contact.nombre}
              required
            />
          </div>
          <div className="input">
            <label htmlFor="apellido">Apellido</label>
            <input
              onChange={updateState}
              name="apellido"
              type="text"
              id="apellido"
              placeholder="Digitar apellido"
              value={contact.apellido}

              required
            />
          </div>
          <div className="input">
            <label htmlFor="celular">Teléfono Celular</label>
            <input
              onChange={updateState}
              name="celular"
              type="text"
              id="celular"
              placeholder="Digitar telefono"
              value={contact.celular}

              required
            />
          </div>

          <div className="input">
            <label htmlFor="fijo">Teléfono Fijo</label>
            <input
              onChange={updateState}
              name="fijo"
              type="text"
              id="fijo"
              placeholder="Digitar telefono fijo"
              value={contact.fijo}

              required
            />
          </div>
          <div className="input">
            <label htmlFor="correo">Correo Electrónico</label>
            <input
              onChange={updateState}
              name="correo"
              type="text"
              id="correo"
              placeholder="Digitar correo"
              value={contact.correo}

              required
            />
          </div>
          <div className="input">
            <label htmlFor="direccion">Dirección</label>
            <input
              onChange={updateState}
              name="direccion"
              type="text"
              id="direccion"
              placeholder="Digitar direccion"
              value={contact.direccion}

              required
            />
          </div>

          <button  type="submit" className="btn-createContact">
           Guardar
          </button>
              <button className="btn-return" onClick={()=>navigate("/")}> Regresar </button>
        </div>
      </form>
    </div>
  );
};
