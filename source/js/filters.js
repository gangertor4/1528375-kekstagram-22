import {createOnePicture} from './user.js';

const filterBtn = document.querySelectorAll('.img-filters__button');
const sortFragment = document.createDocumentFragment();


const RANDOM_PHOTOS_QTY = 10;

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
  createOnePicture(arr, fragm);
  box.appendChild(fragm);
}


const onDiscussedBtnSort = function (list, box, arr) {
  removePictures(list, box);
  createOnePicture(sortDiscussed(arr), sortFragment);
  box.appendChild(sortFragment);
}

const onRandomBtnSort = function (list, box, arr) {
  removePictures(list, box);
  const randomArr = sortRandom(arr).slice(0, RANDOM_PHOTOS_QTY);
  createOnePicture(randomArr, sortFragment);
  box.appendChild(sortFragment);
}


export {onDefaultBtnSort, onDiscussedBtnSort, onRandomBtnSort}

