const bodyStyle = document.body.style;
const bgSearchForm = document.querySelector("bgKeywordForm");
const keyword = "";

bodyStyle.backgroundImage = `url(https://source.unsplash.com/random/?${keyword})`;
bodyStyle.backgroundSize = "cover";
bodyStyle.backgroundPosition = "center center";

// 키워드 받아서 배경 랜덤 변경
// https://serranoarevalo.github.io/momonton/