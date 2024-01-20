const mongoose=require('mongoose')
const MCQ2=new mongoose.Schema({
    title: String,
    code: String,
    options:[String],
    expectedOutput: String,
})
const Jvar=new mongoose.model("variablejavas",MCQ2)
module.exports={
    Jvar
};