const task_container = document.querySelector(".container")
const button = document.querySelector(".button")
const input = document.getElementById("task-to-add")
const completed = document.getElementById("completed")
const total = document.getElementById("total")

let total_tasks = 0
let complete_tasks = 0

function done_task(task) {
    task.classList.toggle("done") ? complete_tasks++ : complete_tasks--
    completed.innerHTML = complete_tasks
}

function remove_task(task) {
    task.remove()
}

function create_task(name) {
    let new_task = document.querySelector(".task-template").cloneNode(true)
    new_task.querySelector("p").innerHTML = name
    new_task.classList.remove("task-template")

    new_task.querySelector(".not-done").onclick = e => done_task(e.target)
    new_task.querySelector(".far").onclick = e => remove_task(e.target.parentElement)

    return new_task
}

function add_task(name) {
    let new_task = create_task(name)
    task_container.append(new_task)
    total.innerHTML = ++total_tasks
}

button.onclick = e => {
    if(input.value == "") {
        alert("input is empty")
    } else {
        add_task(input.value)
    }
}
