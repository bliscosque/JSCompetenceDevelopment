class DispositivoEletronico {
    constructor(nome) {
        this.nome=nome;
        this.ligado=false;
    }
    ligar() {
        this.ligado=true;
    }
    desligar() {
        this.ligado=false;
    }
}

class Smartphone extends DispositivoEletronico {
    constructor(nome, cor) {
        super(nome);
        this.cor=cor;
    }
}

const s1=new Smartphone('tel', 'azul')
s1.ligar();
console.log(s1);
s1.ligar();
s1.desligar();
console.log(s1);