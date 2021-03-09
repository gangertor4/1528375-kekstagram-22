import {createPicturesList} from './user.js'

fetch(
  'https://22.javascript.pages.academy/kekstagram/data',
)
  .then((response) => response.json())

  .then((photos) => {
    createPicturesList(photos)
  })

