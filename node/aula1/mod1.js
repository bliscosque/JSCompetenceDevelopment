const nome='Thiago'
const sobrenome='Goncalves'

const falaNome = () => {
    console.log(nome + ' ' + sobrenome)
}

module.exports.nome=nome; //exporta uma variavel
module.exports.falaNome=falaNome; //exporta uma funcao

exports.sobrenome = sobrenome; // outra maneira de exportar

this.qualquerCoisa='tambem estou aqui'; //também deixa no exports

console.log(module.exports)
console.log(exports) //outra maneira

