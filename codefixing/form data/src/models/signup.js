const mongoose = require('mongoose');
const loginschema=mongoose.Schema({  //creating the schema how data should be there
    name:{
        type:String,
        required:false
    },
    password:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    }

})
const collection=new mongoose.model("datas",loginschema)
module.exports={
    collection
};