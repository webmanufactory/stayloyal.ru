new Swiper('.catalogue__slider', {
  loop: false,
  pagination: {
    el: '.slider-pagination',
    clickable: true,
  },
});

new Swiper('.popular-category__slider', {

  slidesPerView: 2,
  spaceBetween: 10,
  centeredSlides: true,
  breakpoints: {
    475: {
      slidesPerView: 3,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    },
    320: {
      slidesPerView: 1,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    },
  }
});

if (window.matchMedia("(max-width: 768px)").matches) {
  let productGallerySlider2 = new Swiper(".product-gallery__slider-2", {
    spaceBetween: 10,
    pagination: {
      el: '.product-gallery__slider-pagination',
      clickable: true,
    },
  });
}
if (window.matchMedia("(min-width: 768px)").matches) {
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
}

let tabNavs = document.querySelectorAll(".tab-trigger");
let tabPanes = document.querySelectorAll(".tab-content");
let mobMenu = document.querySelector('.mob-menu');

for (let i = 0; i < tabNavs.length; i++) {

  tabNavs[i].addEventListener("click", function (e) {
    e.preventDefault();
    let activeTabAttr = e.target.getAttribute("data-tab");

    for (let j = 0; j < tabNavs.length; j++) {
      let contentAttr = tabPanes[j].getAttribute("data-tab-content");

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