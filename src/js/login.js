const HIDDEN_CLASS = "hidden"

const loginForm = document.querySelector("#login-form");
const inputLoginID = loginForm.querySelector("input");
const mainForm = document.querySelector("#main-form");
const clock = mainForm.querySelector("h1");
const userID = mainForm.querySelector("li");
const logoutButton = mainForm.querySelector("button");

checkLogin();

loginForm.addEventListener("submit", preventLoginSubmit);
logoutButton.addEventListener("click", clickLogout);

//localStorage

function checkLogin() {
    const savedId = localStorage.getItem("id");

    if (savedId === null) {
        loginForm.classList.remove(HIDDEN_CLASS);
    } else {
        userID.innerText = `Hello, ${savedId}`;

        mainForm.classList.remove(HIDDEN_CLASS);
        loginForm.classList.add(HIDDEN_CLASS);
    }
}

function preventLoginSubmit(e) {
    e.preventDefault(); // 브라우저 기본 동작을 막아줌 ex) submit -> 새로고침 x
    localStorage.setItem("id", inputLoginID.value);

    checkLogin();
}

function clickLogout() {
    localStorage.removeItem("id");

    location.reload();
}