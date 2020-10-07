const mongoose=require ('mongoose');
const schema=mongoose.Schema

const contactSchema= new schema(
    {
        name:{type:String},
        email:{type:String},
        phone:{type:Number}
    }
)
module.exports=mongoose.model('contact',contactSchema)