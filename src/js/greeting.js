const HIDDEN_CLASS = "hidden"

const mainForm = document.querySelector(".main-section");
const clock = mainForm.querySelector("h1");

checkLogin();


//localStorage

function checkLogin() {
    const savedId = localStorage.getItem("id");

    if (savedId === null) {
    } else {
        //userID.innerText = `Hello, ${savedId}`;

        mainForm.classList.remove(HIDDEN_CLASS);
    }
}

function preventLoginSubmit(e) {
    e.preventDefault(); // 브라우저 기본 동작을 막아줌 ex) submit -> 새로고침 x
    localStorage.setItem("id", inputLoginID.value);

    checkLogin();
}