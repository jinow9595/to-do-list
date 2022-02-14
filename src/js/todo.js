const todoForm = document.querySelector("#todo-form");
const todoList = document.querySelector("#todo-list");
const todoInput = todoForm.querySelector("input");

todoForm.addEventListener("submit", submitTodo);

function submitTodo(e) {
    e.preventDefault();

    const todo = todoInput.value;

    todoInput.value = "";
}