
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

export default BotaoConclui

/**
 * Caso fosse necessário exportar ambas as funções, criava-se um array:
 *  export {
 *      BotaoConclui,
 *      concluirTarefa
 *  }
 * Ou podemos coloca na frente da constante:
 * export const BotaoConclui...
 * export const 
 * 
 * 
 */