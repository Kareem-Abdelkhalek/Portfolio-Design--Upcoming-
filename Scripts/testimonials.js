const track = document.querySelector(".testimonial-track");
const cards = document.querySelectorAll(".testimonial-card");
const prevBtn = document.querySelector(".testimonial-prev");
const nextBtn = document.querySelector(".testimonial-next");

let currentIndex = 0;
let cardsPerView = 3;

function updateCardsPerView() {
  if (window.innerWidth <= 768) {
    cardsPerView = 1;
  } else if (window.innerWidth <= 1024) {
    cardsPerView = 2;
  } else {
    cardsPerView = 3;
  }
}

function updateSlider() {
  const cardWidth = cards[0].offsetWidth;
  const gap = 40;
  const offset = -(currentIndex * (cardWidth + gap));
  track.style.transform = `translateX(${offset}px)`;
}

prevBtn.addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex--;
    updateSlider();
  }
});

nextBtn.addEventListener("click", () => {
  const maxIndex = cards.length - cardsPerView;
  if (currentIndex < maxIndex) {
    currentIndex++;
    updateSlider();
  }
});

window.addEventListener("resize", () => {
  updateCardsPerView();
  currentIndex = 0;
  updateSlider();
});

updateCardsPerView();
