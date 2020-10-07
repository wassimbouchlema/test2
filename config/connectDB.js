const mongoose=require('mongoose');



const dataBase = ()=>{
mongoose.connect('mongodb://localhost:27017/contactBase',{useNewUrlParser:true,useUnifiedTopology:true})
.then(()=>{console.log('connected successfuly to Database')})
.catch(()=>{console.log('cannot')})
}


module.exports=dataBase