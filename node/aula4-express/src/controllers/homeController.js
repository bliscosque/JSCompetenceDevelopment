const HomeModel= require('../models/HomeModel')

/* HomeModel.create({
    titulo: 'titulo de teste',
    descricao: 'descricao tambem de testes'
}).then( dados => console.log(dados))
.catch(e => console.log(e)); */

/* {
    titulo: 'titulo de teste',
    descricao: 'descricao tambem de testes',
    _id: new ObjectId("62cf841c230d58cb7b1dabf4"),
    __v: 0
} */

//buscando todos os dados
/* HomeModel.find().then( dados => console.log(dados))
.catch(e => console.log(e)); */

exports.paginaInicial = (req,res) => {
    //req.session.usuario = {nome: 'Thiago', logado: true};
    console.log(req.session.usuario) // o objeto fica por 7 dias, mesmo se nao tiver o parametro acima

    //define flash message
    //req.flash('info', 'Olá Mundo!'); 
    //req.flash('error', 'Um erro!');
    //req.flash('success', 'Sucesso!');

    //busca a flash message, depois de mostrar uma vez ao usuario, apaga da BD
    console.log(req.flash('info'));

    res.render('index'); //nao precisa da extensao -> .ejs
}

exports.trataPost = (req, res) => {
    console.log(req.body)
    res.send('recebi o form');
}