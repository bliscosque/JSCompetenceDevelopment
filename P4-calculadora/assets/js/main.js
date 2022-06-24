function criaCalculadora() {
    return  {
        display: document.querySelector('.display'),
        btnClear: document.querySelector('.btn-clear'),
        clearDisplay() {
            this.display.value=''
        },
        inicia() {
            this.cliqueBotoes();
            this.pressionaEnter();
        },
        pressionaEnter() {
            this.display.addEventListener('keyup',e => { //arrow function para nao perder o this
                if (e.keyCode===13) {
                    this.realizaConta()
                }
            })
        },
        cliqueBotoes() {
            //this neste momento -> calculadora
            document.addEventListener('click', function(e) {
                //a partir do addEventListener, o this ja nao eh mais a calculadora e sim #document
                //console.log(this);

                const el=e.target;

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

            }.bind(this)) //aqui falo a funcao para usar o this da calculadora
        },
        realizaConta() {
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
        },
        apagaUm() {
            this.display.value=this.display.value.slice(0,-1)
        },
        btnParaDisplay(valor) {
            this.display.value+=valor;
        }
    };
}

const calculadora = criaCalculadora();
calculadora.inicia();