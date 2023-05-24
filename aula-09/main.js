const nameInputRef = document.querySelector('#nameInput')
const submitFormButtonRef = document.querySelector('#submitFormButton')

var userName = ''

nameInputRef.addEventListener('keyup', (event) => {

    const inputValue = event.target.value

    userName = inputValue

})

submitFormButtonRef.addEventListener('click', (event) => {

    event.preventDefault()

    console.log(userName)

})