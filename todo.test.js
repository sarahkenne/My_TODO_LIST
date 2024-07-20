const { addTask } = require('./todo');
const { JSDOM } = require('jsdom');

describe('Todo App', () => {
    let document;

    beforeEach(() => {
        const dom = new JSDOM(`<!DOCTYPE html><body><ul id="task-list"></ul></body>`);
        document = dom.window.document;
    });

    test('addTask adds a task to the list', () => {
        const taskList = document.getElementById('task-list');
        const taskText = 'Nouvelle tâche';

        addTask(taskList, taskText);

        expect(taskList.children.length).toBe(1);
        expect(taskList.children[0].textContent).toContain(taskText);
    });

    test('addTask adds a delete button to the task', () => {
        const taskList = document.getElementById('task-list');
        const taskText = 'Nouvelle tâche';

        addTask(taskList, taskText);

        const deleteButton = taskList.children[0].querySelector('button');
        expect(deleteButton).not.toBeNull();
        expect(deleteButton.textContent).toBe('Supprimer');
    });

    test('delete button removes the task from the list', () => {
        const taskList = document.getElementById('task-list');
        const taskText = 'Nouvelle tâche';

        addTask(taskList, taskText);

        const deleteButton = taskList.children[0].querySelector('button');
        deleteButton.click();

        expect(taskList.children.length).toBe(0);
    });
});
