// script.js
const images = ["d1.webp", "d2.webp", "d3.webp","d4.webp","d5.webp"]; // Add your image URLs here
const intervalTime = 3000; // Time between image changes in milliseconds
let currentIndex = 0;

function changeImage() {
  const slide = document.getElementById("slide");
  slide.src = images[currentIndex];
  currentIndex = (currentIndex + 1) % images.length;
}

// Initial call to set the first image
changeImage(6);

// Start the interval to change images automatically
setInterval(changeImage, intervalTime);