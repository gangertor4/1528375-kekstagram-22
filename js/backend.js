import {createPicturesList} from './user.js'
import {closeUploadForm} from './upload.js'
import {createSuccessMessage, createErrorMessage} from './util.js'

const uploadForm = document.querySelector('.img-upload__form');


fetch(
  'https://22.javascript.pages.academy/kekstagram/data',
)
  .then((response) => response.json())

  .then((photos) => {
    createPicturesList(photos)
  })



uploadForm.addEventListener('submit', function (evt) {
  evt.preventDefault();

  const formData = new FormData(evt.target);

  fetch( 
    'https://22.javascript.pages.academy/kekstagram',
    {
      method: 'POST',
      body: formData,
    },
  )
  .then(() => closeUploadForm())

  .then(() => createSuccessMessage())
  .catch(() => createErrorMessage())
})



