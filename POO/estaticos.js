class C1 {
    constructor(v1) {
        this.v1=v1
    } 
    static metodoEstatico() {
        console.log('Metodo estatico')
    }
}
let c1 = new C1(1);
// c1.metodoEstatico(); -> ERRO
C1.metodoEstatico();
