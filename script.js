// Fetch Todos
fetch('https://jsonplaceholder.typicode.com/todos')
.then(response => response.json())
.then(data => {
    const todosGrid = document.getElementById('todos-grid');
    data.forEach(todo => {
        const todoItem = document.createElement('div');
        todoItem.classList.add('todo');
        todoItem.textContent = todo.title;
        todosGrid.appendChild(todoItem);
    });
});

// Digital Clock
function updateClock() {
const now = new Date();
const clock = document.getElementById('clock');
clock.textContent = now.toLocaleTimeString();
}
setInterval(updateClock, 1000);
updateClock();