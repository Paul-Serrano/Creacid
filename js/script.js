// nav, scroll to the part

// let nav = document.querySelector("#nav-items");

// for (let i = 0; i < nav.length(); i++) {
//   nav[i].on("click", (e) => {});
// }

// Scrolling banner

// function updateCarousel() {
//   const itemWidth = document.querySelector(".carousel-item").offsetWidth;
//   const newTransformValue = -currentIndex * itemWidth + "px";
//   console.log(itemWidth);
//   console.log(newTransformValue);
//   document.querySelector(".carousel-content").style.transform =
//     "translateX(" + newTransformValue + ")";
// }

// Carousel

const carouselButtons = document.querySelectorAll("#carousel-buttons button");

let currentIndex = 0;
const slides = document.getElementsByClassName("carousel-item");
const totalSlides = slides.length;

function nextSlide() {
  slides[currentIndex].classList.add("hidden");
  carouselButtons[currentIndex].classList.add("opacity-30");
  console.log("next" + currentIndex);
  if (currentIndex < totalSlides - 1) {
    currentIndex++;
    slides[currentIndex].classList.remove("hidden");
    slides[currentIndex].classList.remove("grid");
  } else {
    currentIndex = 0;
    slides[currentIndex].classList.remove("hidden");
    slides[currentIndex].classList.remove("grid");
  }
  slides[currentIndex].classList.add("grid");
  carouselButtons[currentIndex].classList.remove("opacity-30");
}

function prevSlide() {
  slides[currentIndex].classList.add("hidden");
  carouselButtons[currentIndex].classList.add("opacity-30");
  if (currentIndex > 0) {
    currentIndex--;
    slides[currentIndex].classList.remove("hidden");
    slides[currentIndex].classList.remove("grid");
  } else {
    currentIndex = totalSlides - 1;
    slides[currentIndex].classList.remove("hidden");
    slides[currentIndex].classList.remove("grid");
  }
  slides[currentIndex].classList.add("grid");
  carouselButtons[currentIndex].classList.remove("opacity-30");
}

function openNav() {
  menu = document.querySelector("#menu");
  menu.classList.remove("hidden");
  menu.classList.add("flex");
}

function closeNav() {
  menu = document.querySelector("#menu");
  menu.classList.remove("flex");
  menu.classList.add("hidden");
}

const carouselItems = document.querySelectorAll(".carousel-item");

function closeCar() {
  for (let i = 0; i < carouselItems.length; i++) {
    if (carouselItems[i].classList.contains("grid")) {
      carouselItems[i].classList.remove("grid");
      carouselItems[i].classList.add("hidden");
      carouselButtons[i].classList.add("opacity-30");
    }
  }
}

function openCar(i) {
  closeCar();
  carouselItems[i].classList.remove("hidden");
  carouselItems[i].classList.add("grid");
  carouselButtons[i].classList.remove("opacity-30");
}

let touchStartX = 0;
let touchEndX = 0;

const carousel = document.getElementById("carousel");

carousel.addEventListener("touchstart", handleTouchStart, false);
carousel.addEventListener("touchmove", handleTouchMove, false);
carousel.addEventListener("touchend", handleTouchEnd, false);

function handleTouchStart(event) {
  touchStartX = event.touches[0].clientX;
}

function handleTouchMove(event) {
  touchEndX = event.touches[0].clientX;
}

function handleTouchEnd() {
  const difference = touchStartX - touchEndX;

  if (Math.abs(difference) > 50) {
    // Si la différence est assez grande, considérez-le comme un swipe
    if (difference > 0) {
      // Swipe vers la gauche, faites défiler vers la diapo suivante
      nextSlide();
    } else {
      prevSlide();
    }
  }
}

// Carousel risks phone

let risksIndex = 0;
let risksItem = document.querySelectorAll(".risks-cols");
let totalRisksItem = risksItem.length;

const risksCarouselButtons = document.querySelectorAll(
  "#risks-carousel-buttons button"
);
const risksCarousel = document.getElementById("risk-carousel");

risksCarousel.addEventListener("touchstart", risksHandleTouchStart, false);
risksCarousel.addEventListener("touchmove", risksHandleTouchMove, false);
risksCarousel.addEventListener("touchend", risksHandleTouchEnd, false);

function nextRisksSlide() {
  risksItem[risksIndex].classList.add("hidden");
  risksCarouselButtons[risksIndex].classList.add("opacity-30");
  if (risksIndex < totalRisksItem - 1) {
    risksIndex++;
    risksItem[risksIndex].classList.remove("hidden");
    risksItem[risksIndex].classList.remove("grid");
  } else {
    risksIndex = 0;
    risksItem[risksIndex].classList.remove("hidden");
    risksItem[risksIndex].classList.remove("grid");
  }
  risksItem[risksIndex].classList.add("grid");
  risksCarouselButtons[risksIndex].classList.remove("opacity-30");
}

function prevRisksSlide() {
  risksItem[risksIndex].classList.add("hidden");
  risksCarouselButtons[risksIndex].classList.add("opacity-30");
  if (risksIndex > 0) {
    risksIndex--;
    risksItem[risksIndex].classList.remove("hidden");
    risksItem[risksIndex].classList.remove("grid");
  } else {
    risksIndex = totalRisksItem - 1;
    risksItem[risksIndex].classList.remove("hidden");
    risksItem[risksIndex].classList.remove("grid");
  }
  risksItem[risksIndex].classList.add("grid");
  risksCarouselButtons[risksIndex].classList.remove("opacity-30");
}

