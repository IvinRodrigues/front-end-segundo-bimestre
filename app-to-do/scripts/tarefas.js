const apiBaseUrl = 'https://todo-api.ctd.academy/v1'
const jwt = localStorage.getItem('jwt')
const requestHeadersAuth = {
    "Accept": "application/json",
    "Content-Type": "application/json",
    "Authorization": jwt
}

function logOut() {

    localStorage.clear()
    window.location.href = 'index.html'

}

function getTasks() {

    const requestSettings = {
        method: 'GET',
        headers: requestHeadersAuth
    }

    fetch(`${apiBaseUrl}/tasks`, requestSettings).then(
        response => {
            if(response.ok) {
                response.json().then(
                    tasks => {
                        console.log(tasks)
                    }
                )
            } else {
                if(response.status === 401) {
                    logOut()
                }
            }
        }
    )

}

function checkAuthUser() {

    if(jwt === null) {

        logOut()
    
    } else {
    
        getTasks()
    
    }

}

checkAuthUser()