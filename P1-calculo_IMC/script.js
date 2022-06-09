function meuEscopo() {
    const form=document.querySelector('.form');
    const resultado=document.querySelector('.resultado');

    function recebeEventoForm(evento) {
        evento.preventDefault();
        const nome=form.querySelector('.nome');
        const peso=form.querySelector('.peso');
        const altura=form.querySelector('.altura');
        console.log(nome.value,peso.value,altura.value);
        resultado.innerHTML=`Olá: ${nome.value}. Seu IMC é: ${Number(peso.value)/(Number(altura.value)**2)} <br>`
    }
    form.addEventListener('submit',recebeEventoForm);
}
meuEscopo();