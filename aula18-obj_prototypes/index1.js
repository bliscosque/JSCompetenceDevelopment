const pessoa = {
    //chave:valor//
    nome: 'Thiago',
    sobrenome: 'Goncalves'
};

console.log(pessoa.nome)
console.log(pessoa['sobrenome']) //pode utilizar valor dinamico, por exemplo, vindo de uma BD

const pessoa1 = new Object();
pessoa1.nome = 'Thiago';
pessoa1.sobrenome = 'Goncalves'

for (let chave in pessoa1) {
    console.log(chave);
    console.log(pessoa1[chave]);
}

function criaPessoa(nome, sobrenome, idade) {
    return {
        nome: nome, //posso deixar apenas nome, já que é nome:nome
        sobrenome: sobrenome, //sobrenome
        idade: idade, //idade
        get nomeCompleto() { //metodo getter
            return `${this.nome} ${this.sobrenome}`;
        }
    };
}
const pessoa2 = criaPessoa('eu', 'dnovo', 30);
console.log(pessoa2);

console.log(pessoa2.nomeCompleto)



function Pessoa(nome, sobrenome) {
    this.nome=nome;
    this.sobrenome=sobrenome;
}
const p1=new Pessoa('Thiago', 'Goncalves'); //pode alterar o conteudo dos atributos normalmente
Object.freeze(p1); // agora nao posso mais alterar
p1.nome='Joao'
console.log(p1);