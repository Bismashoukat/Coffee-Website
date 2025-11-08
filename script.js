// ======= Navigation Menu Script =======
const navlinks = document.querySelectorAll(".nav-menu .nav-link");
const menuOpenButton = document.querySelector("#menu-open-button");
const menuClosedButton = document.querySelector("#menu-close-button");

menuOpenButton.addEventListener("click", () => {
  // Toggle mobile menu visibility
  document.body.classList.toggle("show-mobile-menu");
});

// Close menu when the close button is clicked
menuClosedButton.addEventListener("click", () => {
  document.body.classList.remove("show-mobile-menu");
});

// Close menu when any nav link is clicked
navlinks.forEach(link => {
  link.addEventListener("click", () => {
    document.body.classList.remove("show-mobile-menu");
  });
});

// ======= Swiper Initialization =======
const swiper = new Swiper('.slider-container', {
  loop: false,
  grabCursor: true,
  spaceBetween: 25,
  slidesPerView: 1,
  centeredSlides: false,
  autoplay: false,

  // Pagination (dots below slider)
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // Responsive breakpoints
  breakpoints: {
    768: {
      slidesPerView: 2,
      centeredSlides: false,
    },
    1024: {
      slidesPerView: 3,
      centeredSlides: false,
    },
  },
});
