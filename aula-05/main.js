// Obtencao da referencia da Nav no DOM
const mainMenuRef = document.querySelector('#mainMenu')

function changeMenuVisibility() {

    // Utilizacao da funcionalidade "toggle" presente na propriedade "classList", que por sua vez esta presente em todos os elementos obtidos pelo DOM

    // A funcionalidade "toggle" ira alternar a classe CSS que estamos informando para ela, no caso a classe "opened". Caso o nossos elemento possua a classe, ele ira remove-la, agora caso nao exista ele ira adiciona-la. Criando assim o efeito do menu aparecendo toda vez que o usuario clicka no botao
    mainMenuRef.classList.toggle('opened')

}