import {isEscEvent} from './util.js';

const uploadFile = document.querySelector('#upload-file');
const uploadCancel = document.querySelector('#upload-cancel');

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
  onFormEscKeydown(evt);
});

