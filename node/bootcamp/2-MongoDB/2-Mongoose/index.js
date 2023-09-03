import mongoose from "mongoose"

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/fruitsDB');
    const fruitSchema=new mongoose.Schema({
        name: String,
        rating: Number,
        review: String
    })
    const Fruit=mongoose.model("Fruit",fruitSchema) //creates a pluralized collection: fruits
    const fruit=new Fruit({
        name: "Apple",
        rating: 7,
        review: "Ok"
    })
    //await fruit.save()

    const personSchema=new mongoose.Schema({
        name: String,
        age: Number
    })
    const Person=mongoose.model("Person",personSchema)
    const person=new Person({
        name: "John",
        age: 35
    })
    //await person.save()

    const banana=new Fruit({
        name: "Banana",
        rating: 8,
        review: "Amazing"
    })

    const pear=new Fruit({
        name: "Pear",
        rating: 5,
        review: "Ok"
    })
    
    Fruit.insertMany([banana,pear])
}

main().catch(err => console.log(err));