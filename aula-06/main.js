const buttonRef = document.querySelector('button')
const userNameRef = document.querySelector('#userName')
const inputRef = document.querySelector('input')
var nomeUsuario = ''

// Funcao que ira exibir o nome do Usuario
function mostrarNomeUsuario() {

    userNameRef.innerText = nomeUsuario

}

// Funcao que ira obter o nome do Usuario
function obterNomeUsuario(nome) {

    nomeUsuario = nome

}

// Exemplo de utilizacao de uma Arrow Function sem a chamada de uma funcao
// buttonRef.addEventListener('click', () => {

//     console.log('o usuario clickou via funcao anonima')

// })

// Adicao de um Event Listener para o evento de Click
// Quando o evento de Click ocorrer a funcao mostrarNomeUsuario() sera executada
buttonRef.addEventListener('click', () => mostrarNomeUsuario())

// Adicao de um Event Listener para o evento de KeyUp
// Quando o evento de KeyUp ocorrer a funcao obterNomeUsuario() sera executada sendo passado como parametro o valor do atual do Input
inputRef.addEventListener('keyup', (event) => obterNomeUsuario(event.target.value)) // event.target.value é a maneira mais facil de obter o valor atual do Input que o usuario esta digitando