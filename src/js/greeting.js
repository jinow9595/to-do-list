const HIDDEN_CLASS = "hidden"

const nameForm = document.querySelector("#nameForm");
const inputName = nameForm.querySelector("input");
const greeting = nameForm.querySelector("div div");
const logoutButton = greeting.querySelector("i");

inputName.focus();
checkLogin();

nameForm.addEventListener("submit", preventLoginSubmit);
logoutButton.addEventListener("click", logout);

function logout() {
    localStorage.removeItem("id");
    inputName.value = "";

    checkLogin();
}

function checkLogin() {
    const savedId = localStorage.getItem("id");
    const nameSpan = greeting.querySelector("span");

    if (savedId === null) {
        inputName.classList.remove(HIDDEN_CLASS);
        greeting.classList.add(HIDDEN_CLASS);
    } else {
        nameSpan.innerText = `Hello, ${savedId}`;

        inputName.classList.add(HIDDEN_CLASS);
        greeting.classList.remove(HIDDEN_CLASS);
    }
}

function preventLoginSubmit(e) {
    e.preventDefault(); // 브라우저 기본 동작을 막아줌 ex) submit -> 새로고침 x
    localStorage.setItem("id", inputName.value);

    checkLogin();
}