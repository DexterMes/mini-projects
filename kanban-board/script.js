function addTaskInput(columnId) {
	const column = document.getElementById(columnId);
	const taskList = column.querySelector(".task-list");

	const input = document.createElement("input");
	input.classList.add("task-input");
	input.placeholder = "Enter a new task...";
	taskList.appendChild(input);

	input.focus();

	input.addEventListener("keydown", function (event) {
		if (event.key === "Enter" && input.value.trim() !== "") {
			createTask(input.value, columnId);
			input.remove();
		}
	});
}

function createTask(taskText, columnId) {
	const column = document.getElementById(columnId);
	const taskList = column.querySelector(".task-list");

	const task = document.createElement("div");
	task.classList.add("task");
	task.draggable = true;
	task.innerHTML = `
      <span>${taskText}</span>
      <button class="delete-btn" onclick="deleteTask(this)">x</button>
  `;

	task.addEventListener("dragstart", (e) => {
		e.dataTransfer.setData("text", taskText);
		e.dataTransfer.setData("columnId", columnId);
	});

	taskList.appendChild(task);
}

function deleteTask(button) {
	const task = button.parentElement;
	task.remove();
}

function allowDrop(event) {
	event.preventDefault();
}

function drop(event) {
	event.preventDefault();
	const taskText = event.dataTransfer.getData("text");
	const columnId = event.dataTransfer.getData("columnId");
	const column = event.target.closest(".column");

	if (taskText && columnId !== column.id) {
		createTask(taskText, column.id);
		const previousColumn = document.getElementById(columnId);
		const previousTaskList = previousColumn.querySelector(".task-list");
		const taskToDelete = [...previousTaskList.children].find((task) => task.textContent.includes(taskText));
		if (taskToDelete) taskToDelete.remove();
	}
}
