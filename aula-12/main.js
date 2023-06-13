const userNameInputRef = document.querySelector('#userNameInput')
const userLastNameInputRef = document.querySelector('#userLastNameInput')
const userPasswordInputRef = document.querySelector('#userPasswordInput')
const loginButtonRef = document.querySelector('#loginButton')

var formErrors = {
    nickname: true,
    lastname: true,
    password: true
}

var user = {
    nickname: '',
    lastname: '',
    password: ''
}

function disableButtonIfFormHasErrors() {

    if(!formErrors.nickname && !formErrors.lastname && !formErrors.password) {

        loginButtonRef.disabled = false

    } else {

        loginButtonRef.disabled = true

    }

}

function validateInput(event) {

    const target = event.target
    const value = target.value
    const parent = target.parentNode
    const isValid = target.checkValidity()

    user[target.name] = value.trim()

    if(isValid) {

        parent.classList.remove('error')
        formErrors[target.name] = false

    } else {

        parent.classList.add('error')
        formErrors[target.name] = true

    }
    
    disableButtonIfFormHasErrors()

}

function login(event) {

    event.preventDefault()

    console.log(user)

}

userNameInputRef.addEventListener('keyup', (event) => validateInput(event))
userLastNameInputRef.addEventListener('keyup', (event) => validateInput(event))
userPasswordInputRef.addEventListener('keyup', (event) => validateInput(event))
loginButtonRef.addEventListener('click', (event) => login(event))