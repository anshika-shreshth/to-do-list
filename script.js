document.addEventListener('DOMContentLoaded', () => {
    const todoForm = document.getElementById('todo-form');
    const todoInput = document.getElementById('todo-input');
    const todoList = document.getElementById('todo-list');

    todoForm.addEventListener('submit', function(e) {
        e.preventDefault();
        addTodo(todoInput.value);
        todoInput.value = '';
    });

    function addTodo(task) {
        if (task.trim() === '') return;

        const li = document.createElement('li');
        
        const label = document.createElement('label');
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.addEventListener('change', () => {
            li.classList.toggle('completed', checkbox.checked);
        });

        const span = document.createElement('span');
        span.textContent = task;

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = '-';
        deleteBtn.addEventListener('click', () => {
            todoList.removeChild(li);
        });

        label.appendChild(checkbox);
        label.appendChild(span);
        li.appendChild(label);
        li.appendChild(deleteBtn);
        todoList.appendChild(li);
    }
});
