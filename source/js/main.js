import './util.js';
import './user.js';
import './upload.js';
import './resize.js';
import './slider-effects.js';
import './validity.js';
import './big-picture.js';
import './backend.js';
import noUiSlider from 'nouislider';
import 'nouislider/distribute/nouislider.css';

const filterSlider = document.querySelector('.effect-level__slider');

window.noUiSlider = noUiSlider; 

noUiSlider.create(filterSlider, {
  range: {
    min: 0,
    max: 100,
  },
  start: 80,
  step: 1,
  connect: 'lower',
});



