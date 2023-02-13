import axios from "axios";


export const contact = async () => {
  const res = await fetch(import.meta.env.VITE_URL_BACK);
  const result = await res.json();
  return result;
};

export const contacts = async (id: number) => {
  const res = await fetch(`${import.meta.env.VITE_URL_BACK}/${id}`);
  const result = await res.json();
  return result;
};

export const crateContacts = async (data: Object) => {
  axios.post(import.meta.env.VITE_URL_BACK, data);
};

export const editContact = (id:number) =>{
    axios.put(`${import.meta.env.VITE_URL_BACK}/${id}`)
}



 
