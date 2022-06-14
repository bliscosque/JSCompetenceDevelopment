const inputTarefa=document.querySelector('.input-tarefa');
const btnTarefa=document.querySelector('.btn-add-tarefa');
const tarefas=document.querySelector('.tarefas');

function criaLi() {
    const li=document.createElement('li');
    return li;
}

function limpaInput() {
    inputTarefa.value='';
    inputTarefa.focus();
}
function criaBotaoApagar(li) {
    li.innerText += ' ';
    const botaoApagar=document.createElement('button');
    botaoApagar.innerText='Apagar';
    botaoApagar.setAttribute('class', 'apagar');
    botaoApagar.setAttribute('title', 'Apagar esta tarefa');
    li.appendChild(botaoApagar);
}
inputTarefa.addEventListener('keypress', function(e) {
    if (e.keyCode === 13) { //enter... precionando enter no input
        if (!inputTarefa.value) return; //se for vazio o campo, nao faça nada
        criaTarefa(inputTarefa.value);
    }
})

function criaTarefa(textoInput) {
    const li=criaLi();
    li.innerText=textoInput;
    tarefas.appendChild(li);
    limpaInput();
    criaBotaoApagar(li);
    salvarTarefas();
}

btnTarefa.addEventListener('click', function(e) {
    if (!inputTarefa.value) return; //se for vazio o campo, nao faça nada
    criaTarefa(inputTarefa.value);
});

document.addEventListener('click', function(e) {
    const el=e.target;
    if (el.classList.contains('apagar')) {
        el.parentElement.remove();
        salvarTarefas();
    }
});

function salvarTarefas() {
    const liTarefas = tarefas.querySelectorAll('li');
    const listaDeTarefas=[]
    for (let tarefa of liTarefas) {
        let tarefaTxt = tarefa.innerText.replace('Apagar','').trim();
        listaDeTarefas.push(tarefaTxt);
    }
    const tarefasJSON=JSON.stringify(listaDeTarefas);
    localStorage.setItem('tarefas',tarefasJSON);
}

function adicionaTarefasSalvas() {
    const tarefas = localStorage.getItem('tarefas');
    const listaDeTarefas=JSON.parse(tarefas);
    for (let tarefa of listaDeTarefas) {
        criaTarefa(tarefa);
    }
}
adicionaTarefasSalvas();