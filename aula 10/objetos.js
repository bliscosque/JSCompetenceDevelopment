const pessoa1 = {
    nome: 'Thiago',
    sobrenome: 'Goncalves',
    idade: 25,
    descreve() {
        console.log(`Olá mundo ${this.nome}`);
    }
};
console.log(pessoa1.nome)
console.log(pessoa1);
pessoa1.descreve();

//factory
function criaPessoa(nome, sobrenome, idade) {
    return {
        nome: nome, //posso deixar apenas nome, já que é nome:nome
        sobrenome: sobrenome, //sobrenome
        idade: idade //idade
    };
}
const pessoa2=criaPessoa('eu','dnovo',30);
console.log(pessoa2);