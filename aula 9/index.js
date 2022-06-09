const alunos = ['Luis', 'Maria', 'João'];
console.log(alunos, alunos[1], alunos.length);
alunos[0]='Eduardo'; //altera elemento
alunos[3]='Luiza'; //adiciona elemento, caso não exista
alunos.push('Novo aluno'); //adiciona ao final
alunos.unshift('Aluno na pos 0'); //adiciona no inicio do vetor
const removido = alunos.pop(); //remove ultimo elemento
const removido0 = alunos.shift(); //remove o primeiro elemento
delete alunos[1]; //a posicao fica como "empty", mas não altera os indices
console.log(alunos.slice(0,-1)); //"fatear" um array. O ultimo elemento não é incluído
console.log(typeof alunos); //object
console.log(alunos instanceof Array); //true
