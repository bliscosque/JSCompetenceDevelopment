import mongoose from "mongoose"

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/fruitsDB');
    const fruitSchema=new mongoose.Schema({
        name: {
            type: String,
            required: true
        },
        rating: {
            type: Number,
            min:1,
            max:10
        },
        review: String
    })
    const Fruit=mongoose.model("Fruit",fruitSchema) //creates a pluralized collection: fruits
    const fruit=new Fruit({
        name: "Apple",
        rating: 9,
        review: "Ok"
    })
    //await fruit.save()

    const personSchema=new mongoose.Schema({
        name: String,
        age: Number,
        favouriteFruit: fruitSchema
    })

    const pineapple=new Fruit({
        name: "Pineapple",
        rating: 10,
        review: "Best"
    })

    pineapple.save()

    const Person=mongoose.model("Person",personSchema)
    const person=new Person({
        name: "Person_with_fruit",
        age: 35,
        favouriteFruit: pineapple
    })
    //await person.save()
    person.save()

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
    
    //Fruit.insertMany([banana,pear])

    //Read
    let fruits=await Fruit.find();
    fruits.forEach(fruit => {
        console.log(fruit)
    })

    //Update
    //const res=await Fruit.updateOne({_id: "64f4eedc1bfd4cf79d2654ca"}, {rating:9})



    //Delete
    const res=await Fruit.deleteOne({_id: "64f4eedc1bfd4cf79d2654ca"})

    fruits=await Fruit.find();
    console.log(fruits)

    //close the connection
    mongoose.connection.close();
}

main().catch(err => console.log(err));