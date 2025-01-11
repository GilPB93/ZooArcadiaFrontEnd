// CAROUSEL SECTION
let multipleCardCarousel = document.querySelector("#carouselAvis");

if (window.matchMedia("(min-width: 768px)").matches) {
  let carousel = new bootstrap.Carousel(multipleCardCarousel, {
    interval: false,
});

let carouselInner = document.querySelector(".carousel-inner");
let carouselItems = document.querySelectorAll(".carousel-item");
let carouselWidth = carouselInner.scrollWidth;
let cardWidth = carouselItems[0].offsetWidth;
let scrollPosition = 0;


document
.querySelector("#carouselAvis .carousel-control-next")
.addEventListener("click", function () {
    if (scrollPosition < carouselWidth - cardWidth * 4) {
    scrollPosition += cardWidth;
    carouselInner.scrollTo({
        left: scrollPosition,
        behavior: "smooth",
    });
    }
});

document
.querySelector("#carouselAvis .carousel-control-prev")
.addEventListener("click", function () {
    if (scrollPosition > 0) {
    scrollPosition -= cardWidth;
    carouselInner.scrollTo({
        left: scrollPosition,
        behavior: "smooth",
    });
    }
});
} else {
  multipleCardCarousel.classList.add("slide");
}
