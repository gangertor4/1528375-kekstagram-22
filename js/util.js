const getRandomNumber = function(min, max) {
  const maxNumber = (max > min) ? Math.floor(max) : Math.ceil(min);
  const minNumber = (max > min) ? Math.ceil(min) : Math.floor(max);

  return Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
}

const isEscEvent = function (evt) {
  return evt.key === ('Escape' || 'Esc');
};


const successMessageTemplate = document.querySelector('#success').content.querySelector('.success');
const errorMessageTemplate = document.querySelector('#error').content.querySelector('.error');
const successDiv = document.querySelector('.success__inner');
const errorDiv = document.querySelector('.error__inner');

const onPopUpEscKeydown = function (evt, message) {
  if (isEscEvent(evt)) {
    evt.preventDefault();
    closePopUp(message);
  }
};

const clickAwayClose = function (evt, div, message) {
  if (evt.target.closest(div)) return;
    
  closePopUp(message)
}

const closePopUp = function(message) {
  document.querySelector('main').removeChild(message);
  document.removeEventListener('click', clickAwayClose);
  document.removeEventListener('keydown', onPopUpEscKeydown)
}

const createSuccessMessage = function() {
  const successMessage = successMessageTemplate.cloneNode(true);
  document.querySelector('main').appendChild(successMessage);

  const successBtn = document.querySelector('.success__button');

  successBtn.addEventListener('click', function() {
    closePopUp(successMessage)
  });

  document.addEventListener('keydown', function(evt) {
    onPopUpEscKeydown(evt, successMessage);
  });

  document.addEventListener('click', function(evt) {
    clickAwayClose(evt, successDiv, successMessage);
  });
}

const createErrorMessage = function() {
  const errorMessage = errorMessageTemplate.cloneNode(true);
  document.querySelector('main').appendChild(errorMessage);

  const errorBtn = document.querySelector('.error__button');

  errorBtn.addEventListener('click', function() {
    closePopUp(errorMessage)
  });

  document.addEventListener('keydown', function(evt) {
    onPopUpEscKeydown(evt, errorMessage);
  });

  document.addEventListener('click', function(evt) {
    clickAwayClose(evt, errorDiv, errorMessage);
  });
}


export {getRandomNumber, isEscEvent, createSuccessMessage, createErrorMessage};
