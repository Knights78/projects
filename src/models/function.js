const mongoose=require('mongoose')
const MCQ1=new mongoose.Schema({
    title: String,
    code: String,
    options:[String],
    expectedOutput: String,
})
const func=new mongoose.model("functions",MCQ1)
module.exports={
    func
};