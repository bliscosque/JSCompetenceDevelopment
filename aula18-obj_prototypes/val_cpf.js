//cpf no BR:
// para dig10
// soma(10*cpf[0] + 9*cpf[1] + ...)
// 11-(soma%11) -> se > 9 , digito é 0
// para dig 11
// soma(11*cpf[0] + 10*cpf[1] + ...)
// 11-(soma%11) -> se > 9 , digito é 0

function ValidaCPF(cpfEnviado) {
    Object.defineProperty(this,'cpfLimpo', {
        enumerable:true,
        get: function() {
            return cpfEnviado.replace(/\D+/g,'')
        }
    })
}

ValidaCPF.prototype.valida = function() {
    if (typeof this.cpfLimpo=='undefined') return false;
    if (this.cpfLimpo.length !==11) return false;
    if (this.isSequencia()) return false;
    
    const cpfParcial=this.cpfLimpo.slice(0,-2);
    const digito1=this.criaDigito(cpfParcial);
    const digito2=this.criaDigito(cpfParcial+digito1);

    const novoCpf=cpfParcial+digito1+digito2;
    console.log(novoCpf);

    return novoCpf===this.cpfLimpo;
}

ValidaCPF.prototype.criaDigito = function(cpfParcial) {
    const cpfArray=Array.from(cpfParcial);
    let regressivo=cpfArray.length+1;
    const total = cpfArray.reduce((ac, val) => {
        ac+=regressivo*Number(val);
        regressivo--;
        return ac
    },0);
    let digito=11-(total%11);
    return digito>9?'0':String(digito);
}

ValidaCPF.prototype.isSequencia = function() {
    return this.cpfLimpo[0].repeat(11)===this.cpfLimpo
}

const cpf=new ValidaCPF('705.484.450-52');
console.log(cpf.cpfLimpo)
console.log(cpf.valida());
const cpf2=new ValidaCPF('111.111.111-11');
console.log(cpf2.cpfLimpo)
console.log(cpf2.valida());