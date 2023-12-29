function addTask() {
  var taskInput = document.getElementById("taskInput");
  var priority = document.getElementById("priority");
  var deadline = document.getElementById("deadline");
  var labels = document.getElementById("labels");
  var taskList = document.getElementById("taskList");

  if (taskInput.value.trim() === "") {
      alert("Please enter a task description");
      return;
  }

  var li = document.createElement("li");
  li.innerHTML =
      '<div class="task-details">' +
          '<p class="task-description">' + taskInput.value + '</p>' +
          '<span class="task-priority">' + priority.value + '</span>' +
          '<span class="task-deadline">' + (deadline.value || 'No Deadline') + '</span>' +
          '<span class="task-labels">' + labels.value + '</span>' +
      '</div>' +
      '<div class="task-actions">' +
          '<button onclick="removeTask(this)">Remove</button>' +
      '</div>';

  taskList.appendChild(li);

  // Clear input fields after adding task
  taskInput.value = "";
  priority.value = "low";
  deadline.value = "";
  labels.value = "";
}

// The removeTask function remains the same
