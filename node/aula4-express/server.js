var express=require('express') 
var app=express()

app.use(express.urlencoded({extended:true}));


app.get('/', function(req,res) {
    res.send(`
    <form action="/" method="POST">
    Nome Cliente: <input type="text" name="nome">
    <button>Postar</button>
    </form>
    `);
})

app.post('/', (req, res) => {
    console.log(req.body)
    res.send('recebi o form');
})

app.listen(8080, () => {
    console.log('Servidor executando na porta 8080 -> http://localhost:8080');
});

app.get('/profiles/:idUser?', (req, res) => {
    console.log(req.query);
    res.send('ola mundo');
});