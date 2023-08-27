const produto = {nome: 'caneca', preco: 1.8}
const outroProduto={...produto}
const outroProduto2={
    ...produto,
    material: 'porcelana'
}

const caneca=Object.assign({}, produto, {material: 'porcelana'})
console.log(caneca)

console.log(Object.getOwnPropertyDescriptor(produto, 'nome'))
for (let [chave, valor] of Object.entries(produto)) {
    console.log(chave, valor)
}