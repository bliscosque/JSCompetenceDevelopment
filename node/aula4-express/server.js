const express=require('express');
const app=express();
const routes=require('./routes');
const path=require('path')

app.use(express.urlencoded({extended:true}));
app.use(express.static(path.resolve(__dirname, 'public'))); //o conteúdo dessa página é referenciado diretamente a partir do /
app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');
app.use(routes);

app.listen(8080, () => {
    console.log('Servidor executando na porta 8080 -> http://localhost:8080');
});

