const { texto } = require ('./base')
const regExp1 = /(maria)(, hoje sua esposa)/;
const found=regExp1.exec(texto);
/* console.log(found[0]);
console.log(found[1]);
console.log(found[2]);
 */

const regExp2 = /João/;
console.log(texto.match(regExp2));

const regExp3 = /João|maria/gi;
console.log(texto.match(regExp3));

console.log(texto.replace(/(João|maria)/gi, '$1 - pessoa - '));
console.log(texto.replace(/(João|maria)/gi, function(input) {
    return input.toUpperCase();
}));