const mongoose=require('mongoose')
const MCQ2=new mongoose.Schema({
    title: String,
    code: String,
    options:[String],
    expectedOutput: String,
})
const arrJ=new mongoose.model("arrayjavas",MCQ2)
module.exports={
    arrJ
};