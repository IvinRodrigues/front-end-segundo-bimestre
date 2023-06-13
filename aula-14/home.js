const userNameRef = document.querySelector('#userName')
const userDataJSON = localStorage.getItem('user')
const userData = JSON.parse(userDataJSON)
const logoutButtonRef = document.querySelector('#logoutButton')

userNameRef.innerText = userData.name

logoutButtonRef.addEventListener('click', () => {

    localStorage.clear()

    window.location.href = 'index.html'

})