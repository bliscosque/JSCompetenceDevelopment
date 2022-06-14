function getTimefromSeconds(segundos) {
    const data=new Date(segundos*1000);
    return data.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'GMT'
    });
}

console.log(getTimefromSeconds(10));

const relogio = document.querySelector('.relogio');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar');
let segundos=0;
let timer;

function iniciaRelogio() {
    timer = setInterval(function() {
        segundos++;
        relogio.innerHTML=getTimefromSeconds(segundos);
    },1000);
}


// document.addEventListener('click', function(event) {
//     const element=event.target;
//     if (element.classList.contains('zerar') ) {
//         console.log('clicou em zerar');
//     }
// } )


iniciar.addEventListener('click', function(event) {
    relogio.classList.remove('pausado');
    clearInterval(timer);
    iniciaRelogio();
});
pausar.addEventListener('click', function(event) {
    relogio.classList.add('pausado');
    clearInterval(timer);
});
zerar.addEventListener('click', function(event) {
    relogio.classList.remove('pausado')
    clearInterval(timer);
    relogio.innerHTML='00:00:00';
    segundos=0;
});
