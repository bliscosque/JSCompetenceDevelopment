function Calcularora() {
    this.display= document.querySelector('.display')
    this.btnClear= document.querySelector('.btn-clear'),

    this.inicia = () => {
        this.capturaCliques();
        this.pressionaEnter();
    }

    this.capturaCliques=() => {
        document.addEventListener('click', (event) => {
            //a partir do addEventListener, o this ja nao eh mais a calculadora e sim #document
            //console.log(this);

            const el=event.target;

            if (el.classList.contains('btn-num')) {
                this.btnParaDisplay(el.innerText);
            }

            if (el.classList.contains('btn-clear')) {
                this.clearDisplay();
            }

            if (el.classList.contains('btn-del')) {
                this.apagaUm();
            }

            if (el.classList.contains('btn-eq')) {
                this.realizaConta()
            }

        })

    }

    this.btnParaDisplay = (valor) => {
        this.display.value+=valor;
    }

    this.apagaUm =() => {
        this.display.value=this.display.value.slice(0,-1)
    }

    this.realizaConta=() => {
        let conta=this.display.value
        try {
            conta=eval(conta)
            if (!conta) {
                alert('Conta invalida')
                return
            }
            this.display.value=String(conta)
        }catch(e) {
            alert ('Conta invalida')
        }
    }
    this.clearDisplay= () => {
        this.display.value=''
    }
    this.pressionaEnter = () => {
        this.display.addEventListener('keyup',e => { //arrow function para nao perder o this
            if (e.keyCode===13) {
                this.realizaConta()
            }
        })
    }
}
const calculadora =new Calcularora();
console.log(calculadora)
calculadora.inicia();
