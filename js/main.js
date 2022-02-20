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

let productGallerySlider1 = new Swiper(".product-gallery__slider-1", {
  spaceBetween: 20,
  slidesPerView: 3,
  freeMode: true,
  navigation: {
    nextEl: ".product-gallery-button-next",
    prevEl: ".product-gallery-button-prev",
  },
});
let productGallerySlider2 = new Swiper(".product-gallery__slider-2", {
  spaceBetween: 10,
  thumbs: {
    swiper: productGallerySlider1,
  },
});


var tabNavs = document.querySelectorAll(".tab-trigger");
var tabPanes = document.querySelectorAll(".tab-content");

for (var i = 0; i < tabNavs.length; i++) {

  tabNavs[i].addEventListener("click", function (e) {
    e.preventDefault();
    var activeTabAttr = e.target.getAttribute("data-tab");

    for (var j = 0; j < tabNavs.length; j++) {
      var contentAttr = tabPanes[j].getAttribute("data-tab-content");

      if (activeTabAttr === contentAttr) {
        tabNavs[j].classList.add("active");
        tabPanes[j].classList.add("active");
      } else {
        tabNavs[j].classList.remove("active");
        tabPanes[j].classList.remove("active");
      }
    };
  });
}