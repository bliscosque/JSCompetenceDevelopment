require('dotenv').config();
const express=require('express');
const app=express();

const mongoose=require('mongoose')
const connectionString=process.env.CONNECTIONSTRING; //do .env
mongoose.connect(connectionString).then(() => app.emit('done')).catch(e => console.log(e)); //emitir um sinal quando a conexao estiver ok

const routes=require('./routes');
const path=require('path')
const meuMiddleware=require('./src/middlewares/middleware')

app.use(express.urlencoded({extended:true}));
app.use(express.static(path.resolve(__dirname, 'public'))); //o conteúdo dessa página é referenciado diretamente a partir do /
app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');
app.use(meuMiddleware); //todas as requisicoes precisam passar pelo meuMiddleware
app.use(routes);

//apenas quando emitir o sinal de done, comece o servidor
app.on('done', () => {
    app.listen(8080, () => {
        console.log('Servidor executando na porta 8080 -> http://localhost:8080');
    });
});
