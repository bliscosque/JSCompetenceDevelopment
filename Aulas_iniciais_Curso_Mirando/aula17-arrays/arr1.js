const nomes=['Maria','Joao','Eduardo', 'Gabriel', 'Julia']

const removidos=nomes.splice(3,2); //remover a partir indice 3, 2 elem / retorna elementos removidos
const removidos2=nomes.splice(1,Number.MAX_VALUE); //remover desde o indice 1 até o final
nomes.splice(1,0,'Thiago', 'Pedro'); //no indice 1, nao remove nada, adiciona Thiago e Pedro
console.log(nomes)
console.log(removidos)

const a1=[1, 2, 3];
const a2=[4, 5, 6];
const a3=a1.concat(a2, 'Thiago');
console.log(a3);

const a4=[...a1,...a2,'Thiago']
console.log(a4);