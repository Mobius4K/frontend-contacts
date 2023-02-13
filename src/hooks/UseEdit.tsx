import { useState, useEffect } from 'react';


interface DATA {
    id: number;
    nombre: string;
    apellido: string;
    celular: string;
    fijo: string;
    correo: string;
    direccion: string;
  }
  
export const UseEdit =()=>{

    const [editContactBook, setEditContactBook] = useState<DATA[]>([]);

    //Creamos una constante para almacenar la URL de la api la cual tenemos creada con una variable de entorno
    const URL = import.meta.env.VITE_URL_BACK;
    const datasContact = () => {
      fetch(URL)
        .then((res) => res.json())
        .then((data) => setEditContactBook(data));
    };
    useEffect(() => {
      datasContact();
    }, []);



return{
    editContactBook,
    setEditContactBook,

}



}