function risksHandleTouchStart(event) {
  touchStartX = event.touches[0].clientX;
}

function risksHandleTouchMove(event) {
  touchEndX = event.touches[0].clientX;
}

function risksHandleTouchEnd() {
  const difference = touchStartX - touchEndX;

  if (Math.abs(difference) > 50) {
    // Si la différence est assez grande, considérez-le comme un swipe
    if (difference > 0) {
      // Swipe vers la gauche, faites défiler vers la diapo suivante
      nextRisksSlide();
    } else {
      prevRisksSlide();
    }
  }
}

//show actu

let showButton = document.querySelector("#show-actu");
let noShowButton = document.querySelector("#no-show-actu");

actu = document.querySelectorAll("#actu-grid a");

function showActu() {
  for (let i = 0; i < actu.length; i++) {
    actu[i].classList.add("grid");
    actu[i].classList.remove("hidden");
  }
  showButton.classList.add("hidden");
  showButton.classList.remove("grid");
  noShowButton.classList.add("grid");
  noShowButton.classList.remove("hidden");
}

function noShowActu() {
  for (let i = 2; i < actu.length; i++) {
    actu[i].classList.add("hidden");
    actu[i].classList.remove("grid");
  }
  showButton.classList.add("grid");
  showButton.classList.remove("hidden");
  noShowButton.classList.add("hidden");
  noShowButton.classList.remove("grid");
}

// Close menu

let menu = document.querySelector("#menu");
let menuItems = document.querySelectorAll("#menu a");

for (let i = 0; i < menuItems.length; i++) {
  menuItems[i].addEventListener("click", () => {
    menu.classList.add("hidden");
    menu.classList.remove("remove");
  });
}


// Carousel


function nextSlide() {
  slides[currentIndex].classList.add("hidden");
  console.log("next" + currentIndex);
  if (currentIndex < totalSlides - 1) {
    currentIndex++;
    slides[currentIndex].classList.remove("hidden");
    slides[currentIndex].classList.remove("grid");
  } else {
    currentIndex = 0;
    slides[currentIndex].classList.remove("hidden");
    slides[currentIndex].classList.remove("grid");
  }
  slides[currentIndex].classList.add("grid");
  // updateCarousel();
}

function prevSlide() {
  slides[currentIndex].classList.add("hidden");
  if (currentIndex > 0) {
    currentIndex--;
    slides[currentIndex].classList.remove("hidden");
    slides[currentIndex].classList.remove("grid");
  } else {
    currentIndex = totalSlides - 1;
    slides[currentIndex].classList.remove("hidden");
    slides[currentIndex].classList.remove("grid");
  }
  slides[currentIndex].classList.add("grid");
  // updateCarousel();
}

function openNav() {
  menu = document.querySelector("#menu");
  menu.classList.remove("hidden");
  menu.classList.add("flex");
}

function closeNav() {
  menu = document.querySelector("#menu");
  menu.classList.remove("flex");
  menu.classList.add("hidden");
}



// Scrolling banner

document.addEventListener("DOMContentLoaded", function () {
  const scrollingBanner = document.getElementById("scrolling-banner");
  const bannerContent = scrollingBanner.innerHTML;

  // Dupliquer le contenu pour assurer le défilement continu
  scrollingBanner.innerHTML = bannerContent + bannerContent;
});




// Formulaire de contact Popup
function afficherPopup() {
  document.getElementById('messagePopup').style.display = 'flex';
  document.body.style.overflow = 'hidden'; // Bloquer le défilement
}

function cacherPopup() {
  document.getElementById('messagePopup').style.display = 'none';
  document.body.style.overflow = ''; // Réactiver le défilement
}


let cont = 1;
let xx;

function loopSlider() {
  xx = setInterval(function () {
    if (cont === 1) {
      toggleDisplay("#astuce1", "#astuce2");
      cont = 2;
    } else {
      toggleDisplay("#astuce2", "#astuce1");
      cont = 1;
    }
  }, 8000);
}

function reinitLoop(time) {
  clearInterval(xx);
  setTimeout(loopSlider, time);
}

function toggleDisplay(hideSelector, showSelector) {
  const hideElement = document.querySelector(hideSelector);
  const showElement = document.querySelector(showSelector);

  hideElement.style.display = "none";
  showElement.style.display = "block";
}

function nextImage() {
  if (cont === 1) {
    toggleDisplay("#astuce1", "#astuce2");
    cont = 2;
  } else {
    toggleDisplay("#astuce2", "#astuce1");
    cont = 1;
  }
  reinitLoop(4000);
}

function prevImage() {
  if (cont === 1) {
    toggleDisplay("#astuce1", "#astuce2");
    cont = 2;
  } else {
    toggleDisplay("#astuce2", "#astuce1");
    cont = 1;
  }
  reinitLoop(4000);
}

document.addEventListener("DOMContentLoaded", function () {
  const astuce2 = document.getElementById("astuce2");
  astuce2.style.display = "none";
  loopSlider();
});

