const images = ["1.jpg", "2.png", "3.jpg", "4.jpg"];

const randomImage = images[Math.floor(Math.random() * images.length)];

const backgroundImage = document.createElement("img");

backgroundImage.src = `src/images/${randomImage}`;

quote.appendChild(backgroundImage);