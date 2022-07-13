const path=require('path');
const caminhoArquivo = path.resolve(__dirname, '..','teste.json');
const escreve = require('./modules/escrever')
const ler = require('./modules/ler')

/* const pessoas=[
    {nome: 'Joao'},
    {nome: 'Maria'},
    {nome: 'Eduardo'}
];
const json=JSON.stringify(pessoas,'',2); //identacao com 2 espaços

escreve(caminhoArquivo, json); */

async function leArquivo(caminho) {
    let dados = await ler(caminho);
    dados = JSON.parse(dados);
    dados.forEach(val => console.log(val.nome));
}

leArquivo(caminhoArquivo);