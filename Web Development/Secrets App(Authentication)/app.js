require("dotenv").config()
const express = require("express")
const mongoose = require("mongoose")
const encrypt = require("mongoose-encryption")
const port = process.env.PORT || 3000
const app = express()

mongoose.connect("mongodb://localhost:27017/userDB",{useUnifiedTopology : true, useNewUrlParser : true})

const userSchema = new mongoose.Schema({
    email : {
        type : String,
        required : true
    },
    password : {
        type : String,
        required : true
    }
})
console.log(process.env.SECRET);
userSchema.plugin(encrypt,{secret : process.env.SECRET,encryptedFields: ['password']})

const User = new mongoose.model("User",userSchema)



app.use(express.static("public"))
app.use(express.urlencoded({extended : true}))
app.set("view engine","ejs")

app.get("/",(req,res)=>{
    res.render("home")
})

app.route("/register")
.get((req,res)=>{
    res.render("register")
})
.post((req,res)=>{
    let newUser = new User({
        email : req.body.username,
        password : req.body.password
    })
    newUser.save((err)=>{
        if(err){
            console.log(err);
        }else{
            res.render("secrets")
        }
    })
})

app.route("/login")
.get((req,res)=>{
    res.render("login")
})
.post((req,res)=>{
    let userName = req.body.username
    let password = req.body.password
    User.findOne({email : userName},(err,results)=>{
        if(err){
            console.log(err);
        }else{
            if(results){
                if(results.password == password){
                    res.render("secrets")
                }
            }
        }
    })
})

app.listen(port,(err)=>{
    if(err){
        console.log("Something went wrong, Error : ",err);
    }else{
        console.log("Server is listening on port : ",port);
    }
})