const clockText = document.querySelector("h1");
const hourText = clockText.querySelector("span:first-child");
const colon = clockText.querySelector("span:nth-child(2)");
const minText = clockText.querySelector("span:last-child");

clockHandler();

setInterval(clockHandler, 1000); // setInterval 다시 호출 시 이전 함수는 기능하지 않음
// setTimeout(clockHandler, 1000); <-- 한 번만 실행됨


function clockHandler() {
    const date = new Date();

    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");

    hourText.innerText = `${hours}`;
    minText.innerText = `${minutes}`;

    if (seconds % 2 === 0)
        colon.style.visibility = "";
    else
        colon.style.visibility = "hidden";
}