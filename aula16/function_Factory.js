function criaPessoa(nome, sobrenome,a,p) {
    return {
        nome, sobrenome,
        fala: function(assunto) { //ou fala(assunto) {
            return `${nome} esta ${assunto}`
        },
        altura: a,
        peso: p,
        get imc() { //imc é tratado como se fosse um objeto, ao invés de uma funçao
            return (this.peso/(this.altura**2)).toFixed(2)
        }
    };
}

const p1=criaPessoa('Thiago','Goncalves',1.7,68)
console.log(p1)
console.log(p1.fala('falando JS'))
console.log(p1.imc)