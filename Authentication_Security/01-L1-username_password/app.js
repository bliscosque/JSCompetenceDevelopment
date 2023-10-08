//jshint esversion:6
const express = require("express")
const bodyParser = require("body-parser")
const ejs = require("ejs")
const mongoose = require("mongoose")

const app = express()
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));

mongoose.connect("mongodb://localhost:27017/userDB", {useNewUrlParser: true});

const userSchema={
  email:String,
  password:String,
}

const User=new mongoose.model("User",userSchema)

app.get("/", function(req, res){
  res.render("home");
});


app.get("/login", function(req, res){
  res.render("login");
});

app.get("/register", function(req, res){
  res.render("register");
});

app.post("/register", function(req,res) {
  const newUser=new User({
    email:req.body.username,
    password:req.body.password
  })
  newUser.save()
  res.render("secrets")
})

app.post("/login",async function(req,res) {
  const username=req.body.username
  const password=req.body.password
  const user=await User.findOne({email:username}).exec()
  console.log(user)
  if (user) {
    if (user.password===password) res.render("secrets")
  }
})


app.listen(3000, function() {
  console.log("Server started on port 3000.");
});
