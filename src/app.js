const express=require("express")
const session=require("express-session")
const app=express()

const path=require("path");
const hbs=require("hbs");
const { connectMongoDB } = require('./mongo')//getting the mongo db file
const templatepath=path.join(__dirname,'../templates')//to acces the template files
// In your main app file

const collection = require("./models/signup").collection;
const collection1 = require("./models/signin").collection1;
//const books=new require("./mongo").mybook
connectMongoDB();
app.use(
    session({
      secret: "your-secret-key",
      resave: false,
      saveUninitialized: true,
    })
  );


app.use(express.json())
app.set('view engine','hbs')//our view engine is hbs
app.set("views",templatepath)//instead of view we are using templates we are telling that
app.use(express.urlencoded({extended:false}))
app.use(express.static('public'))


app.use('/', require('./routes/index'));


app.get("/",(req,res)=>{
    res.render("home.hbs")
})
app.get("/form",(req,res)=>{
    res.render("form.hbs")
})

app.post("/form",async(req,res)=>{
    const action=req.body.action
    if(action=="signup")
    {
        let data = {
            name: req.body.name1,
            email: req.body.email,
            password: req.body.password,
        };
    
    
        await collection.insertMany([data]);
        res.redirect("/home")
        return
    }
    else if(action=="signin")
    console.log("sign in completed")
    {
        const email=req.body.email
        const password=req.body.password
        try{
        const user = await collection.findOne({ email, password });
        if(user)//if it is tru means there is such email and password in database then only it will redirect to that homepage
        {
            res.redirect("/home")
           
        }
        else{
            res.render("form.hbs",{error:"Invalid email or password"})
        }

        }
        catch(err)
        {
            console.log(err)
        }


    }

})
app.get("/home",(req,res)=>{
    res.render("home.hbs")
})


app.listen(3010,(req,res)=>{
    console.log("successfully connected on port")
})

/*app.get("/bookdata", async (req, res) => {
    try {
        // Use Mongoose to query the "checking" collection and include all fields except _id
        const mydata = await books.find({});
        console.log(mydata);

        // Render a template with the fetched data
        res.render("checkingdata.hbs", { mydata });
    } catch (error) {
        console.error(error);
        // Handle errors, e.g., send an error response
        res.status(500).json({ error: "Internal Server Error" });
        
    }
});*/




/*app.post("/form",async (req,res)=>{
    let data={
        name:req.body.name1,
        email:req.body.email,
        password:req.body.password
    }
    await collection.insertMany([data])
    res.render("home.hbs")
})*/

/*app.post("/form",async (req,res)=>{
    let data1={
        
        email:req.body.email,
        password:req.body.password
    }
    await collection1.insertMany([data1])
    
    res.render("home.hbs")
})*/
