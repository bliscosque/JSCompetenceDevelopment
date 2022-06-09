const numero=prompt('Digite um numero');
const numeroTitulo = document.getElementById('numero-titulo');
const texto = document.getElementById('texto');
numeroTitulo.innerHTML=Number(numero);
texto.innerHTML=`<p>Sou um novo texto`;
