const apiBaseUrl = 'https://todo-api.ctd.academy/v1'
const jwt = localStorage.getItem('jwt')
const submitButtonNewTaskRef = document.querySelector('#submitButtonNewTask')
const openTasksListRef = document.querySelector('#openTasksList')
const requestHeadersAuth = {
    "Accept": "application/json",
    "Content-Type": "application/json",
    "Authorization": jwt
}
var tasks = {
    openeds : [],
    closeds: []
}

function logOut() {

    localStorage.clear()
    window.location.href = 'index.html'

}

function insertTasksHtml(tasks) {

    openTasksListRef.innerHTML = ''

    for(let task of tasks) {

        const taskDate = new Date(task.createdAt)
        const taskDateFormated = new Intl.DateTimeFormat('pt-BR').format(taskDate)

        openTasksListRef.innerHTML += `
            <li class="tarefa">
                <div class="not-done"></div>
                <div class="descricao">
                    <p class="nome">${task.description}</p>
                    <p class="timestamp">Criada em: ${taskDateFormated}</p>
                </div>
            </li>
        `

    }

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
                        
                        setTimeout(() => insertTasksHtml(tasks), 1000)
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

function createTask(event) {

    event.preventDefault()

    const task = {
        description: 'Finalizar App To-Do',
        completed: false
    }

    const requestSettings = {
        method: 'POST',
        body: JSON.stringify(task),
        headers: requestHeadersAuth
    }

    fetch(`${apiBaseUrl}/tasks`, requestSettings).then(
        response => {
            if(response.ok) {
                getTasks()
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

submitButtonNewTaskRef.addEventListener('click', event => createTask(event))

checkAuthUser()