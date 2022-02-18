const TODO_LISTS = "todoLists";

const todoForm = document.querySelector("#todoListForm");
const todoList = document.querySelector(".todo-list");
const todoInput = todoForm.querySelector("input");

let todoLists = [];
const getTodoLists = localStorage.getItem(TODO_LISTS);

if (getTodoLists) {
    const parsedTodoLists = JSON.parse(getTodoLists);

    todoLists = parsedTodoLists;
    parsedTodoLists.forEach((item) => addTodo(item));
}

todoForm.addEventListener("submit", submitTodo);

function submitTodo(e) {
    e.preventDefault();

    const todo = todoInput.value;
    const todoObj = {
        id: Date.now(),
        text: todo
    }

    todoInput.value = "";

    if (todoLists.length < 15) {
        todoLists.push(todoObj);

        addTodo(todoObj);
        saveTodo();
    } else {
        alert("remove before add");
    }

}

function addTodo(todoObj) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    const button = document.createElement("button");

    button.innerText = "❌";
    li.id = todoObj.id;
    span.innerText = todoObj.text;

    li.appendChild(button);
    li.appendChild(span);
    todoList.appendChild(li);

    button.addEventListener("click", deleteTodo);
}

function saveTodo() {
    localStorage.setItem(TODO_LISTS, JSON.stringify(todoLists));
}

function deleteTodo(e) {
    const li = e.target.parentElement;

    li.remove();

    todoLists = todoLists.filter(item => item.id !== parseInt(li.id));

    saveTodo();
} 