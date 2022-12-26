const carouselContainer = document.querySelector('.reviews__carousel');

carouselContainer.classList.remove('reviews__carousel--nojs');

const initCarousel = new Swiper('.reviews__carousel', {
  loop: false,
  slidesPerView: 1,
  centeredSlides: true,
  initialSlide: 0,
  navigation: {
    nextEl: '.reviews__carousel-button--next',
    prevEl: '.reviews__carousel-button--prev',
  },
});

export {initCarousel};
