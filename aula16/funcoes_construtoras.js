//retorna um objeto
//convencao de comecar com letra maiuscula
//precisa usar NEW

function Pessoa(nome,sobrenome) {
    const ID=123456 //interno, nao tem this
    const metodoInterno = function() {
        //metodo interno
    }
    this.nome=nome;
    this.sobrenome=sobrenome;
    this.metodo = function() {
        console.log("sou metodo publico, começo com this");
    }
}

const p1= new Pessoa('Thiago', 'Goncalves')
console.log(p1)