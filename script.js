// JavaScript code for carousel functionality and fullscreen toggle
const carousel = document.getElementById("carousel");
const slides = carousel.querySelectorAll(".slide");

let currentSlide = 0;

function nextSlide() {
  slides[currentSlide].classList.remove("active");
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].classList.add("active");
  carousel.style.transform = `translateX(-${currentSlide * 33.333}%`;
}

function toggleFullscreen() {
  if (!document.fullscreenElement) {
    carousel.requestFullscreen();
  } else {
    document.exitFullscreen();
  }
}

setInterval(nextSlide, 5000);
