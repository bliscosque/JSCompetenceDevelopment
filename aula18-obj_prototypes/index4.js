function Pessoa(nome, sobrenome) {
    this.nome=nome;
    this.sobrenome=sobrenome;
}
Pessoa.prototype.attrProt='sou attr do prototype'
Pessoa.prototype.nomeCompleto = function() { //obs: funcao nao funciona como array function
    return this.nome+' ' +this.sobrenome;
}

let p1=new Pessoa('Thiago','Goncalves')
console.log(p1.attrProt)
console.log(p1.nomeCompleto())
//Obs: Pessoa.prototype=p1.__proto__


const objA = {
    chaveA: 'A',
};

const objB = {
    chaveB: 'B',
}

Object.setPrototypeOf(objB, objA);
console.log(objB.chaveA);

const p3=Object.create(objA.prototype)