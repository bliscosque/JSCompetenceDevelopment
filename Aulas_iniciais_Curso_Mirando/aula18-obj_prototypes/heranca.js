function Produto(nome, preco) {
    this.nome=nome,
    this.preco=preco
}
Produto.prototype.aumento = function(quantia) {
    this.preco+=quantia
}
Produto.prototype.desconto = function(quantia) {
    this.preco-=quantia
}
function Camiseta(nome,preco,cor) {
    Produto.call(this, nome,preco) //chama o construtor do Produto
    this.cor=cor
}
Camiseta.prototype=Object.create(Produto.prototype) //lincando os prototypes
Camiseta.prototype.constructor=Camiseta // alterando o constructor manualmente
const camiseta=new Camiseta('Regata',7.5,'preta')
camiseta.aumento(2.5);
console.log(camiseta)