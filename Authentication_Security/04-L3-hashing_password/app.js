//jshint esversion:6
const express = require("express")
const bodyParser = require("body-parser")
const ejs = require("ejs")
const mongoose = require("mongoose")
const md5 = require("md5")
require("dotenv").config()

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
  const newUser=new User({
    email:req.body.username,
    password:md5(req.body.password),
  })
  await newUser.save()
  res.render("secrets")
})

app.post("/login",async function(req,res) {
  const username=req.body.username
  const password=md5(req.body.password)
  const user=await User.findOne({email:username}).exec()
  console.log(user)
  if (user) {
    if (user.password===password) res.render("secrets")
  }
})


app.listen(3000, function() {
  console.log("Server started on port 3000.");
});
