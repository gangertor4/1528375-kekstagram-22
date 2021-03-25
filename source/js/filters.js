import {createOnePicture} from './user.js';
import {debounce} from './util.js';

const filterBtn = document.querySelectorAll('.img-filters__button');
const sortFragment = document.createDocumentFragment();

const RANDOM_PHOTOS_QTY = 10;
const DEBOUNCE_DELAY = 500;

filterBtn.forEach((filters) => {
  filters.addEventListener('click', function () {
    filterBtn.forEach((btn) => {
      btn.classList.remove('img-filters__button--active');
    })
    filters.classList.add('img-filters__button--active');
  })
})

const removePictures = function (list, box) {
  list.forEach((pic) => 
    box.removeChild(pic));
}

const sortDiscussed = function (arr) {
  return arr.sort(function (a, b) {
    return b.comments.length - a.comments.length;
  });
};

const sortRandom = function (arr) {
  return arr.sort(() => Math.random() - 0.5);
}

const onDefaultBtnSort = function (list, box, arr, fragm) {
  removePictures(list, box);
  debounce(createOnePicture(arr, fragm), DEBOUNCE_DELAY);
  box.appendChild(fragm);
}


const onDiscussedBtnSort = function (list, box, arr) {
  removePictures(list, box);
  debounce(createOnePicture(sortDiscussed(arr), sortFragment), DEBOUNCE_DELAY);
  box.appendChild(sortFragment);
}

const onRandomBtnSort = function (list, box, arr) {
  removePictures(list, box);
  const randomArr = sortRandom(arr).slice(0, RANDOM_PHOTOS_QTY);
  debounce(createOnePicture(randomArr, sortFragment), DEBOUNCE_DELAY);
  box.appendChild(sortFragment);
}


export {onDefaultBtnSort, onDiscussedBtnSort, onRandomBtnSort}

