const numeros=[1,2,3,4,5];
const [primeiroNum, segundoNum, ...resto]=numeros; 
console.log(primeiroNum, segundoNum, resto);

const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 30,
    endereco: {
        rua: 'Av Brasil',
        numero: 320
    }
}

const {nome="Nao existe nome",sobrenome,idade}=pessoa;
console.log(nome,sobrenome,idade);
const {endereco: {rua,numero}}=pessoa;
console.log(rua,numero);