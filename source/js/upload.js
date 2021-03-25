import {isEscEvent} from './util.js';
import {resetSliderEffects} from './slider-effects.js';

const uploadFile = document.querySelector('#upload-file');
const uploadCancel = document.querySelector('#upload-cancel');
const uploadForm = document.querySelector('.img-upload__form');

const uploadPreview = document.querySelector('.img-upload__preview img');

const tagInput = document.querySelector('.text__hashtags');
const commentInput = document.querySelector('.text__description');

const fileTypes = /(jpe?g|gif|png)$/i;



const closeUploadForm = function() {
  document.querySelector('.img-upload__overlay').classList.add('hidden');
  document.body.classList.remove('modal-open');
  uploadForm.reset();
  resetSliderEffects();
  commentInput.setCustomValidity('');
  commentInput.style.border = 'none';
  tagInput.setCustomValidity('');
  tagInput.style.border = 'none';
};

const onFormEscKeydown = function (evt) {
  if (isEscEvent(evt)) {
    evt.preventDefault();
    closeUploadForm();
  }
};

const createCustomPreview = function (uploadedFile) {
  const userPreview = uploadedFile;
  const isFileType = userPreview.name.search(fileTypes);
  

  if (isFileType > 0) {
    const reader = new FileReader();

    reader.addEventListener('load', () => {
      uploadPreview.src = reader.result;
    });

    reader.readAsDataURL(userPreview);
  }
}

uploadFile.addEventListener('change', function () {
  document.querySelector('.img-upload__overlay').classList.remove('hidden');
  document.body.classList.add('modal-open');

  createCustomPreview(uploadFile.files[0]);

  document.addEventListener('keydown', function(evt) {
    if (commentInput === document.activeElement || tagInput === document.activeElement) {
      evt.stopPropagation()
    } else {
      onFormEscKeydown(evt);
    }
  });
});

uploadCancel.addEventListener('click', function() {
  closeUploadForm();
});



export {closeUploadForm}
