const taskInput = document.getElementById("task_name_input");
const addTaskButton = document.getElementById("task_submit_button");
const taskContainer = document.getElementById("task_container");

function addTask() {
    const taskText = taskInput.value;

    const task = document.createElement("div");
    task.textContent = taskText;

    taskContainer.appendChild(task);

    taskInput.value = "";
}

addTaskButton.addEventListener("click", function () {
    addTask();
});
