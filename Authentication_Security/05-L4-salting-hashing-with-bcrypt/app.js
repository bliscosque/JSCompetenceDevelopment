//jshint esversion:6
const express = require("express")
const bodyParser = require("body-parser")
const ejs = require("ejs")
const mongoose = require("mongoose")
const bcrypt = require("bcrypt")
require("dotenv").config()

const saltRounds=10

const app = express()

app.use(express.static("public"));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({
  extended: true
}));

mongoose.connect("mongodb://localhost:27017/userDB", {useNewUrlParser: true});

const userSchema = new mongoose.Schema({
  email:String,
  password:String,
})

const secret=process.env.SECRET
console.log(secret)


const User = new mongoose.model("User", userSchema)

app.get("/", function(req, res){
  res.render("home");
});

app.get("/login", function(req, res){
  res.render("login");
});

app.get("/register", function(req, res){
  res.render("register");
});

app.post("/register", async function(req,res) {
  bcrypt.hash(req.body.password,saltRounds,async function (err,hash) {
    const newUser=new User({
      email:req.body.username,
      password:hash,
    })
    await newUser.save()
    res.render("secrets")
  }
  )
})

app.post("/login",async function(req,res) {
  const username=req.body.username
  const password=req.body.password
  const user=await User.findOne({email:username}).exec()
  console.log(user)
  if (user) {
    bcrypt.compare(password,user.password, function (err,result) {
      if (result===true) res.render("secrets");
    })
  }
})


app.listen(3000, function() {
  console.log("Server started on port 3000.");
});
