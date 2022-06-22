function criaPessoa(nome, sobrenome,a,p) {
    return {
        nome, sobrenome, 
        fala: function(assunto) { //ou fala(assunto) {
            return `${nome} esta ${assunto}`
        },
        altura: a,
        peso: p,
        get imc() { //imc é tratado como se fosse um objeto, ao invés de uma funçao - GETTER
            return (this.peso/(this.altura**2)).toFixed(2)
        },
        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`
        },
        set nomeCompleto(valor) {
            valor = valor.split(' ')
            this.nome = valor.shift();
            this.sobrenome=valor.join(' ')
        }
    };
}

const p1=criaPessoa('Thiago','Goncalves',1.7,68)
console.log(p1)
console.log(p1.fala('falando JS'))
console.log(p1.imc)
p1.nomeCompleto='Nova Pessoa'
console.log(p1.nomeCompleto)