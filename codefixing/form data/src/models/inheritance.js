const mongoose=require('mongoose')
const MCQ2=new mongoose.Schema({
    title: String,
    code: String,
    options:[String],
    expectedOutput: String,
})
const Inheri=new mongoose.model("inheritances",MCQ2)
module.exports={
    Inheri
};