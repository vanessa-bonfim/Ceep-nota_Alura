import BotaoConclui from "./componentes/concluiTarefa.js"
import BotaoDeleta from "./componentes/detelaTarefa.js"

const criarTarefa = (evento) => {

    evento.preventDefault() //“Prevent default”, ou seja, prevenir o comportamento padrão.

    const lista = document.querySelector('[data-list]')
    const input = document.querySelector('[data-form-input]')
    const valor = input.value

    const tarefa = document.createElement('li')
    tarefa.classList.add('task')
    const conteudo = `<p class="content">${valor}</p>`
    tarefa.innerHTML = conteudo

    tarefa.appendChild(BotaoConclui())
    tarefa.appendChild(BotaoDeleta())
    lista.appendChild(tarefa)
    input.value = " "
}

const novaTarefa = document.querySelector('[data-form-button]')
novaTarefa.addEventListener('click', criarTarefa)






