const HomeModel= require('../models/HomeModel')

HomeModel.create({
    titulo: 'titulo de teste',
    descricao: 'descricao tambem de testes'
}).then( dados => console.log(dados))
.catch(e => console.log(e));

/* {
    titulo: 'titulo de teste',
    descricao: 'descricao tambem de testes',
    _id: new ObjectId("62cf841c230d58cb7b1dabf4"),
    __v: 0
} */

//buscando todos os dados
HomeModel.find().then( dados => console.log(dados))
.catch(e => console.log(e));

exports.paginaInicial = (req,res) => {
    res.render('index'); //nao precisa da extensao -> .ejs
}

exports.trataPost = (req, res) => {
    console.log(req.body)
    res.send('recebi o form');
}