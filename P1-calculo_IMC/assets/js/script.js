function meuEscopo() {
    const form=document.querySelector('.form');
    

    form.addEventListener('submit',function(evento) {
        evento.preventDefault();
        const inputNome=form.querySelector('#nome');
        const inputPeso=form.querySelector('#peso');
        const inputAltura=form.querySelector('#altura');
        
        const nome=inputNome.value;
        const peso=Number(inputPeso.value);
        const altura=Number(inputAltura.value);

        console.log(nome,peso,altura);

        if (!peso) {
            setResultado('Peso Invalido', false);
            return;
        }

        if (!altura) {
            setResultado('Altura Invalida', false);
            return;
        }
        const imc=getImc(peso,altura);
        const nivel=getNivelImc(imc);
        const msg=`Olá: ${nome}. Seu IMC é: ${imc} (${nivel})`;
        setResultado(msg, true);
    });

    function getImc (peso, altura) {
        const imc = (peso)/((altura)**2);
        return imc.toFixed(2);
    }

    function getNivelImc(imc) {
        const nivel=['Abaixo do peso','Peso normal', 'Sobrepeso', 'Obsidade grau1', 'obesidade grau2', 'obsidade grau3'];
        if (imc >=40) {
            return nivel[5];
        } else if (imc >=35) {
            return nivel[4];
        } else if (imc >=30) {
            return nivel[3];
        } else if (imc >=25) {
            return nivel[2];
        } else if (imc >=18.5) {
            return nivel[1];
        } else {
            return nivel[0];
        }
    }

    function setResultado(msg, isValid) {
        const resultado=document.querySelector('.resultado');
        resultado.innerHTML='';
        const p=document.createElement('p'); //cria um paragrafo
        if (isValid) {
            p.classList.add('paragrafo-resultado');
        }
        else {
            p.classList.add('paragrafo-resultado-inv');
        }
        p.innerHTML=msg;
        resultado.appendChild(p);
    }
}
meuEscopo();