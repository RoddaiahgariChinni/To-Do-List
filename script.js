// Select elements
const taskInput = document.getElementById('task-input');
const addTaskButton = document.getElementById('add-task-btn');
const taskList = document.getElementById('task-list');

// Add event listener to the Add Task button
addTaskButton.addEventListener('click', () => {
    const taskText = taskInput.value.trim();

    // Check if the input is not empty
    if (taskText !== "") {
        addTaskToList(taskText);
        taskInput.value = ""; // Clear the input field
    }
});

// Function to add task to the list
function addTaskToList(taskText) {
    const taskItem = document.createElement('li');
    taskItem.classList.add('task-item');

    // Create task text node
    const taskContent = document.createElement('span');
    taskContent.textContent = taskText;

    // Create delete button
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';

    // Add event listener to remove task
    deleteButton.addEventListener('click', () => {
        taskItem.remove();
    });

    // Append task content and delete button to task item
    taskItem.appendChild(taskContent);
    taskItem.appendChild(deleteButton);

    // Append task item to the task list
    taskList.appendChild(taskItem);
}
