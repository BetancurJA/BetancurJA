var taskList = [];

function addTask() {
	var taskInput = document.getElementById("task-input");
	var taskListUl = document.getElementById("task-list");

	if (taskInput.value !== "") {
		taskList.push(taskInput.value);

		var li = document.createElement("li");
		var taskText = document.createElement("span");
		var deleteBtn = document.createElement("button");

		taskText.textContent = taskInput.value;
		deleteBtn.textContent = "Eliminar";

		li.appendChild(taskText);
		li.appendChild(deleteBtn);

		taskListUl.appendChild(li);

		taskInput.value = "";
	}

	deleteBtn.onclick = function() {
		taskList.splice(taskList.indexOf(taskText.textContent), 1);
		taskListUl.removeChild(li);
	};
}
