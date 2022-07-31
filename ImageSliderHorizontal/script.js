const body = document.body;
const slides = document.querySelectorAll('.slide');
const leftBtn = document.querySelector('.arrow-left');
const rightBtn = document.querySelector('.arrow-right');

let activeSlide = 0;
const n = slides.length;
setBgToBody();
function setBgToBody() {
  body.style.backgroundImage = slides[activeSlide].style.backgroundImage;
}

function setActiveSlide() {
  slides[activeSlide].classList.add('active');
}

function removeActiveSlide() {
  slides[activeSlide].classList.remove('active');
}

function slideLeft() {
  removeActiveSlide();
  activeSlide = (activeSlide - 1 + n) % n;
  setActiveSlide();
  setBgToBody();
}

function slideRight() {
  removeActiveSlide();
  activeSlide = (activeSlide + 1) % n;
  setActiveSlide();
  setBgToBody();
}

leftBtn.addEventListener('click', slideLeft);
rightBtn.addEventListener('click', slideRight);
