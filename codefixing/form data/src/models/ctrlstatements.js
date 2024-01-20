const mongoose=require('mongoose')
const MCQ=new mongoose.Schema({
    title: String,
    code: String,
    options:[String],
    expectedOutput: String,
})
const mcq=new mongoose.model("ctrlstatements",MCQ)
module.exports={
    mcq
};