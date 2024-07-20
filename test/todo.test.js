// test/todo.test.js
const { addTask } = require('../app/todo');
const { JSDOM } = require('jsdom');

describe('Todo App', () => {
    let document;

    beforeEach(() => {
        const dom = new JSDOM(`
            <!DOCTYPE html>
            <html>
            <body>
                <ul id="task-list"></ul>
            </body>
            </html>
        `);
        document = dom.window.document;
    });

    test('addTask adds a task to the list', () => {
        const taskList = document.getElementById('task-list');
        addTask(taskList, 'New Task');
        expect(taskList.children.length).toBe(1);
        expect(taskList.children[0].textContent).toBe('New TaskSupprimer');
    });

    test('addTask adds a delete button to the task', () => {
        const taskList = document.getElementById('task-list');
        addTask(taskList, 'New Task');
        const deleteButton = taskList.children[0].querySelector('button');
        expect(deleteButton).not.toBeNull();
        expect(deleteButton.textContent).toBe('Supprimer');
    });

    test('delete button removes the task from the list', () => {
        const taskList = document.getElementById('task-list');
        addTask(taskList, 'New Task');
        const deleteButton = taskList.children[0].querySelector('button');
        deleteButton.click();
        expect(taskList.children.length).toBe(0);
    });
});
