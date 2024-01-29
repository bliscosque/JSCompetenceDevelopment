const express=require('express');
const mongoose=require('mongoose');
const app=express();
require('dotenv').config()
const authRoutes=require('./routes/authRoutes');

app.use(authRoutes);

const mongoURI=`mongodb+srv://bliscosque:${process.env.DB_PASS}@track-server.v4qj2h4.mongodb.net/?retryWrites=true&w=majority`;
mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    //useCreateIndex: true
})

mongoose.connection.on('connected', () => {
    console.log('MongoDB is connected');
})

mongoose.connection.on('error', (err) => {
    console.log('MongoDB has error to connect: ' + err);
})

app.get('/', (req,res) => {
    res.send('Hi there');
});

app.listen(3000, () => {
    console.log('Listening on port 3000');
});