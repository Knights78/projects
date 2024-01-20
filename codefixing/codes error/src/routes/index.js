const express=require("express")
const router=express.Router()
const CodeExample=require("../models/CodeExample")//get the codeexample schema 
router.get("/c",async(req,res)=>{
    try{
    const examplescode=await CodeExample.find()//this will extract all the data from the database i.e from the codeproblems which is been exported
    //console.log(examplescode)
    res.render("codes.hbs",{examplescode})//why in curly braces because examplescode contain multiple data thats why we are passing the data as an object 
    }
    catch(err)
    {
        console.log(err)
    }

})
router.get('/c/:id', async (req, res) => {
    try {
      const diffcodes = await CodeExample.findById(req.params.id);
      const examplescode = await CodeExample.find();
      res.render('codes.hbs', { examplescode, selectedCodeExample: diffcodes });
      
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });
  router.post('/c/:id/submit',async (req,res)=>{
    try{
    const examplecode=await CodeExample.findById(req.params.id)//the question user has chosen it has id because of that is we are extracting the data from databse and comparing 
    const examplescode=await CodeExample.find()//this will extract all the data from databasse
    

    const usercode= await req.body.userCode
    const correctboolean=(usercode===examplecode.expectedOutput)
    const message=correctboolean?"your answer is correct":"try again "
   
    res.render('codes.hbs',{examplescode,examplecode,message})
    }
    catch(err)
    {
        console.log(err);
    }

})
module.exports = router;

/*router.get('/code/:id',async (req,res)=>{
    try{
        const examplecode=await CodeExample.findById(req.params.id)//this line will find the code which is there in codeproblems which i have exported and i have required it here codeExample here is the just the variable name representing it so it will find that id
        console.log(examplecode);
        res.render('codeExample.hbs',{examplecode})
    }
    catch(err)
    {
        console.log(err);
    }
})*/

