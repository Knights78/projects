const mongoose = require('mongoose');
const signin=mongoose.Schema({  //creating the schema how data should be there
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})
const collection1=new mongoose.model("dataofsignin",signin)
module.exports={
    collection1,
};