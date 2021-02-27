const submitBtn = document.querySelector('.img-upload__submit');
const uploadForm = document.querySelector('.img-upload__form');
const tagInput = document.querySelector('.text__hashtags');

const tagSymbols = (/[0-9A-Za-zА-Яа-яё#]+/g);
const sharpStart = (/[^#]/);
const TAG_MIN_LENGTH = 2;
const TAG_MAX_LENGTH = 20;
const MAX_NUM_OF_TAGS = 5;


const tagsValidity = function () {
  let tagsArr = tagInput.value.split(' ');
  console.log(tagsArr);
  console.log(tagsArr.length);

  for (let i = 0; i < tagsArr.length - 1; i++) {
    const tagItem = tagsArr[i].toString();
    const isSharpStart = sharpStart.test(tagItem);
    const symbolsTest = tagSymbols.test(tagItem);
    console.log(symbolsTest);

    if (tagItem.length < TAG_MIN_LENGTH) {
      tagInput.setCustomValidity('Хэш-тег не может состоять из одного симовола');
    } else if (!isSharpStart) {
      tagInput.setCustomValidity('Хэш-тег должен начинаться с символа #');
    } else if (!symbolsTest) {
      tagInput.setCustomValidity('В хэш-тегах возможно только использование букв и цифр');
    } else if (tagItem.length > TAG_MAX_LENGTH) {
      tagInput.setCustomValidity(`Максимальная длина - 20 символов. Удалите ${tagItem.length - TAG_MAX_LENGTH} симв.`)
    } else if (tagsArr.length > MAX_NUM_OF_TAGS) {
      tagInput.setCustomValidity('Нельзя указать больше пяти хэш-тегов')
    }
    
    
    
    else {
      tagInput.setCustomValidity('');
    }
  }
}

// const symbols = (/#[0-9A-Za-zА-Яа-яё]/);

// const arr = [
//   '#one',
//   '#two',
//   '#three',
//   'four#',
//   'five',
// ]
// for (let i=0; i < arr.length; i++) {
//   const arrText = arr[i].toString();
//   const symTest = symbols.test(arrText); 

//   if(symTest) 
//   {console.log(arr[i] + ' успех')} else {
//     console.log(arr[i] + ' провал');
//   }
// }

tagInput.addEventListener('input', tagsValidity);

uploadForm.addEventListener('submit', function (evt) {
  evt.preventDefault();
})