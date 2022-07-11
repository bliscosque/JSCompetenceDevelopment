class ValidaCPF {
    constructor(cpfEnviado) {
        Object.defineProperty(this,'cpfLimpo', {
            writable: false,
            enumerable: false,
            configurable: false,
            value: cpfEnviado.replace(/\D+/g,'')
        })
    }
    isSeq() {
        return this.cpfLimpo.charAt(0).repeat(11)==this.cpfLimpo;
    }

    geraNovoCpf() {
        const cpfSemDigitos=this.cpfLimpo.slice(0,-2);
        const digito1=this.geraDigito(cpfSemDigitos);
        const digito2=this.geraDigito(cpfSemDigitos+digito1);
        this.novoCPF=cpfSemDigitos+digito1+digito2;
        //console.log(this.novoCPF)
    }
    geraDigito(cpfSemDigitos) {
        let total=0;
        let reverso = cpfSemDigitos.length+1;
        for (let strNumerica of cpfSemDigitos) {
            total+=reverso*Number(strNumerica);
            reverso--;
        }
        const digito=11-(total%11);
        return digito<=9?String(digito): '0'
    }

    valida() {
        if (!this.cpfLimpo) return false;
        if (typeof this.cpfLimpo!== 'string') return false;
        if (this.cpfLimpo.length!==11) return false;
        if (this.isSeq()) return false;
        this.geraNovoCpf();
        return this.novoCPF===this.cpfLimpo;
    }
}

const validaCPF1 = new ValidaCPF('705.484.450-52')
console.log(validaCPF1.valida());
const validaCPF2 = new ValidaCPF('111.111.111-11')
console.log(validaCPF2.valida());