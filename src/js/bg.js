const bodyStyle = document.body.style;
const bgSearchForm = document.querySelector("#bgSearchForm");
const searchIcon = bgSearchForm.querySelector("i");
const inputKeyword = bgSearchForm.querySelector("input");
const toggleDiv = document.querySelector(".toggle-switch");
const toggleOff = toggleDiv.querySelector("i:first-child");
const toggleOn = toggleDiv.querySelector("i:last-child");

getRandomBackground();

bgSearchForm.addEventListener("submit", getRandomBackground);
searchIcon.addEventListener("click", focusSearchInput);
toggleDiv.addEventListener("click", changeToggle);

function changeToggle(e) {
    const toggle = e.target.getAttribute("value");

    if (toggle === "ON") { // color black -> white
        const input = document.querySelectorAll("input");
        const icon = document.querySelectorAll("i");
        const span = document.querySelectorAll("span");

        bodyStyle.backgroundColor = "black";
        document.querySelector("footer div span").style.color = "white";
        document.querySelector("h1").style.color = "white";
        document.querySelector(".todo-list").style.color = "white";

        for (let i = 0; i < input.length; i++) {
            input[i].style.color = "white";
            input[i].style.borderBottom = "2px solid white";
            input[i].classList.remove("placeholder-black");
        }

        for (let i = 0; i < icon.length; i++) {
            icon[i].style.color = "white";
        }

        for (let i = 0; i < span.length; i++) {
            span[i].style.color = "white";
        }

        toggleOn.style.display = "none";
        toggleOff.style.display = "";
    } else { // color white -> black
        const input = document.querySelectorAll("input");
        const icon = document.querySelectorAll("i");
        const span = document.querySelectorAll("span");

        bodyStyle.backgroundColor = "white";
        document.querySelector("footer div span").style.color = "black";
        document.querySelector("h1").style.color = "black";
        document.querySelector(".todo-list").style.color = "black";

        for (let i = 0; i < input.length; i++) {
            input[i].style.color = "black";
            input[i].style.borderBottom = "2px solid black";

            input[i].classList.add("placeholder-black");
        }

        for (let i = 0; i < icon.length; i++) {
            icon[i].style.color = "black";
        }

        for (let i = 0; i < span.length; i++) {
            span[i].style.color = "black";
        }

        toggleOn.style.display = "";
        toggleOff.style.display = "none";
    }
}

function focusSearchInput() {
    inputKeyword.focus();
}

function getRandomBackground(e) {
    const keyword = inputKeyword.value;

    bodyStyle.backgroundSize = "cover";
    bodyStyle.backgroundPosition = "center center";
    bodyStyle.backgroundColor = "black";

    if (keyword) {
        e.preventDefault();
        /*fetch(`https://source.unsplash.com/random/?${keyword}`).then(response => {
            bodyStyle.backgroundImage = `url(${response.url})`
        }).catch(error => {
            console.log(error);
            bodyStyle.backgroundColor = "black";
        });*/
        // bodyStyle.backgroundImage = `url(https://source.unsplash.com/random/?${keyword})`; // 기존에 검색했던 키워드로 재검색 시 이전 검색 배경 노출됨
    } else {
        // bodyStyle.backgroundImage = `url(https://source.unsplash.com/random/)`;
    }
}