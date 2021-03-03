import {isEscEvent} from './util.js';

const uploadFile = document.querySelector('#upload-file');
const uploadCancel = document.querySelector('#upload-cancel');

const tagInput = document.querySelector('.text__hashtags');
const commentInput = document.querySelector('.text__description');

const closeUploadForm = function() {
  document.querySelector('.img-upload__overlay').classList.add('hidden');
  document.querySelector('body').classList.remove('modal-open');
};

const onFormEscKeydown = function (evt) {
  if (isEscEvent(evt)) {
    evt.preventDefault();
    closeUploadForm();
  }
};

uploadFile.addEventListener('change', function () {
  document.querySelector('.img-upload__overlay').classList.remove('hidden');
  document.querySelector('body').classList.add('modal-open');
});

uploadCancel.addEventListener('click', function() {
  closeUploadForm();
});

document.addEventListener('keydown', function(evt) {
  if (commentInput === document.activeElement || tagInput === document.activeElement) {
    evt.stopPropagation()
  } else {
    onFormEscKeydown(evt);
  }
});







