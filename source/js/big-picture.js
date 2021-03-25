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
let comments = [];

const closeBigPicture= function() {
  bigPicture.classList.add('hidden');
  document.body.classList.remove('modal-open');
};

const toggleBtnLoad = function () {
  if (QTY_OF_COMMENTS < comments.length) {
    commentLoadBtn.classList.remove('hidden');
  } else {
    commentLoadBtn.classList.add('hidden');
  }
}

const loadComments = function () {
  toggleBtnLoad(comments);
  const duration =  QTY_OF_COMMENTS > comments.length ?
    comments.length :  
    QTY_OF_COMMENTS;

  for (let i = 0; i < duration; i++) {
    commentBox.appendChild(comments[i]);
  }
  comments.splice(0, QTY_OF_COMMENTS)
}

const showBigPicture = function (user) {
  bigPicture.classList.remove('hidden');
  document.body.classList.add('modal-open');

  bigPictureImg.src = user.url;
  likesNumber.textContent = user.likes;
  commentsNumber.textContent = user.comments.length;
  photoDesc.textContent = user.description;

  comments = [];

  user.comments.forEach((el) => {
    const commentList = document.querySelector('.social__comment').cloneNode(true);

    commentList.querySelector('.social__picture').src = el.avatar;
    commentList.querySelector('.social__picture').alt = el.name;
    commentList.querySelector('.social__text').textContent = el.message;

    comments.push(commentList)
  })

  commentBox.innerHTML = '';

  loadComments();

  document.addEventListener('keydown', function(evt) {
    onBigPictureEscKeydown(evt);
  });
}

commentLoadBtn.addEventListener('click', function() {
  loadComments();
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





export {showBigPicture}