function saudacao(nome='Default') {
    console.log(`oi: ${nome}`);
    return 'sou o retorno';
}
console.log(saudacao('Thiago'));
saudacao();

const raiz=function(n) {
    return n**0.5;
};
console.log(raiz(16));

const raizArrowFunction = n => n**0.5;
console.log(raizArrowFunction(16));