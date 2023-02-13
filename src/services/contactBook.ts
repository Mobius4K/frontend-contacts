import axios from "axios"

import swal from "sweetalert"

export const contacts  = async()=>{

    const res = await fetch (import.meta.env.VITE_URL_BACK);
    const result = await res.json();
    return result;

} 

export const contact  = async(id:number)=>{

    const res = await fetch (`${import.meta.env.VITE_URL_BACK}/${id}`);
    const result = await res.json();
    return result;

} 

export const crateContacts = async(data:Object)=>{
   
            axios.post(import.meta.env.VITE_URL_BACK,data)

}


export const handleDeleteContact = (id:number) =>{
    swal({
        text:"¿Desea eliminar el siguiente contacto?",
        icon:"warning",
        buttons:["NO","SI"]
    }).then(respuesta =>{
        if(respuesta){
            axios.delete(`${import.meta.env.VITE_URL_BACK}/${id}`)
            window.location.reload()
        }
    }
          

    )
    }
