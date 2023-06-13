const userNameInputRef = document.querySelector('#userNameInput')
const userPasswordInputRef = document.querySelector('#userPasswordInput')
const buttonSubmitLoginRef = document.querySelector('#buttonSubmitLogin')

var user = {
    name: '',
    password: ''
}

userNameInputRef.addEventListener('keyup', (event) => user.name = event.target.value)
userPasswordInputRef.addEventListener('keyup', (event) => user.password = event.target.value)

buttonSubmitLoginRef.addEventListener('click', (event) => {

    event.preventDefault()

    const userData = {
        id: 1,
        name: user.name,
        email: 'ausdi@gmail.com'
    }

    localStorage.setItem('user', JSON.stringify(userData))

    window.location.href = 'home.html'

})