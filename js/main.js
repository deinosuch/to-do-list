const task_container = document.querySelector(".container")
const button = document.querySelector(".button")
const input = document.getElementById("task-to-add")
const completed = document.getElementById("completed")
const total = document.getElementById("total")

let total_tasks = localStorage.getItem("total_tasks")
let complete_tasks = localStorage.getItem("done_tasks")
complete_tasks = (complete_tasks == null) ? 0 : complete_tasks
total_tasks = (total_tasks == null) ? 0 : total_tasks

function load_data() {
    completed.innerHTML = complete_tasks
    total.innerHTML = total_tasks

    let tasks = localStorage.getItem("tasks")
    if(tasks != null) {
        task_container.innerHTML = tasks
        for (let task of task_container.children) {
            task.querySelector(".not-done").onclick = e => done_task(e.target)
            task.querySelector(".far").onclick = e => remove_task(e.target.parentElement)
        }
    }
}

function store_tasks() {
    localStorage.setItem("tasks", task_container.innerHTML)
}

function done_task(task) {
    task.classList.toggle("done") ? complete_tasks++ : complete_tasks--
    completed.innerHTML = complete_tasks
    localStorage.setItem("done_tasks", complete_tasks)
    store_tasks()
}

function remove_task(task) {
    task.remove()
    store_tasks()
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
    localStorage.setItem("total_tasks", total_tasks)
    store_tasks()
}

button.onclick = e => {
    if(input.value == "") {
        alert("input is empty")
    } else {
        add_task(input.value)
    }
}

load_data()
