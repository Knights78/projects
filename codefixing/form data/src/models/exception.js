const mongoose=require('mongoose')
const MCQ2=new mongoose.Schema({
    title: String,
    code: String,
    options:[String],
    expectedOutput: String,
})
const exception=new mongoose.model("exceptions",MCQ2)
module.exports={
    exception
};