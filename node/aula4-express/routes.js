var express=require('express') 
const route=express.Router();
const homeController = require('./src/controllers/homeController');

function meuMiddleware(req, res, next) {
    console.log('\nPassei no Middleware\n');
    next(); //chama o proximo middleware
}

route.get('/', meuMiddleware, homeController.paginaInicial);
route.post('/', homeController.trataPost)

module.exports = route;