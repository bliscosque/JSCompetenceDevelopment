const pessoas = [
    {id: 3, nome: 'Luiza'},
    {id: 2, nome: 'Maria'},
    {id: 1, nome: 'Helena'},
];

const novasPessoas=new Map();
for (const pessoa of pessoas) {
    const {id} = pessoa; //desestruturando para obter o id
    novasPessoas.set(id,{...pessoa});
}
console.log(novasPessoas);