//declaracao de funcao
function falaOi() {
    console.log('Oie');
}
falaOi();

const fArrow=ArrowFunction=() => {
    console.log('sou arrow function')
}

fArrow();

const obj = {
    falar: function() {
        console.log('estou falando....')
    },
    falar2() {
        console.log('continuo falando')
    }
}
obj.falar()
obj.falar2()

function funcao(a,b,c,d,e,f=0) {
    console.log(a,b,c,d,e,f)
}
funcao(1,2,3)

function f2(a,b=2,c=4) {
    console.log(a+b+c)
}
f2(2,undefined,20)

function fDesestruturizacao({nome,sobrenome,idade}) {
    console.log(nome,sobrenome,idade)
}
fDesestruturizacao({nome: 'Thiago', sobrenome: 'Goncalves', idade: 36})

function conta(acumulador,...numeros) {
    for (let numero of numeros) acumulador += numero
    console.log(acumulador)
}
conta(0,10,20,30)


function criaPessoa(nome, sobrenome) {
    return {nome,sobrenome}
}
const p1=criaPessoa('Joao','Alberto')
console.log(p1)

function criaMultiplicador(multiplicador) {
    return function(n) {
        return n*multiplicador;
    }
}
const duplica=criaMultiplicador(2)
const quintuplica=criaMultiplicador(5)
console.log(duplica(10))
console.log(quintuplica(10))