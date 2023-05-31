const formControlNameRef = document.querySelector('#formControlNome')
const userNameInputRef = document.querySelector('#userNameInput')

const formControlPasswordRef = document.querySelector('#formControlPassword')
const userPasswordInputRef = document.querySelector('#userPasswordInput')

const loginButtonRef = document.querySelector('#loginButton')

var formErrors = {
    name: true,
    password: true
}

var user = {
    name: '',
    password: ''
}

function disableButtonIfFormHasErrors() {

    if(!formErrors.name && !formErrors.password) {

        loginButtonRef.disabled = false

    } else {

        loginButtonRef.disabled = true

    }

}

function validateUserPassword(event) {

    const target = event.target
    const value = target.value
    const isValid = target.checkValidity()

    user.password = value

    if(isValid) {

        target.parentNode.classList.remove('error')
        formErrors.password = false
        console.log('Valor valido')

    } else {

        target.parentNode.classList.add('error')
        formErrors.password = true
        console.log('Valor invalido')

    }

    disableButtonIfFormHasErrors()

}

function validateUserName(event) {

    const target = event.target
    const value = target.value
    const isValid = target.checkValidity()

    user.name = value

    if(isValid) {

        formControlNameRef.classList.remove('error')
        formErrors.name = false
        console.log('Valor valido')

    } else {

        formControlNameRef.classList.add('error')
        formErrors.name = true
        console.log('Valor invalido')

    }
    
    disableButtonIfFormHasErrors()

}

function login(event) {

    event.preventDefault()

    console.log(user)

}

userNameInputRef.addEventListener('keyup', (event) => validateUserName(event))
userPasswordInputRef.addEventListener('keyup', (event) => validateUserPassword(event))

loginButtonRef.addEventListener('click', (event) => login(event))