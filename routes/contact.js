const express = require('express');
const router = express.Router();
const Contact=require('../models/Contact')


// add contact
router.post('/addContact',(req,res)=>{
    const {name,email,phone}=req.body
    const newContact= new Contact(req.body)
    newContact.save()
    .then((contacts)=>res.send(contacts))
    .catch(err=>res.send(err))

})
// get the list 
router.get('/all',(req,res)=>{
    Contact.find()
    .then((contacts)=>res.send(contacts))
    .catch(err=>res.send(err))
}) 
// update contact
router.put('/updateContact/:_id',(req,res)=>{
    const {_id}=req.params
    const {name,email,phone}=req.body
    Contact.findOneAndUpdate({_id},{$set:{name,email,phone}})
    .then((contacts)=>res.send(contacts))
    .catch(err=>res.send(err))
})

// delete contact
router.delete('/deleteContact/:_id',(req,res)=>{
    const {_id}=req.params;
    Contact.findByIdAndDelete({_id})
    .then(()=>res.send("deleted"))
    .catch(err=>console.log(err))

})

module.exports=router