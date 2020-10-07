const express =require ('express');
const app = express();
const dataBase =require('./config/connectDB')
const port=process.env.PORT||5000


app.use(express.json())
app.use('/contacts',require('./routes/contact'))
app.listen(port,(err)=>{
    err?console.log(err):console.log(`server is connected on port : ${port}`)
})
dataBase()