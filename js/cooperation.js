const form = document.getElementById('todo-form');
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');

form.addEventListener('submit', function (event) { // отменяем стандартное поведение формы чтобы страница не перезагружалась
    event.preventDefault();

    const task = todoInput.value.trim(); // значениебытын ылабыт полеттан уонна наадата суох пробелы сотторобут хехехе

    if (task !== '') {
        // Create new list item
        const listItem = document.createElement('li');
        const taskText = document.createElement('span');
        const deleteButton = document.createElement('button');

        taskText.textContent = task;
        deleteButton.textContent = 'Удалить';
        deleteButton.classList.add('delete'); // класс эбэбит

        listItem.appendChild(taskText);
        listItem.appendChild(deleteButton);
        todoList.appendChild(listItem);
        todoInput.value = '';
    }
});


todoList.addEventListener('click', function (event) {
    if (event.target.classList.contains('delete')) { // Проверяем, что кликнутый элемент содержит класс delete
        event.target.parentNode.remove(); // Удаляем родительский элемент кнопки удаления
    }
});


todoList.addEventListener('click', function(event) {
    if (event.target.tagName === 'LI' || event.target.parentNode.tagName === 'LI') {
        const listItem = event.target.tagName === 'LI' ? event.target : event.target.parentNode;
        listItem.classList.toggle('completed');
    }
});


document.addEventListener('DOMContentLoaded', function () {
    const savedTasks = localStorage.getItem('tasks'); // Получаем сохраненные задачи из localStorage

    if (savedTasks !== null) {
        todoList.innerHTML = savedTasks; // Список задачка кииллэрэбит сохраненнай задачалары
    }
});

window.addEventListener('beforeunload', function () {
    localStorage.setItem('tasks', todoList.innerHTML); // Сохраняем состояние списка задач
});