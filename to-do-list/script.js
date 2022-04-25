const taskInput = document.getElementById("task-input");
const addTaskButton = document.getElementById("add-task-btn");
const taskList = document.getElementById("task-list");

addTaskButton.addEventListener("click", () => {
	const taskText = taskInput.value.trim();
	if (taskText === "") {
		alert("Please enter a task.");
		return;
	}

	const taskItem = document.createElement("li");
	taskItem.className = "task-item";

	const taskTextSpan = document.createElement("span");
	taskTextSpan.textContent = taskText;

	const deleteButton = document.createElement("button");
	deleteButton.textContent = "Delete";

	taskItem.appendChild(taskTextSpan);
	taskItem.appendChild(deleteButton);
	taskList.appendChild(taskItem);

	taskInput.value = "";

	taskTextSpan.addEventListener("click", () => {
		taskItem.classList.toggle("completed");
	});

	deleteButton.addEventListener("click", () => {
		taskList.removeChild(taskItem);
	});
});
