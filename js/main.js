new Swiper('.catalogue__slider', {
  loop: false,
  pagination: {
    el: '.slider-pagination',
    clickable: true,
  },
});

new Swiper('.popular-category__slider', {
  loop: false,
  slidesPerView: 3,
  spaceBetween: 20,
});