import {getPhotoInfo} from './data.js'

const userPictureListElement = document.querySelector('.pictures');

document.querySelector('.pictures__title').classList.remove('.visually-hidden');

const randomUserTemplate = document.querySelector('#picture').content.querySelector('.picture');

const userPicture = getPhotoInfo();

const userPictureListFragment = document.createDocumentFragment();

userPicture.forEach((user) => {
  const userPictureElement = randomUserTemplate.cloneNode(true);
  userPictureElement.querySelector('.picture__img').src = user.url;
  userPictureElement.querySelector('.picture__likes').textContent = user.likes;
  userPictureElement.querySelector('.picture__comments').textContent = user.comments.length;
  userPictureListFragment.appendChild(userPictureElement);
});

userPictureListElement.appendChild(userPictureListFragment);