const mod1 = require('./mod1'); 
console.log(mod1) //tenho tudo que exportei do outro módulo
mod1.falaNome();

const falaNome=require('./mod1').falaNome; // importa apenas uma funcao
falaNome(); //chamo diretamente

const {nome, sobrenome} = require('./mod1'); //desestruturando a importacao
console.log('Usando de outro modulo: ' + nome+ ' '+ sobrenome )
