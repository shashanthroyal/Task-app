// Get references to HTML elements
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

// Function to add a new task
function addTask() {
  const taskText = taskInput.value.trim();

  // Check if the input is not empty
  if (taskText !== "") {
    // Create a new list item
    const listItem = document.createElement("li");
    listItem.innerHTML = `
            <span>${taskText}</span>
            <button onclick="deleteTask(this)">Delete</button>
        `;

    // Append the new list item to the task list
    taskList.appendChild(listItem);

    // Clear the input field
    taskInput.value = "";
  }
}

// Function to delete a task
function deleteTask(button) {
  // Get the parent list item and remove it from the task list
  const listItem = button.parentElement;
  taskList.removeChild(listItem);
}