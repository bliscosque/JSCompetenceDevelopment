const express=require('express');
const mongoose=require('mongoose');
const bodyParser = require('body-parser');
require('./models/User')
require('./models/Track')
require('dotenv').config()
const authRoutes=require('./routes/authRoutes');
const trackRoutes=require('./routes/trackRoutes')
const requireAuth=require('./middlewares/requireAuth');


const app=express();
app.use(bodyParser.json())
app.use(authRoutes);
app.use(trackRoutes)

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

app.get('/', requireAuth, (req,res) => {
    res.send(`Your email: ${req.user.email}`);
});

app.listen(3000, () => {
    console.log('Listening on port 3000');
});