import express from "express";
import bodyParser from "body-parser"
import mongoose, { Mongoose } from 'mongoose'

const itemSchema=new mongoose.Schema({
  name: String
})
const Item=mongoose.model("Item",itemSchema)

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/todoListDB');

  // const item1=new Item({
  //   name: "Item 1"
  // })
  // const item2=new Item({
  //   name: "Item 2"
  // })
  // const item3=new Item({
  //   name: "Item 3"
  // })
  //await Item.insertMany([item1,item2,item3])

}
main().catch(err => console.log(err))

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

const items = ["Buy Food", "Cook Food", "Eat Food"];
const workItems = [];

app.get ("/", async function(req, res) {
  const items=await Item.find()
  res.render("list", {listTitle: "Today", newListItems: items});

});

app.post("/", async function(req, res){

  const itemName = req.body.newItem;
  const newItem=new Item({
    name:itemName
  })
  await newItem.save()
  res.redirect("/");

});

app.post("/delete", async function(req, res){

  const checkedId=req.body.checkbox

  // const itemName = req.body.newItem;
  // const newItem=new Item({
  //   name:itemName
  // })
  // await newItem.save()
  // res.redirect("/");
  await Item.findByIdAndRemove(checkedId).exec()

  res.redirect("/");
});

app.get("/about", function(req, res){
  res.render("about");
});

app.listen(3000, function() {
  console.log("Server started on port 3000");
});
