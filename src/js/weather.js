navigator.geolocation.getCurrentPosition(successGeo, errorGeo);

const API_KEY = "5bf2d22c3e516c63bfbcb4f339b7244b";

function successGeo(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;

    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;

    console.log(url);
    fetch(url).then(response => response.json().then(data => {
        console.log(data);
    }));
}

function errorGeo() {
    alert("can't find location or weather");
}