import {isEscEvent} from './util.js';

const bigPicture = document.querySelector('.big-picture');
let bigPictureImg = document.querySelector('.big-picture__img img');
const likesNumber = document.querySelector('.likes-count');
const commentsNumber = document.querySelector('.comments-count');
const photoDesc = document.querySelector('.social__caption');
let commentBox = document.querySelector('.social__comments');
const commentLoadBtn = document.querySelector('.comments-loader');

const bigPictureCancel = document.querySelector('.big-picture__cancel');

let qtyOfComments = 5;
let commentArr = [];

const closeBigPicture= function() {
  bigPicture.classList.add('hidden');
  document.querySelector('body').classList.remove('modal-open');
};

const loadingComments = function(qty, array) {
  if (qty > array.length) {
    for (let i = 0; i < array.length; i++) {
      commentLoadBtn.classList.add('hidden');
      commentBox.appendChild(array[i]);
    }
  } else {
    for (let i = 0; i < qty; i++) {
      commentLoadBtn.classList.remove('hidden');
      commentBox.appendChild(array[i])
    }
  }
}

const showBigPicture = function (user) {
  bigPicture.classList.remove('hidden');
  document.querySelector('body').classList.add('modal-open');

  bigPictureImg.src = user.url;
  likesNumber.textContent = user.likes;
  commentsNumber.textContent = user.comments.length;
  photoDesc.textContent = user.description;

  qtyOfComments = 5;
  commentArr = [];

  user.comments.forEach((el) => {
    const commentList = document.querySelector('.social__comment').cloneNode(true);

    commentList.querySelector('.social__picture').src = el.avatar;
    commentList.querySelector('.social__picture').alt = el.name;
    commentList.querySelector('.social__text').textContent = el.message;

    commentArr.push(commentList)
  })

  while (commentBox.firstChild) {
    commentBox.removeChild(commentBox.firstChild);
  }

  loadingComments(qtyOfComments, commentArr);
}

commentLoadBtn.addEventListener('click', function() {
  qtyOfComments = qtyOfComments + 5;
  loadingComments(qtyOfComments, commentArr);
})

bigPictureCancel.addEventListener('click', function() {
  closeBigPicture();
});


const onBigPictureEscKeydown = function (evt) {
  if (isEscEvent(evt)) {
    evt.preventDefault();
    closeBigPicture();
  }
};

document.addEventListener('keydown', function(evt) {
  onBigPictureEscKeydown(evt);
});



export {showBigPicture}