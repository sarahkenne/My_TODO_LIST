function addTask(taskList, taskText) {
    const document = taskList.ownerDocument; 
    const li = document.createElement('li');
    li.textContent = taskText;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Supprimer';
    deleteButton.addEventListener('click', () => {
        taskList.removeChild(li);
    });

    li.appendChild(deleteButton);
    taskList.appendChild(li);
}

module.exports = { addTask };
