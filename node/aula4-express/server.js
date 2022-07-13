var express=require('express') 
var app=express()

app.get('/', function(req,res) {
    res.send("Hello World!");
})
app.listen(8080, () => {
    console.log('Servidor executando na porta 8080 -> http://localhost:8080');
});