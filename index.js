const express=require("express");
const bodyParser=require("body-parser");
const app=express();
app.set('view engine','ejs');
app.use(bodyParser.urlencoded({extended:true}));
const mongoose=require("mongoose");
const bcrypt=require("bcrypt");
const saltRounds=10;


const schema1=new mongoose.Schema({
    name:{
        type:String
    },
    email:{
        type:String
    },
    password:{
        type:String
    }

});
const user=mongoose.model('shio',schema1);
const mongoURI="mongodb+srv://nagpalmansi072:Ni0qJ5waPWzrtOye@cluster0.vm5swaj.mongodb.net/"

mongoose.connect(mongoURI).then(()=>{console.log("connection succees");}).catch((err)=>console.log("no connection"));




app.get("/appointment",function(req,res){
    res.render("appointment");
})


app.get("/blog",function(req,res){
    res.render("blog");
})
app.get("/blog1",function(req,res){
    res.render("blog1");
})
app.get("/blog2",function(req,res){
    res.render("blog2");
})
app.get("/blog3",function(req,res){
    res.render("blog3");
})
app.get("/blog4",function(req,res){
    res.render("blog4");
})
app.get("/blog5",function(req,res){
    res.render("blog5");
})
app.get("/blog6",function(req,res){
    res.render("blog6");
})
app.get("/about",function(req,res){
    res.render("about");
})
app.get("/packages",function(req,res){
    res.render("packages");
})


app.get("/home",function(req,res){
    res.render("header");
})
app.get("/petgrooming",function(req,res){
    res.render("petgrooming");
})
app.get("/login",function(req,res){
    res.render("login");
})
app.get("/register",function(req,res){
    res.render("register");
})
app.get("/petboarding",function(req,res){
    res.render("petboarding");
})
app.get("/petdaycare",function(req,res){
    res.render("petdaycare");
})
app.get("/petdentistry",function(req,res){
    res.render("petdentistry");
})
app.get("/peteyecare",function(req,res){
    res.render("peteyecare");
})
app.get("/pethealthconsult",function(req,res){
    res.render("pethealthconsult");
})
app.get("/petradiography",function(req,res){
    res.render("petradiography");
})
app.get("/pettelehealth",function(req,res){
    res.render("pettelehealth");
})
app.get("/petvaccination",function(req,res){
    res.render("petvaccination");
})
app.get("/surgery",function(req,res){
    res.render("surgery");
})
app.get("/veticu",function(req,res){
    res.render("veticu");
})
app.get("/vetpath",function(req,res){
    res.render("vetpath");
})
app.get("/services",function(req,res){
    res.render("services");
})
app.post("/register",function(req,res){
    const name=req.body.name;
    const email=req.body.email;
    const password=req.body.password;
    bcrypt.hash(password, saltRounds, function(err, hash) {
        const person1=new user({name:name,email:email,password:hash});
        console.log(person1)
        person1.save();
        res.redirect("/login");
    });
})
app.post("/login",function(req,res){
    const email1=req.body.email;
    const pass1=req.body.pass;
    user.findOne({email:email1},function(err,found){
        if(!found){
            res.render("logininc");
        }
        if(found){
            bcrypt.compare(pass1,found.password,function(err,result){
                if(result===true){
                    res.render("packages");
                }
                else{
                    res.render("logininc");
                }
            });
        }
    });
});


app.listen(3000,function(req,res){
    console.log("server got started");
})