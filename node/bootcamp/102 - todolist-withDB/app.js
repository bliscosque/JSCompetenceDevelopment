import express from "express";
import bodyParser from "body-parser"
import mongoose, { Mongoose } from 'mongoose'


async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/todoListDB');
  const itemSchema=new mongoose.Schema({
    name: String
  })
  const Item=mongoose.model("Item",itemSchema)
  const item1=new Item({
    name: "Item 1"
  })
  const item2=new Item({
    name: "Item 2"
  })
  const item3=new Item({
    name: "Item 3"
  })
  //await Item.insertMany([item1,item2,item3])

}
main().catch(err => console.log(err))

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

const items = ["Buy Food", "Cook Food", "Eat Food"];
const workItems = [];

app.get("/", function(req, res) {

  res.render("list", {listTitle: "Today", newListItems: items});

});

app.post("/", function(req, res){

  const item = req.body.newItem;

  if (req.body.list === "Work") {
    workItems.push(item);
    res.redirect("/work");
  } else {
    items.push(item);
    res.redirect("/");
  }
});

app.get("/work", function(req,res){
  res.render("list", {listTitle: "Work List", newListItems: workItems});
});

app.get("/about", function(req, res){
  res.render("about");
});

app.listen(3000, function() {
  console.log("Server started on port 3000");
});
