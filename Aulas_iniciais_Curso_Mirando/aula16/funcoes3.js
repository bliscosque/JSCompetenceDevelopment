//IIFE -> immediately invoked function expression

//maneira 1
function qualquerFuncao() {
    //codigo aqui
}
qualquerFuncao();


//maneira 2 - nao toca escopo global
(function(idade) {
    console.log("IIFE function")
    console.log(idade)
})(30);