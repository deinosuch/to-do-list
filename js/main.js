const task_container = document.querySelector(".container")


function create_task(name) {
    let new_task = document.querySelector(".task-template").cloneNode(true)
    new_task.querySelector("p").innerHTML = name
    new_task.classList.remove("task-template")
    task_container.append(new_task)
}