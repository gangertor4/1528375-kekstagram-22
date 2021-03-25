import {showBigPicture} from './big-picture.js';
import {onDefaultBtnSort, onDiscussedBtnSort, onRandomBtnSort} from './filters.js';
import {debounce} from './util.js';

const filterForm = document.querySelector('.img-filters__form');

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

  

  filterForm.addEventListener('click',  debounce(
    (evt) => {
      const picturesList = document.querySelectorAll('.picture');

      if (evt.target === filterDefaultBtn) {
        onDefaultBtnSort(picturesList, userPictureListElement, userPicture, userPictureListFragment)
      }
    
      if (evt.target === filterDiscussedBtn) {
        onDiscussedBtnSort(picturesList, userPictureListElement, picturesListCopy)
      }
    
      if (evt.target === filterRandomBtn) {
        onRandomBtnSort(picturesList, userPictureListElement, picturesListCopy)
      }
    }, DEBOUNCE_DELAY))
  
}

export {createPicturesList, createOnePicture}