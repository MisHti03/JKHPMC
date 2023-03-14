const slider = document.querySelector('.slider');
const dotsContainer = document.querySelector('.slider-dots');
const images = slider.querySelectorAll('img');

let currentSlide = 0;
let intervalId;

function initSlider() {
  images[0].classList.add('active');
  createDots();
  startSlider();
}

function createDots() {
  for (let i = 0; i < images.length; i++) {
    const dot = document.createElement('div');
    dot.classList.add('slider-dot');
    dot.addEventListener('click', () => {
      goToSlide(i);
    });
    dotsContainer.appendChild(dot);
  }
  dotsContainer.firstChild.classList.add('active');
}

function startSlider() {
  intervalId = setInterval(() => {
    goToSlide(currentSlide + 1);
  }, 5000);
}

function goToSlide(slideIndex) {
  clearInterval(intervalId);
  images[currentSlide].classList.remove('active');
  dotsContainer.childNodes[currentSlide].classList.remove('active');
  currentSlide = (slideIndex + images.length) % images.length;
  images[currentSlide].classList.add('active');
  dotsContainer.childNodes[currentSlide].classList.add('active');
  startSlider();
}

initSlider();
