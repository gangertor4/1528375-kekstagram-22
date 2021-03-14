import {isEscEvent} from './util.js';

const bigPicture = document.querySelector('.big-picture');
const bigPictureImg = bigPicture.querySelector('.big-picture__img img');
const likesNumber = bigPicture.querySelector('.likes-count');
const commentsNumber = bigPicture.querySelector('.comments-count');
const photoDesc = bigPicture.querySelector('.social__caption');
const commentBox = bigPicture.querySelector('.social__comments');
const commentLoadBtn = bigPicture.querySelector('.comments-loader');

const bigPictureCancel = document.querySelector('.big-picture__cancel');

const QTY_OF_COMMENTS = 5;
let commentArr = [];

const closeBigPicture= function() {
  bigPicture.classList.add('hidden');
  document.querySelector('body').classList.remove('modal-open');
};

// const loadingComments = function(array) {
//   if (QTY_OF_COMMENTS > array.length) {
//     for (let i = 0; i < array.length; i++) {
//       commentLoadBtn.classList.add('hidden');
//       commentBox.appendChild(array[i]);
//     }
//   } else {
//     for (let i = 0; i < QTY_OF_COMMENTS; i++) {
//       commentLoadBtn.classList.remove('hidden');
//       commentBox.appendChild(array[i])
//       array.slice(0, QTY_OF_COMMENTS);
//       // array.splice(0, QTY_OF_COMMENTS);
//     }
//   }
// }

// const btnLoad = function (array) {
//   if (QTY_OF_COMMENTS < array.length) {
//     commentLoadBtn.classList.remove('hidden');
//   } else {
//     commentLoadBtn.classList.add('hidden');
//   }
// }

const btnLoad = function (array) {
  if (QTY_OF_COMMENTS < array.length) {
    commentLoadBtn.classList.remove('hidden');
  } else {
    commentLoadBtn.classList.add('hidden');
  }
}


const loadingComments = function (array, duration) {
  btnLoad(array);
  QTY_OF_COMMENTS > array.length ? 
    duration = array.length :  
    duration = QTY_OF_COMMENTS;

  for (let i = 0; i < duration; i++) {
    commentBox.appendChild(array[i]);
  }
}

const showBigPicture = function (user) {
  bigPicture.classList.remove('hidden');
  document.querySelector('body').classList.add('modal-open');

  bigPictureImg.src = user.url;
  likesNumber.textContent = user.likes;
  commentsNumber.textContent = user.comments.length;
  photoDesc.textContent = user.description;

  commentArr = [];

  user.comments.forEach((el) => {
    const commentList = document.querySelector('.social__comment').cloneNode(true);

    commentList.querySelector('.social__picture').src = el.avatar;
    commentList.querySelector('.social__picture').alt = el.name;
    commentList.querySelector('.social__text').textContent = el.message;

    commentArr.push(commentList)
  })

  commentBox.innerHTML = '';

  loadingComments(commentArr.splice(0, QTY_OF_COMMENTS));
}

commentLoadBtn.addEventListener('click', function() {
  loadingComments(commentArr.splice(0, QTY_OF_COMMENTS));
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