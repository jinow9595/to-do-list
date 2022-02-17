const timeText = document.querySelector("h1");

clockHandler();

setInterval(clockHandler, 1000); // setInterval 다시 호출 시 이전 함수는 기능하지 않음
// setTimeout(clockHandler, 1000); <-- 한 번만 실행됨


function clockHandler() {
    const date = new Date();

    const Hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");

    timeText.innerText = `${Hours}:${minutes}`;
}