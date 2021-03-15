import {isEscEvent} from './util.js';

const uploadFile = document.querySelector('#upload-file');
const uploadCancel = document.querySelector('#upload-cancel');
const uploadForm = document.querySelector('.img-upload__form');

const uploadPreview = document.querySelector('.img-upload__preview img');

const tagInput = document.querySelector('.text__hashtags');
const commentInput = document.querySelector('.text__description');

const fileTypes = /(jpe?g|gif|png)$/i;

const closeUploadForm = function() {
  document.querySelector('.img-upload__overlay').classList.add('hidden');
  document.querySelector('body').classList.remove('modal-open');
  uploadForm.reset();
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

  const userPreview = uploadFile.files[0];
  const isFileType = userPreview.name.search(fileTypes);
  

  if (isFileType > 0) {
    const reader = new FileReader();

    reader.addEventListener('load', () => {
      uploadPreview.src = reader.result;
    });

    reader.readAsDataURL(userPreview);
  }
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

export {closeUploadForm}
