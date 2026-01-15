function addTask() {
  let taskInput = document.getElementById("taskInput").value;
  let dateInput = document.getElementById("dateInput").value;
  let taskList = document.getElementById("taskList");

  if (taskInput === "" || dateInput === "") {
    alert("Please enter a task and select a date!");
    return;
  }

  // Create list item
  let li = document.createElement("li");
  li.innerHTML = `${taskInput} <small>(Due: ${dateInput})</small> 
                  <button class="remove-btn" onclick="removeTask(this)">X</button>`;

  // Add to list
  taskList.appendChild(li);

  // Clear inputs
  document.getElementById("taskInput").value = "";
  document.getElementById("dateInput").value = "";
}

// Remove task
function removeTask(button) {
  button.parentElement.remove();
}
