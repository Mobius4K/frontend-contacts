import axios from "axios";


// Cramos esta funcion para obtener todos los registros
export const getcontacts = async () => {
  const res = await fetch(import.meta.env.VITE_URL_BACK);
  const result = await res.json();
  return result;
};


// Creamos esta funcion para  obtener un registro mediante su ID
export const getcontact = async (id: string) => {
  const res = await fetch(`${import.meta.env.VITE_URL_BACK}/${id}`);
  const result = await res.json();
  return result;
};


// Creamos esta funcion para enviar los registros capturados mediante el Metodo POST

export const crateContacts = async (data: Object) => {
  axios.post(import.meta.env.VITE_URL_BACK, data);
};


// Creamos esta funcion para editar un registro mediante su ID
export const editContact = async (id:string, data:Object) =>{
    return  await axios.put(`${import.meta.env.VITE_URL_BACK}/${id}`,data)
}



 
