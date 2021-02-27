const uploadForm = document.querySelector('.img-upload__form');
const tagInput = document.querySelector('.text__hashtags');

const tagSymbols = /[0-9A-Za-z#]+/g;
const sharpStart = (/[^#]/gm);
// const TAG_MIN_LENGTH = 2;
// const TAG_MAX_LENGTH = 20;
// const MAX_NUM_OF_TAGS = 5;


const tagsValidity = function () {
  let tagsArr = tagInput.value.split(' ');
  // console.log(tagsArr);

  for (let i = 0; i < tagsArr.length - 1; i++) {
    const tagItem = tagsArr[i].toString();
    const isSharpStart = tagItem.search(sharpStart);
    const symbolsTest = tagItem.search(tagSymbols);
    // const isSharpStart = sharpStart.test(tagItem);
    // const symbolsTest = tagSymbols.test(tagItem);
    // console.log(tagsArr[i] + ' ' + symbolsTest);

    if (isSharpStart < 0) {
      tagInput.setCustomValidity('Хэш-тег должен начинаться с символа #');
    }

    if (symbolsTest < 0) {
      tagInput.setCustomValidity('В хэш-тегах возможно только использование букв и цифр');
    }


    // if (tagItem.length < TAG_MIN_LENGTH) {
    //   tagInput.setCustomValidity('Хэш-тег не может состоять из одного симовола');
    // } else if (tagItem.length > TAG_MAX_LENGTH) {
    //   tagInput.setCustomValidity(`Максимальная длина - 20 символов. Удалите ${tagItem.length - TAG_MAX_LENGTH} симв.`)
    // } else if (tagsArr.length > MAX_NUM_OF_TAGS) {
    //   tagInput.setCustomValidity('Нельзя указать больше пяти хэш-тегов')
    // }

    tagInput.setCustomValidity('');
  }
}

tagInput.addEventListener('input', tagsValidity);

uploadForm.addEventListener('submit', function (evt) {
  evt.preventDefault();
})