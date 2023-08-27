const numeros = [5, 50, 80, 1, 2, 3, 5, 7, 11, 15, 22, 27]
const numerosFiltrado2=numeros.filter((val, idx, array) => {
    return (val<=10); 
});


const numerosFiltrados=numeros.filter(val => val<=10);

console.log(numerosFiltrados);
console.log(numerosFiltrado2);

const numerosDuplicados=numeros.map((val, idx, array) => {
    return 2*val;
})
const numerosDuplicados2=numeros.map(val=>2*val);
console.log(numerosDuplicados);
console.log(numerosDuplicados2);

const total=numeros.reduce( (acum, val, idx, array) => {
    return acum+val;
},0); //o 0 é o valor inicial do acumulador
console.log(total);

const numeros2 = [5, 50, 80, 1, 2, 3, 5, 7, 11, 15, 22, 27]
//soma dos numeros pares multiplicados por 2
const res=numeros2
    .filter(valor => valor%2===0)
    .map(valor => valor*2)
    .reduce((ac,valor) => ac+valor);

console.log(res)

const a1 = [1,2,3,4,5,6,7,8,9];
a1.forEach((val,idx,arr) => {
    console.log(val,idx,arr);
})