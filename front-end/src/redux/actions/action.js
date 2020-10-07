import {GET_CONTACTS} from "./actionTypes"
import Axios from "axios"
 
export const getContacts=()=>(dispatch)=>{
    return Axios.get('/contacts/all')
    .then((res)=>dispatch({type:GET_CONTACTS,payload:res.data}))
    .catch(err=>console.log(err))
}
export const AddContact=()=>(dispatch)=>{
    Axios.post('/contacts/addContact')
    .then((res)=>dispatch(getContacts()))
    .catch(err=>console.log(err))
}

