function Produto(nome,preco,estoque) {
    this.nome=nome;
    this.preco=preco;

    Object.defineProperty(this, 'estoque', {
        enumerable: true, //mostra a chave quanto utiliza for...in ou Object.keys
        configurable: true, 
        get: function() { // getter
            return estoque;
        },
        set: function(valor) { //setter
            if (typeof valor !== 'number') {
                throw new TypeError('Bad value!')
            }
            estoque=valor;
        }
    });
}

const p1=new Produto('Camiseta', 20, 3)
console.log(p1)
p1.estoque=100
//p1.estoque='nao quero pagar'
console.log(p1.estoque)




function criaProduto(nome) {
    return {
        get nome() {
            return nome;
        },
        set nome(valor) {
            nome=valor;
        }
    }
}

const p2=criaProduto('camiseta')
p2.nome='outro valor'
console.log(p2.nome)