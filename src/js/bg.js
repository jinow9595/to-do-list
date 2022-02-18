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
    console.log(e.target);
}

function focusSearchInput() {
    inputKeyword.focus();
}

function getRandomBackground(e) {
    const keyword = inputKeyword.value;
    const bodyStyle = document.body.style;

    bodyStyle.backgroundSize = "cover";
    bodyStyle.backgroundPosition = "center center";
    bodyStyle.backgroundColor = "black";

    // if (keyword) {
    //     e.preventDefault();

    //     fetch(`https://source.unsplash.com/random/?${keyword}`).then(response => {
    //         bodyStyle.backgroundImage = `url(${response.url})`
    //     }).catch(error => {
    //         console.log(error);
    //         bodyStyle.backgroundColor = "black";
    //     });
    // } else {
    //     bodyStyle.backgroundImage = `url(https://source.unsplash.com/random/)`;
    // }
}