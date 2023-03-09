(() => { //encapsulamos as funções para não mostrar a regra de negocio no console do navegador
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


    const BotaoConclui = () => {

        const botaoConclui = document.createElement('button')
        botaoConclui.classList.add('check-button')
        botaoConclui.innerText = 'concluir'

        botaoConclui.addEventListener('click', concluirTarefa)

        return botaoConclui
    }

    const concluirTarefa = (evento) => {
        const botaoConclui = evento.target //decobre qual elemento clicado

        const tarefaCompleta = botaoConclui.parentElement //guarda na variável o pai do elemento

        tarefaCompleta.classList.toggle('done') //executa essa classe ao apertar o botão retornando true ou false

    }

    const BotaoDeleta = () => {
        const botaoDeleta = document.createElement('button')
        botaoDeleta.innerText = 'deletar'

        botaoDeleta.addEventListener('click', deletarTarefa)

        return botaoDeleta
    }
    
    const deletarTarefa = (evento) =>{

        const botaoDeleta = evento.target
        const tarefaCompleta = botaoDeleta.parentElement

        tarefaCompleta.remove()
        
        return botaoDeleta
    }
})()
