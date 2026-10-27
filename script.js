const taskInput = document.getElementById("task_name_input");
const addTaskButton = document.getElementById("task_submit_button");
const taskContainer = document.getElementById("task_container");

// Challenge: Get the "No tasks yet" message from the page.
// const noTasksMessage = document.getElementById("no_tasks_message");

// Challenge: Remove a task when its X button is clicked.
/* function removeTask(event) {
    event.target.parentElement.remove();

    // Challenge: Show the empty message when the last task is removed.
    if (taskContainer.children.length === 0) {
        taskContainer.appendChild(noTasksMessage);
    }
} */

function addTask() {
    const taskText = taskInput.value;

    // Challenge: Do not add a task if the input is empty.
    /*
    if (taskText === "") {
        return;
    }
    */

    // Challenge: Remove the "No tasks yet" message after adding a task.
    // noTasksMessage.remove();

    const task = document.createElement("div");
    task.textContent = taskText;

    // Challenge: Add an X button that removes its task.
    /*
    const completeButton = document.createElement("button");
    completeButton.textContent = "X";
    completeButton.className = "complete";
    completeButton.addEventListener("click", removeTask);

    task.appendChild(completeButton);
    */

    taskContainer.appendChild(task);

    taskInput.value = "";

    // Challenge: Put the cursor back in the input after adding a task.
    // taskInput.focus();
}

addTaskButton.addEventListener("click", function () {
    addTask();
});

// Challenge: Add a task when the Enter key is pressed.
/*
taskInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        addTask();
    }
});
*/
