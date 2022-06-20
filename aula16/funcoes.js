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