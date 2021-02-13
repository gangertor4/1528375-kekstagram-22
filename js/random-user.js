import {getPhotoInfo} from './data.js'

const friendPictureListElement = document.querySelector('.pictures');

document.querySelector('.pictures__title').classList.remove('.visually-hidden');

const randomUserTemplate = document.querySelector('#picture').content.querySelector('.picture');

const friendPicture = getPhotoInfo();

const friendPictureListFragment = document.createDocumentFragment();

friendPicture.forEach((friend) => {
  const friendPictureElement = randomUserTemplate.cloneNode(true);
  friendPictureElement.querySelector('.picture__img').src = friend.url;
  friendPictureElement.querySelector('.picture__likes').textContent = friend.likes;
  friendPictureElement.querySelector('.picture__comments').textContent = friend.comments.length;
  friendPictureListFragment.appendChild(friendPictureElement);
});

friendPictureListElement.appendChild(friendPictureListFragment);