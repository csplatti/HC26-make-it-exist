const taskInput = document.getElementById("task_name_input");
const addTaskButton = document.getElementById("task_submit_button");
const taskContainer = document.getElementById("task_container");
const noTasksMessage = document.getElementById("no_tasks_message");

function removeTask(event) {
    event.target.parentElement.remove();

    if (taskContainer.children.length === 0) {
        taskContainer.appendChild(noTasksMessage);
    }
}

function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        return;
    }

    noTasksMessage.remove();

    const task = document.createElement("div");
    const completeButton = document.createElement("button");

    task.textContent = taskText;
    completeButton.textContent = "X";
    completeButton.className = "complete";

    completeButton.addEventListener("click", removeTask);

    task.appendChild(completeButton);
    taskContainer.appendChild(task);

    taskInput.value = "";
    taskInput.focus();
}

addTaskButton.addEventListener("click", function (event) {
    event.preventDefault();
    addTask();
});

taskInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        addTask();
    }
});

const existingCompleteButtons = document.querySelectorAll(".complete");

existingCompleteButtons.forEach(function (button) {
    button.addEventListener("click", removeTask);
});
