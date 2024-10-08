const container = document.querySelector('.galary-menu');
const slides = document.querySelectorAll('.galary-menu-item');
const prevBtn = document.querySelector('.galary-button-left');
const nextBtn = document.querySelector('.galary-button-right');

let currentSlide = 0;
let slideWidth = slides[0].offsetWidth;


function goToSlideRight(index) {
  for(var i = 0; i<slides.length; i++) {
      slides[i].style.transform = `translateX(${-slideWidth * index}px)`;
  }
  currentSlide = index;
  prevBtn.style.display = "block";
}

function goToSlideLeft(index) {
  for(var i = 0; i<slides.length; i++) {
      slides[i].style.transform = `translateX(${+slideWidth * index}px)`;
  }
  currentSlide = index;
}

prevBtn.addEventListener('click', () => {
  const newIndex = (currentSlide - slides.length / 2 + slides.length) % slides.length;
  if (newIndex < slides.length / 2) {
      goToSlideLeft(newIndex);
    } else {
      prevBtn.style.display = "none"; 
      nextBtn.style.display = "block";
    }
});

nextBtn.addEventListener('click', () => {
  const newIndex = (currentSlide + slides.length / 2) % slides.length;
  if (newIndex >= slides.length / 2) {
      goToSlideRight(newIndex);
  } else {
  nextBtn.style.display = "none";
  prevBtn.style.display = "block"; 
  }
});