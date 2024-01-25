let inpNewTask = document.querySelector('#inpNewTask')
let btnAdd = document.querySelector('#btnAdd')
let task = document.querySelector('#task')



inpNewTask.addEventListener('keypress', function (e) {
    if (e.keyCode === 13) {
        if (!inpNewTask.value) return
        criaTarefa(inpNewTask.value)
    }
})

function criaLi() {
    const li = document.createElement('li')
    return li
}

function criaBotaoApagar(li){
    li.innerHTML += ' '
    const apagarBotao = document.createElement('button')
    apagarBotao.innerHTML = 'Apagar'
    apagarBotao.setAttribute('class', 'apagar')
    li.appendChild(apagarBotao)
}

function limpaTarefa(){
    inpNewTask.value = ''
    inpNewTask.focus()
}

function criaTarefa(textoInput) {
    const li = criaLi()
    li.innerHTML = textoInput
    task.appendChild(li)
    limpaTarefa()
    criaBotaoApagar(li)
    salvarTarefas()
}

btnAdd.addEventListener('click', function () {
    if (!inpNewTask.value) return
    criaTarefa(inpNewTask.value)
})

document.addEventListener('click', function(e){
    const el = e.target

    if (el.classList.contains('apagar')){
        el.parentElement.remove()
        salvarTarefas()
    }
})

function salvarTarefas(){
    const liTarefas = task.querySelectorAll('li')
    const liDeTarefas = []

    for (let tarefas of liTarefas){
        let tarefaTexto = tarefas.innerText
        tarefaTexto = tarefaTexto.replace('Apagar', '').trim()

        liDeTarefas.push(tarefaTexto)
    }

    const tarefasJSON = JSON.stringify(liDeTarefas)
    localStorage.setItem('tarefas', tarefasJSON)
}

function importTarefas(){
    const tarefas = localStorage.getItem('tarefas')
    const liDeTarefas = JSON.parse(tarefas)

    for (let tarefa of liDeTarefas){
        criaTarefa(tarefa)
    }
}
importTarefas()