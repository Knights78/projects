const express=require("express")
const router=express.Router()
const CodeExample=require("../models/CodeExample")//get the codeexample schema
const ctrlstatements=require("../models/ctrlstatements").mcq//get the ctrlstatments shcema  //as an variabke i have passed i.e mcq iswritten
const arraysproblem=require("../models/arrayandstring").arr
const functioncodes=require("../models/function").func
const pointersproblem=require("../models/pointers").point
const JAVAvariables=require("../models/variableJ").Jvar
const arrayques=require("../models/arrayJ").arrJ
const inheritanceques=require("../models/inheritance").Inheri
const excepques=require("../models/exception").exception
const threadques=require("../models/threading").thr

router.get("/variablesC",async(req,res)=>{
    try{
    const examplescode=await CodeExample.find()//this will extract all the data from the database i.e from the codeproblems which is been exported all the codes will be seen 
    //console.log(examplescode)
    res.render("codes.hbs",{examplescode})//why in curly braces because examplescode contain multiple data thats why we are passing the data as an object 
    }
    catch(err)
    {
        console.log(err)
    }

})
router.get('/variablesC/:id', async (req, res) => {//whenever i will click on the main heading of the code shown 
    try {
      const diffcodes = await CodeExample.findById(req.params.id);//which ever is clicked get that all the data which is schema
      const examplescode = await CodeExample.find();
      res.render('codes.hbs', { examplescode, selectedCodeExample: diffcodes });
      
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });
  router.post('/variablesC/:id/submit',async (req,res)=>{
    try{
      if (!req.session.totalScore) {
        req.session.totalScore = 0; // Initialize the total score if it doesn't exist in the session
      }
    const examplecode=await CodeExample.findById(req.params.id)//the question user has chosen it has id because of that is we are extracting the data from databse and comparing 
    const examplescode=await CodeExample.find()//this will extract all the data from databasse
    

    const usercode= await req.body.userCode//what ever has user entered in the textbox of answer
    const correctboolean=(usercode===examplecode.expectedOutput)
    if (usercode === examplecode.expectedOutput) {
      req.session.totalScore += 10; // Increment the total score for a correct answer
    }

    const message=correctboolean?"Your Answer is Correct!":"Try Again!"
    res.render('codes.hbs',{examplescode,examplecode,message,totalScore: req.session.totalScore})
   
    }
    catch(err)
    {
        console.log(err);
    }

})
//MCQ part or ctrl statements part
router.get("/ctrlC",async (req,res)=>{
    try{
        const examplescode=await ctrlstatements.find()//this will extract all the data from the database i.e from the ctrlstatements which is been exported
        //console.log(examplescode)
        res.render("ctrlstatements.hbs",{examplescode})//why in curly braces because examplescode contain multiple data thats why we are passing the data as an object 
        }
        catch(err)
        {
            console.log(err)
        }

})
router.get('/ctrlC/:id',async (req,res)=>{
    try {
        const diffcodes = await ctrlstatements.findById(req.params.id);
        const examplescode = await ctrlstatements.find();//because i want to render the all list again that is why i am taking all the dta from database
        res.render('ctrlstatements.hbs', { examplescode, selectedCodeExample: diffcodes });
        
      } catch (err) {
        res.status(500).json({ message: err.message });
      }

})

router.post('/ctrlC/:id/submit',async (req,res)=>{
    try{
        
        if (!req.session.totalScore) {
            req.session.totalScore = 0; // Initialize the total score if it doesn't exist in the session
          }
        const examplecode=await ctrlstatements.findById(req.params.id)//the question user has chosen it has id because of that is we are extracting the data from databse and comparing 
        const examplescode=await ctrlstatements.find()//this will extract all the data from databasse  "exampales"
        
        const usercode= await req.body.userCode
        const correctboolean=(usercode===examplecode.expectedOutput)
        if (usercode === examplecode.expectedOutput) {
            req.session.totalScore += 10; // Increment the total score for a correct answer
          }
        const message=correctboolean?"your answer is correct":"try again "
       
        res.render('ctrlstatements.hbs',{examplescode,examplecode,message,totalScore: req.session.totalScore})
        }
        catch(err)
        {
            console.log(err);
        }
})

//for ARRAYS AND STRINGS
router.get("/arrayC",async(req,res)=>{
  try{
    const examplescode=await arraysproblem.find()//this willl extract all the data from data base "arrays"
    
    res.render("array.hbs",{examplescode})


  }
  catch(err){
    console.log(err);
  }
})
router.get("/arrayC/:id",async(req,res)=>{
  try{
  const diffcodes =await arraysproblem.findById(req.params.id)//whichever id title is clicked that is stored in examplecode now
  const examplescode=await arraysproblem.find()//all the codes i need to dislpay on the left side
  res.render("array.hbs",{examplescode,selectedCodeExample:diffcodes})

  }
  catch(err){
    console.log(err);

  }
})


router.post("/arrayC/:id/submit",async(req,res)=>{
  try{
    let correctboolean=false
    const examplecode=await arraysproblem.findById(req.params.id)//the question user has chosen it has id because of that is we are extracting the data from databse and comparing 
    const examplescode=await arraysproblem.find()//this will extract all the data from databasse
    const codeId = req.body.codeId;
   
    

    const usercode= await req.body.userCode.replace(/\s/g, '')//what ever has user entered in the textbox of answer
    const expectedcode=examplecode.correctedcode.replace(/\s/g, '')//.replace is us3d to to remove any ehite white spaces for efficient comparison
    console.log(usercode)
    console.log(expectedcode)
    if(usercode===expectedcode)
    {
      correctboolean=true
      req.session.codeIsSubmitted=true
    }
    const message=correctboolean?"true":"false"
    const messageIsTrue=correctboolean 
    console.log(messageIsTrue)
   
    res.render("array.hbs", { examplescode, message,messageIsTrue, selectedCodeExample: { _id: codeId,messageIsTrue,correctedcode: examplecode.correctedcode } });

  }
  catch(err)
  {
    console.log(err)
  }
})
router.post("/arrayC/:id/submit-output",async(req,res)=>{
  try{
    if (!req.session.totalScore) {
      req.session.totalScore = 0; // Initialize the total score if it doesn't exist in the session
    }
    const examplecode=await arraysproblem.findById(req.params.id)
    const examplescode=await arraysproblem.find()//
    const usercode=await req.body.userOutput
    const expectedcode=examplecode.expectedOutput
    let message=""
    if(usercode==expectedcode)
    {
      req.session.totalScore += 10;
       message="your question is correct"
    }
    else{
       message="output is wrong"
    }
    res.render("array.hbs", { examplescode, message,totalScore: req.session.totalScore });
  }
  catch(err){
    console.log(err);
  }
})


//<<<<!!!!1for functions C section!!>>>>>

router.get("/functionC",async(req,res)=>{
  try{
    const examplescode=await functioncodes.find()//this will extract all the data from the database i.e from the ctrlstatements which is been exported
    //console.log(examplescode)
    res.render("function.hbs",{examplescode})//why in curly braces because examplescode contain multiple data thats why we are passing the data as an object 
    }
    catch(err)
    {
        console.log(err)
    }

})
router.get("/functionC/:id",async (req,res)=>{
  try {
    const diffcodes = await functioncodes.findById(req.params.id);
    const examplescode = await functioncodes.find();//because i want to render the all list again that is why i am taking all the dta from database
    res.render('function.hbs', { examplescode, selectedCodeExample: diffcodes });
    
  } catch (err) {
    console.log(err);
  }
})

router.post("/functionC/:id/submit",async (req,res)=>{
  try{
    if (!req.session.totalScore) {
      req.session.totalScore = 0; // Initialize the total score if it doesn't exist in the session
    }
    const examplescode=await functioncodes.find()//this will extract all the adat from database
    const examplecode=await functioncodes.findById(req.params.id)
    
    const selectedOption= await req.body.selectedOption
   
    const correctboolean=(selectedOption===examplecode.expectedOutput)
        if (selectedOption === examplecode.expectedOutput) {
            req.session.totalScore += 10; // Increment the total score for a correct answer
          }
        const message=correctboolean?"your answer is correct":"try again "
      
       
        res.render('function.hbs',{examplescode,examplecode,message,totalscore:req.session.totalScore})
        }
        catch(err)
        {
          console.log(err)
        }
  
})

//!!!!<<<<<<pointers for c part>>>>>>>>>!!!!!!
router.get("/pointer",async(req,res)=>{
  try{
    const examplescode=await pointersproblem.find()//this will extract all the data from the database i.e from the ctrlstatements which is been exported
    //console.log(examplescode)
    res.render("pointers.hbs",{examplescode})//why in curly braces because examplescode contain multiple data thats why we are passing the data as an object 
    }
    catch(err)
    {
        console.log(err)
    }

})
router.get('/pointer/:id',async (req,res)=>{
  try {
    const diffcodes = await pointersproblem.findById(req.params.id);
    const examplescode = await pointersproblem.find();//because i want to render the all list again that is why i am taking all the dta from database
    res.render('pointers.hbs', { examplescode, selectedCodeExample: diffcodes });
    
  } catch (err) {
    console.log(err);
  }
})

router.post("/pointer/:id/submit",async (req,res)=>{
  try{
    if (!req.session.totalScore) {
      req.session.totalScore = 0; // Initialize the total score if it doesn't exist in the session
    }
    const examplescode=await pointersproblem.find()//this will extract all the adat from database
    const examplecode=await pointersproblem.findById(req.params.id)
    
    const selectedOption= await req.body.selectedOption
   
    const correctboolean=(selectedOption.replace(/\s/g, '')===examplecode.expectedOutput.replace(/\s/g, ''))
        if (selectedOption.replace(/\s/g, '') === examplecode.expectedOutput.replace(/\s/g, '')) {
            req.session.totalScore += 10; // Increment the total score for a correct answer
          }
        const message=correctboolean?"your answer is correct":"try again "
      
       
        res.render('pointers.hbs',{examplescode,examplecode,message,totalscore:req.session.totalScore})
        }
        catch(err)
        {
          console.log(err)
        }
  
})

//  ....................JAVA starts from here...................//

//varibles topic for java

router.get("/variableJ",async(req,res)=>{
  try{
    const examplescode=await JAVAvariables.find()//this will extract all the data from the database i.e from the ctrlstatements which is been exported
    //console.log(examplescode)
    res.render("variableJ.hbs",{examplescode})//why in curly braces because examplescode contain multiple data thats why we are passing the data as an object 
    }
    catch(err)
    {
        console.log(err)
    }

})
router.get('/variableJ/:id',async (req,res)=>{
  try {
    const diffcodes = await JAVAvariables.findById(req.params.id);
    const examplescode = await JAVAvariables.find();//because i want to render the all list again that is why i am taking all the dta from database
    res.render('variableJ.hbs', { examplescode, selectedCodeExample: diffcodes });
    
  } catch (err) {
    console.log(err);
  }
})

router.post("/variableJ/:id/submit",async (req,res)=>{
  try{
    if (!req.session.totalScore) {
      req.session.totalScore = 0; // Initialize the total score if it doesn't exist in the session
    }
    const examplescode=await JAVAvariables.find()//this will extract all the adat from database
    const examplecode=await JAVAvariables.findById(req.params.id)
    
    const selectedOption= await req.body.selectedOption
   
    const correctboolean=(selectedOption.replace(/\s/g, '')===examplecode.expectedOutput.replace(/\s/g, ''))
        if (selectedOption.replace(/\s/g, '') === examplecode.expectedOutput.replace(/\s/g, '')) {
            req.session.totalScore += 10; // Increment the total score for a correct answer
          }
        const message=correctboolean?"your answer is correct":"try again "
      
       
        res.render('variableJ.hbs',{examplescode,examplecode,message,totalscore:req.session.totalScore})
        }
        catch(err)
        {
          console.log(err)
        }
  
})
// for arrays and strings
router.get("/arrayJ",async(req,res)=>{
  try{
    const examplescode=await arrayques.find()//this will extract all the data from the database i.e from the ctrlstatements which is been exported
    //console.log(examplescode)
    res.render("arrayJ.hbs",{examplescode})//why in curly braces because examplescode contain multiple data thats why we are passing the data as an object 
    }
    catch(err)
    {
        console.log(err)
    }

})
router.get('/arrayJ/:id',async (req,res)=>{
  try {
    const diffcodes = await arrayques.findById(req.params.id);
    const examplescode = await arrayques.find();//because i want to render the all list again that is why i am taking all the dta from database
    res.render('arrayJ.hbs', { examplescode, selectedCodeExample: diffcodes });
    
  } catch (err) {
    console.log(err);
  }
})

router.post("/arrayJ/:id/submit",async (req,res)=>{
  try{
    if (!req.session.totalScore) {
      req.session.totalScore = 0; // Initialize the total score if it doesn't exist in the session
    }
    const examplescode=await arrayques.find()//this will extract all the adat from database
    const examplecode=await arrayques.findById(req.params.id)
    
    const selectedOption= await req.body.selectedOption
   
    const correctboolean=(selectedOption.replace(/\s/g, '')===examplecode.expectedOutput.replace(/\s/g, ''))
        if (selectedOption.replace(/\s/g, '') === examplecode.expectedOutput.replace(/\s/g, '')) {
            req.session.totalScore += 10; // Increment the total score for a correct answer
          }
        const message=correctboolean?"your answer is correct":"try again "
      
       
        res.render('arrayJ.hbs',{examplescode,examplecode,message,totalscore:req.session.totalScore})
        }
        catch(err)
        {
          console.log(err)
        }
  
})


//.............. for inheritance................................

router.get("/inheritance",async(req,res)=>{
  try{
    const examplescode=await inheritanceques.find()//this will extract all the data from the database i.e from the ctrlstatements which is been exported
    //console.log(examplescode)
    res.render("inheritance.hbs",{examplescode})//why in curly braces because examplescode contain multiple data thats why we are passing the data as an object 
    }
    catch(err)
    {
        console.log(err)
    }

})
router.get('/inheritance/:id',async (req,res)=>{
  try {
    const diffcodes = await inheritanceques.findById(req.params.id);
    const examplescode = await inheritanceques.find();//because i want to render the all list again that is why i am taking all the dta from database
    res.render('inheritance.hbs', { examplescode, selectedCodeExample: diffcodes });
    
  } catch (err) {
    console.log(err);
  }
})

router.post("/inheritance/:id/submit",async (req,res)=>{
  try{
    if (!req.session.totalScore) {
      req.session.totalScore = 0; // Initialize the total score if it doesn't exist in the session
    }
    const examplescode=await inheritanceques.find()//this will extract all the adat from database
    const examplecode=await inheritanceques.findById(req.params.id)
    
    const selectedOption= await req.body.selectedOption
   
    const correctboolean=(selectedOption.replace(/\s/g, '')===examplecode.expectedOutput.replace(/\s/g, ''))
        if (selectedOption.replace(/\s/g, '') === examplecode.expectedOutput.replace(/\s/g, '')) {
            req.session.totalScore += 10; // Increment the total score for a correct answer
          }
        const message=correctboolean?"your answer is correct":"try again "
      
       
        res.render('inheritance.hbs',{examplescode,examplecode,message,totalscore:req.session.totalScore})
        }
        catch(err)
        {
          console.log(err)
        }
  
})
//.....exception....//
router.get("/exception",async(req,res)=>{
  try{
    const examplescode=await excepques.find()//this will extract all the data from the database i.e from the ctrlstatements which is been exported
    //console.log(examplescode)
    res.render("exception.hbs",{examplescode})//why in curly braces because examplescode contain multiple data thats why we are passing the data as an object 
    }
    catch(err)
    {
        console.log(err)
    }

})
router.get('/exception/:id',async (req,res)=>{
  try {
    const diffcodes = await excepques.findById(req.params.id);
    const examplescode = await excepques.find();//because i want to render the all list again that is why i am taking all the dta from database
    res.render('exception.hbs', { examplescode, selectedCodeExample: diffcodes });
    
  } catch (err) {
    console.log(err);
  }
})

router.post("/exception/:id/submit",async (req,res)=>{
  try{
    if (!req.session.totalScore) {
      req.session.totalScore = 0; // Initialize the total score if it doesn't exist in the session
    }
    const examplescode=await excepques.find()//this will extract all the adat from database
    const examplecode=await excepques.findById(req.params.id)
    
    const selectedOption= await req.body.selectedOption
   
    const correctboolean=(selectedOption.replace(/\s/g, '')===examplecode.expectedOutput.replace(/\s/g, ''))
        if (selectedOption.replace(/\s/g, '') === examplecode.expectedOutput.replace(/\s/g, '')) {
            req.session.totalScore += 10; // Increment the total score for a correct answer
          }
        const message=correctboolean?"your answer is correct":"try again "
      
       
        res.render('exception.hbs',{examplescode,examplecode,message,totalscore:req.session.totalScore})
        }
        catch(err)
        {
          console.log(err)
        }
  
})
//............threads...................//
router.get("/threads",async(req,res)=>{
  try{
    const examplescode=await threadques.find()//this will extract all the data from the database i.e from the ctrlstatements which is been exported
    //console.log(examplescode)
    res.render("threading.hbs",{examplescode})//why in curly braces because examplescode contain multiple data thats why we are passing the data as an object 
    }
    catch(err)
    {
        console.log(err)
    }

})
router.get('/threads/:id',async (req,res)=>{
  try {
    const diffcodes = await threadques.findById(req.params.id);
    const examplescode = await threadques.find();//because i want to render the all list again that is why i am taking all the dta from database
    res.render('threading.hbs', { examplescode, selectedCodeExample: diffcodes });
    
  } catch (err) {
    console.log(err);
  }
})

router.post("/threads/:id/submit",async (req,res)=>{
  try{
    if (!req.session.totalScore) {
      req.session.totalScore = 0; // Initialize the total score if it doesn't exist in the session
    }
    const examplescode=await threadques.find()//this will extract all the adat from database
    const examplecode=await threadques.findById(req.params.id)
    
    const selectedOption= await req.body.selectedOption
   
    const correctboolean=(selectedOption.replace(/\s/g, '')===examplecode.expectedOutput.replace(/\s/g, ''))
        if (selectedOption.replace(/\s/g, '') === examplecode.expectedOutput.replace(/\s/g, '')) {
            req.session.totalScore += 10; // Increment the total score for a correct answer
          }
        const message=correctboolean?"your answer is correct":"try again "
      
       
        res.render('threading.hbs',{examplescode,examplecode,message,totalscore:req.session.totalScore})
        }
        catch(err)
        {
          console.log(err)
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

