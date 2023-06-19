const apiBaseUrl = 'https://todo-api.ctd.academy/v1'
const buttonLoginSubmitRef = document.querySelector('#buttonLoginSubmit')

var user = {
    email: "ivin1@mail.com",
    password: "12345678"
}

function authUser(event) {

    event.preventDefault()

    const requestHeaders = {
        "Accept": "application/json",
        "Content-Type": "application/json"
    }

    const requestSettings = {
        method: 'POST',
        body: JSON.stringify(user),
        headers: requestHeaders
    }

    fetch(`${apiBaseUrl}/users/login`, requestSettings).then(
        response => {
            console.log(response)
            if(response.ok) {
                response.json().then(
                    jwt => {
                        localStorage.setItem('jwt', jwt.jwt)
                        window.location.href = 'tarefas.html'
                    }
                )
            } else {
                // alert('esse e-mail ja foi cadastrado')
            }
        }
    )

}

buttonLoginSubmitRef.addEventListener('click', event => authUser(event))