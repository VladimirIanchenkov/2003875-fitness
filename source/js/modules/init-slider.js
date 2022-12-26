const sliderContainer = document.querySelector('.coaches__slider-container');

sliderContainer.classList.remove('coaches__slider-container--nojs');

const initSlider = new Swiper('.coaches__slider', {
  loop: true,
  loopedSlides: 8,
  slidesPerView: 'auto',
  slidesPerGroup: 1,
  slidesPerGroupAuto: true,
  navigation: {
    nextEl: '.coaches__button--next',
    prevEl: '.coaches__button--prev',
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1200: {
      slidesPerView: 3,
    },
    1366: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
  },
});

export {initSlider};
