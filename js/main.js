const task_container = document.querySelector(".container")
const button = document.querySelector(".button")
const input = document.getElementById("task-to-add")


function create_task(name) {
    let new_task = document.querySelector(".task-template").cloneNode(true)
    new_task.querySelector("p").innerHTML = name
    new_task.classList.remove("task-template")

    new_task.querySelector(".not-done").onclick = e => {
        e.target.classList.toggle("done")
    }

    task_container.append(new_task)
}

button.onclick = e => {
    if(input.value == "") {
        alert("input is empty")
    } else {
        create_task(input.value)
    }
}
