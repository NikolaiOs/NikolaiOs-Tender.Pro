const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  // slidesPerView: 6,
  slidesPerGroup: 2,
  // spaceBetween: 227,
  loop: true,
  loopFillGroupWithBlank: true,
  // autoplay: {
  //   delay: 2500,
  //   disableOnInteraction: false,
  // },
  // Navigation arrows
  breakpoints: {
    320: {
      slidesPerView: 2,
      spaceBetween: 15
    },

    768: {
      slidesPerView: 5,
      spaceBetween: 25
    },

    1025: {
      slidesPerView: 6,
      spaceBetween: 115
    },

    1441: {
      slidesPerView: 6,
      spaceBetween: 227
    }
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
