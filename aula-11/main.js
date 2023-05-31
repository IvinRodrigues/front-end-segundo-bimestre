// Obtem as referencias necessarias da Div pai do Input de Nome e tambem o Input de Nome
const formControlNameRef = document.querySelector('#formControlNome')
const userNameInputRef = document.querySelector('#userNameInput')

// Obtem as referencias necessarias da Div pai do Input de Senha e tambem o Input de Senha
const formControlPasswordRef = document.querySelector('#formControlPassword')
const userPasswordInputRef = document.querySelector('#userPasswordInput')

// Obtem a referencia do Botao do Formulario
const loginButtonRef = document.querySelector('#loginButton')

// Objeto que ira armazenar os erros do formulario
var formErrors = {
    name: true,
    password: true
}

// Objeto que ira armazenar os valores do formulario
var user = {
    name: '',
    password: ''
}

// Funcao que ira desabilitar o botao do formulario caso exista algum erro
function disableButtonIfFormHasErrors() {

    if(!formErrors.name && !formErrors.password) {

        loginButtonRef.disabled = false

    } else {

        loginButtonRef.disabled = true

    }

}

// Funcao que valida a senha do Usuario
function validateUserPassword(event) {

    const target = event.target
    const value = target.value
    // Criando uma variavel para armazenar um booleano que ira dizer se nosso Input esta valido ou nao
    const isValid = target.checkValidity()

    // Setando o valor que o usuario digitou na proprieade Password dentro do nosso Objeto User
    user.password = value

    // Verifica se o nosso Input é valido ou nao
    if(isValid) {

        // Removendo a classe de erro na Div que engloba o Input
        formControlPasswordRef.classList.remove('error')
        // Setando a propriedade name do formErrors como False pois o campo de fato nao possui erros
        formErrors.password = false
        console.log('Valor valido')

    } else {

        // Adicionando a classe de erro na Div que engloba o Input
        formControlPasswordRef.classList.add('error')
        // Setando a propriedade name do formErrors como True pois o campo de fato possui erros
        formErrors.password = true
        console.log('Valor invalido')

    }

    // Chamada da funcao que verifica se o botao deve ser desabilitado ou nao
    disableButtonIfFormHasErrors()

}

// Funcao que valida o Nome do Usuario
function validateUserName(event) {

    const target = event.target
    const value = target.value
    // Criando uma variavel para armazenar um booleano que ira dizer se nosso Input esta valido ou nao
    const isValid = target.checkValidity()

    // Setando o valor que o usuario digitou na proprieade Name dentro do nosso Objeto User
    user.name = value

    if(isValid) {

        // Removendo a classe de erro na Div que engloba o Input
        formControlNameRef.classList.remove('error')
        // Setando a propriedade name do formErrors como False pois o campo de fato nao possui erros
        formErrors.name = false
        console.log('Valor valido')

    } else {

        // Adicionando a classe de erro na Div que engloba o Input
        formControlNameRef.classList.add('error')
        // Setando a propriedade name do formErrors como True pois o campo de fato possui erros
        formErrors.name = true
        console.log('Valor invalido')

    }
    
    // Chamada da funcao que verifica se o botao deve ser desabilitado ou nao
    disableButtonIfFormHasErrors()

}

// Funcao que é disparada quando o usuario clicka no botao do Formulario
function login(event) {

    // Utilizacao do event.preventDefault() para nao fazer a pagina recarregar
    event.preventDefault()

    console.log(user)

}

// Adicao dos Event Listeners necessarios para o nosso script funcionar
userNameInputRef.addEventListener('keyup', (event) => validateUserName(event))
userPasswordInputRef.addEventListener('keyup', (event) => validateUserPassword(event))

loginButtonRef.addEventListener('click', (event) => login(event))