function criaPessoa(nome,sobrenome) {
    const pessoaPrototype = {
        falar() {
            console.log(`${this.nome} esta falando`);
        },
        comer() {
            console.log(`${this.nome} esta comendo`)
        }
    }
    return Object.create(pessoaPrototype, {
        nome: { value: nome },
        sobrenome: { value: sobrenome },
    })
}

const p1=criaPessoa('Thiago', 'Goncalves');
p1.falar()