import {showBigPicture} from './big-picture.js';
import {onDefaultBtnSort, onDiscussedBtnSort, onRandomBtnSort} from './filters.js';
import {debounce} from './util.js';

const filterDefaultBtn = document.querySelector('#filter-default');
const filterRandomBtn = document.querySelector('#filter-random');
const filterDiscussedBtn = document.querySelector('#filter-discussed');

const DEBOUNCE_DELAY = 500;



const userPictureListElement = document.querySelector('.pictures');

const randomUserTemplate = document.querySelector('#picture').content.querySelector('.picture');

const userPictureListFragment = document.createDocumentFragment();

const createOnePicture = function (userPicture, frag) {
  userPicture.forEach((user) => {
    const userPictureElement = randomUserTemplate.cloneNode(true);
    userPictureElement.querySelector('.picture__img').src = user.url;
    userPictureElement.querySelector('.picture__likes').textContent = user.likes;
    userPictureElement.querySelector('.picture__comments').textContent = user.comments.length;
    frag.appendChild(userPictureElement);

    userPictureElement.querySelector('.picture__img').addEventListener('click', function() {
      showBigPicture(user)
    })
  });
}


const createPicturesList = function (userPicture) {
  document.querySelector('.pictures__title').classList.remove('.visually-hidden');
  createOnePicture(userPicture, userPictureListFragment);
  userPictureListElement.appendChild(userPictureListFragment);

  const picturesListCopy = Array.from(userPicture);

  document.querySelector('.img-filters').classList.remove('img-filters--inactive');

  
  filterDefaultBtn.addEventListener('click', debounce(
    () => {
      const picturesList = document.querySelectorAll('.picture');
      onDefaultBtnSort(picturesList, userPictureListElement, userPicture, userPictureListFragment)
    }, DEBOUNCE_DELAY))
  
  filterDiscussedBtn.addEventListener('click', debounce(
    () => {
      const picturesList = document.querySelectorAll('.picture');
      onDiscussedBtnSort(picturesList, userPictureListElement, picturesListCopy)
    }, DEBOUNCE_DELAY))

  filterRandomBtn.addEventListener('click', debounce(
    () => {
      const picturesList = document.querySelectorAll('.picture');
      onRandomBtnSort(picturesList, userPictureListElement, picturesListCopy)
    }, DEBOUNCE_DELAY))
}

export {createPicturesList, createOnePicture}