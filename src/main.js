document.addEventListener('DOMContentLoaded', function () {
    const taskInput = document.querySelector('input[type="text"]');
    const addTaskBtn = document.querySelector('.bg-green-600');
    const resetBtn = document.querySelector('.bg-red-700');
    const taskList = document.querySelector('.task-list');

    addTaskBtn.addEventListener('click', addTask);
    resetBtn.addEventListener('click', resetTasks);

    function addTask() {
        const taskText = taskInput.value.trim();

        if (taskText !== '') {
            const taskDiv = document.createElement('div');
            taskDiv.classList.add('task-item');
            const taskContent = document.createElement('div');
            taskContent.classList.add('task-content');
            taskContent.textContent = taskText;

            const deleteBtn = document.createElement('button');
            deleteBtn.innerHTML = '<img src="./delete-icon.png" alt="Delete">';
            deleteBtn.classList.add('delete-btn');
            deleteBtn.addEventListener('click', deleteTask);

            taskDiv.appendChild(taskContent);
            taskDiv.appendChild(deleteBtn);

            taskList.appendChild(taskDiv);

            taskInput.value = '';
        }
    }

    function resetTasks() {
        taskList.innerHTML = '';
    }

    function deleteTask(event) {
        const taskItem = event.target.closest('.task-item');
        if (taskItem) {
            taskItem.remove();
        }
    }
});
