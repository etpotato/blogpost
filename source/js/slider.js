import Splide from '@splidejs/splide';

const BREAKPOINT = 768;
const WIDTH = 280;

const splide = document.querySelector('.splide');
const similarList = splide.querySelector('.similar__list');
similarList.classList.remove('similar__list--no-js');

const options = {
  type: 'loop',
  arrows: false,
  perPage: 1,
  perMove: 1,
  padding: {
    left: 0,
    right: 0,
  },
  gap: 14,
  destroy: true,
  breakpoints: {
    [BREAKPOINT]: {
      width: WIDTH,
      destroy: false,
    },
  },
};


new Splide(splide, options).mount();
