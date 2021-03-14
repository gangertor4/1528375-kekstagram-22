const successMessageTemplate = document.querySelector('#success').content.querySelector('.success');
const errorMessageTemplate = document.querySelector('#error').content.querySelector('.error');
const successDiv = document.querySelector('.success__inner');
const errorDiv = document.querySelector('.error__inner');

const successMessage = successMessageTemplate.cloneNode(true);
const errorMessage = errorMessageTemplate.cloneNode(true);


const getRandomNumber = function(min, max) {
  const maxNumber = (max > min) ? Math.floor(max) : Math.ceil(min);
  const minNumber = (max > min) ? Math.ceil(min) : Math.floor(max);

  return Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
}

const isEscEvent = function (evt) {
  return evt.key === ('Escape' || 'Esc');
};



const onPopUpEscKeydown = function (evt, message) {
  if (isEscEvent(evt)) {
    evt.preventDefault();
    closePopUp(message);
  }
};

const escSuccessCallback = function (evt) {
  onPopUpEscKeydown(evt, successMessage) 
}

const escErrorCallback = function (evt) {
  onPopUpEscKeydown(evt, errorMessage) 
}



const onOutsideClickClose = function (evt, div, message) {
  if (evt.target.closest(div)) return;

  closePopUp(message)
}

const outsideClickSuccessCallback = function (evt) {
  onOutsideClickClose(evt, successDiv, successMessage)
}

const outsideClickErrorCallback = function (evt) {
  onOutsideClickClose(evt, errorDiv, errorMessage)
}

const closePopUp = function(message) {
  document.querySelector('main').removeChild(message);
  document.removeEventListener('keydown', escSuccessCallback);
  document.removeEventListener('click', outsideClickSuccessCallback);
  document.removeEventListener('keydown', escErrorCallback);
  document.removeEventListener('click', outsideClickErrorCallback);
}

const createSuccessMessage = function() {
  document.querySelector('main').appendChild(successMessage);

  const successBtn = document.querySelector('.success__button');

  successBtn.addEventListener('click', function() {
    closePopUp(successMessage)
  });

  document.addEventListener('keydown', escSuccessCallback);  

  document.addEventListener('click', outsideClickSuccessCallback);
}

const createErrorMessage = function() {
  document.querySelector('main').appendChild(errorMessage);

  const errorBtn = document.querySelector('.error__button');

  errorBtn.addEventListener('click', function() {
    closePopUp(errorMessage)
  });

  document.addEventListener('keydown', escErrorCallback);

  document.addEventListener('click', outsideClickErrorCallback);
}


export {getRandomNumber, isEscEvent, createSuccessMessage, createErrorMessage};
