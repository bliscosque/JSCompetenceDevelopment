class Pessoa {
    constructor(nome, sobrenome) {
        this.nome=nome;
        this.sobrenome=sobrenome;
    }
    falar() {
        console.log(`${this.nome} esta falando`);
    }
    comer() {
        console.log(`${this.nome} esta comendo`);
    }
}

const p1= new Pessoa('Thiago', 'Goncalves');
console.log(p1);
p1.falar()