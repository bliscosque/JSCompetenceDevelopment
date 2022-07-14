require('dotenv').config();
const express=require('express');
const app=express();

const mongoose=require('mongoose')
const connectionString=process.env.CONNECTIONSTRING; //do .env
mongoose.connect(connectionString).then(() => app.emit('done')).catch(e => console.log(e)); //emitir um sinal quando a conexao estiver ok


const session=require('express-session');
const MongoStore=require('connect-mongo');
const flash=require('connect-flash')

const routes=require('./routes');
const path=require('path')

const helmet = require('helmet');
const csrf=require('csurf')

const meuMiddleware=require('./src/middlewares/middleware');
const { Store } = require('express-session');





app.use(express.urlencoded({extended:true}));
app.use(express.static(path.resolve(__dirname, 'public'))); //o conteúdo dessa página é referenciado diretamente a partir do /
app.use(helmet())
app.use(flash());
const sessionOptions=session({
    secret: 'ahusadsb c ahasoidjsaidj',
    store: MongoStore.create({ mongoUrl: process.env.CONNECTIONSTRING }),
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000*60*60*24*7, //7 dias em ms
        httpOnly: true
    }
});
app.use(sessionOptions);


app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');
app.use(csrf());
//app.use(meuMiddleware); //todas as requisicoes precisam passar pelo meuMiddleware
app.use(meuMiddleware.checkCsrfError)
app.use(meuMiddleware.csrfMiddleware)
app.use(routes);



//apenas quando emitir o sinal de done, comece o servidor
app.on('done', () => {
    app.listen(8080, () => {
        console.log('Servidor executando na porta 8080 -> http://localhost:8080');
    });
});
