import React,{useEffect} from 'react'
import {connect,useSelector,useDispatch} from 'react-redux'
import {getContacts} from "../redux/actions/action"


const ContactCard = () => {
    const contacts=useSelector((state)=>state.contacts);
 const dispatch = useDispatch()
useEffect(() => {
    dispatch(getContacts())
})
    return (
        <div>

            <ul>
            {contacts.map((el,index)=>(
            <li index={index}>{el.name} : {el.email} : {el.phone}</li>



            ))}
            </ul>
        </div>
    )
}

export default connect() (ContactCard)
