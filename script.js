// Digital Clock
function updateClock() {
  const now = new Date();
  const clock = document.getElementById("clock");
  clock.textContent = now.toLocaleTimeString();
}
setInterval(updateClock, 1000);
updateClock();
// Fetch Todos
fetch("https://jsonplaceholder.typicode.com/todos")
  .then((response) => response.json())
  .then((data) => {
    const todosGrid = document.getElementById("todos-grid");
    data.forEach((todo) => {
      const todoItem = document.createElement("div");
      todoItem.classList.add("todo");

      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.classList.add("todo-checkbox");
      checkbox.addEventListener("change", function () {
        if (checkbox.checked) {
          title.style.textDecoration = "line-through";
        } else {
          title.style.textDecoration = "none";
        }
      });

      const title = document.createElement("span");
      title.textContent = todo.title;
      todoItem.appendChild(checkbox);
      todoItem.appendChild(title);

      todosGrid.appendChild(todoItem);
    });
  });
