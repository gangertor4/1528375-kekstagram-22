import {createPicturesList} from './user.js'
import {closeUploadForm} from './upload.js'
import {createSuccessMessage, createErrorMessage} from './util.js'

const uploadForm = document.querySelector('.img-upload__form');

const url = {
  GET: 'https://22.javascript.pages.academy/kekstagram/data',
  POST: 'https://22.javascript.pages.academy/kekstagram',
}


fetch(
  url.GET,
)
  .then((response) => response.json())

  .then((photos) => {
    createPicturesList(photos)
  })



uploadForm.addEventListener('submit', function (evt) {
  evt.preventDefault();

  const formData = new FormData(evt.target);

  fetch( 
    url.POST,
    {
      method: 'POST',
      body: formData,
    },
  )
    .then((response) => {
      if (response.ok) {
        closeUploadForm();
        createSuccessMessage();
      } else {
        closeUploadForm();
        createErrorMessage();
      }
    })    
    .catch(() => {
      closeUploadForm();
      createErrorMessage();
    })
})



