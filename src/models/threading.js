const mongoose=require('mongoose')
const MCQ2=new mongoose.Schema({
    title: String,
    code: String,
    options:[String],
    expectedOutput: String,
})
const thr=new mongoose.model("threads",MCQ2)
module.exports={
    thr
};