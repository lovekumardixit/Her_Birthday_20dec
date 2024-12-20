let currentIndex = 0;
const slides = document.querySelectorAll('.slider .item');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');

function showSlide(index) {
  if (index >= slides.length) {
    currentIndex = 0;
  } else if (index < 0) {
    currentIndex = slides.length - 1;
  } else {
    currentIndex = index;
  }
  slides.forEach((slide, i) => {
    slide.style.display = i === currentIndex ? 'block' : 'none';
  });
}

prevButton.addEventListener('click', () => showSlide(currentIndex - 1));
nextButton.addEventListener('click', () => showSlide(currentIndex + 1));

document.querySelectorAll('.slider .item').forEach((item, index) => {
  item.addEventListener('click', () => showSlide(index + 1));
});

showSlide(currentIndex);
