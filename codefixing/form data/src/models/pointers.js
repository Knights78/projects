const mongoose=require('mongoose')
const MCQ2=new mongoose.Schema({
    title: String,
    code: String,
    options:[String],
    expectedOutput: String,
})
const point=new mongoose.model("pointers",MCQ2)
module.exports={
    point
};