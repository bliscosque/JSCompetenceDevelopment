const inputTarefa=document.querySelector('.input-tarefa');
const btnTarefa=document.querySelector('.btn-add-tarefa');
const tarefas=document.querySelector('.tarefas');

function criaTarefa(textoInput) {
    console.log(textoInput);
}

btnTarefa.addEventListener('click', function(e) {
    if (!inputTarefa.value) return; //se for vazio o campo, nao faça nada
    criaTarefa(inputTarefa.value);
});