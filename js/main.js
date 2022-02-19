new Swiper('.catalogue__slider', {
  loop: false,
  pagination: {
    el: '.slider-pagination',
    clickable: true,
  },
});

new Swiper('.popular-category__slider', {

  slidesPerView: 3,
  spaceBetween: 10,
  watchOverflow: true,
  setWrapperSize: true,
  freeMode: false,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});