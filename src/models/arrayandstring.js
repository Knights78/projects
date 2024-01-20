const mongoose=require('mongoose')
const ARandSTRING=new mongoose.Schema({
    title: String,
    code: String,
    correctedcode:String,
    expectedOutput: String,
})
const arr=new mongoose.model("arrays",ARandSTRING)
module.exports={
    arr
};