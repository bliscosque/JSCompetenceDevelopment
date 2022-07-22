const { texto, arquivos } = require ('./base')

const regExp1 = /Jo+ã+o+/gi;
console.log(texto.match(regExp1))



const regExp2 = /\.jpe?g/gi
for (const arquivo of arquivos) 
    console.log(arquivo.match(regExp2));
