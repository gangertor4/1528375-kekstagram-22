const tagInput = document.querySelector('.text__hashtags');

const commentInput = document.querySelector('.text__description');

const tagSymbols = /#[^0-9A-Za-zА-яа-я]+/g;
const sharpStart = /^#/;
const middleSharp = /.#./;
const TAG_MIN_LENGTH = 2;
const TAG_MAX_LENGTH = 20;
const MAX_NUM_OF_TAGS = 5;

const COMMENT_MAX = 140;


const makeBorderError = function() {
  tagInput.style.outline = 'none';
  tagInput.style.border = '1px solid red'
}

const onTagsConfirmValidity = function () {
  let tagsArr = tagInput.value.split(' ')

  tagsArr.forEach((tag) => {
    const tagItem = tag.toString().toLowerCase();

    if (tagsArr.length === 0) {
      tagInput.setCustomValidity('');
      tagInput.style.border = 'none'
    }
    
    const isSharpStart = tagItem.search(sharpStart);
    if (isSharpStart < 0) {
      tagInput.setCustomValidity('Хэш-тег должен начинаться с символа #');
      makeBorderError();

      return
    }

    const symbolsTest = tagItem.search(tagSymbols);
    if (symbolsTest >= 0) {
      tagInput.setCustomValidity('В хэш-тегах возможно только использование букв и цифр');
      makeBorderError();

      return
    }

    const isMiddleSharp = tagItem.search(middleSharp);
    if (isMiddleSharp >= 0) {
      tagInput.setCustomValidity('Хэш-теги должны быть разделены пробелами');
      makeBorderError();

      return
    }

    if (tagItem.length < TAG_MIN_LENGTH) {
      tagInput.setCustomValidity('Хэш-тег не может состоять из одного симовола');
      makeBorderError();
      
      return
    } else if (tagItem.length > TAG_MAX_LENGTH) {
      tagInput.setCustomValidity(`Максимальная длина - 20 символов. Удалите ${tagItem.length - TAG_MAX_LENGTH} симв.`);
      makeBorderError();

      return
    } else if (tagsArr.length > MAX_NUM_OF_TAGS) {
      tagInput.setCustomValidity('Нельзя указать больше пяти хэш-тегов');
      makeBorderError();

      return
    }

    const doubleCheck = new Set(tagsArr);
    if (doubleCheck.size < tagsArr.length) {
      tagInput.setCustomValidity('Хэш-теги не должны повторяться');
      makeBorderError();

      return
    }

    tagInput.setCustomValidity('');
    tagInput.style.border = 'none';
  })  
}

tagInput.addEventListener('input', onTagsConfirmValidity);


const onCommentsConfirmValidity = function () {
  if (commentInput.value.length > COMMENT_MAX) {
    commentInput.setCustomValidity(`Комментарий не больше 140 символов. Удалите ${commentInput.value.length - COMMENT_MAX} симв.`);
    commentInput.style.outline = 'none';
    commentInput.style.border = '1px solid red';

    return
  } else {
    commentInput.setCustomValidity('');
    commentInput.style.border = 'none';
  }
}

commentInput.addEventListener('input', onCommentsConfirmValidity);

