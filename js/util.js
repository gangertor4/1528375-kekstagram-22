const getRandomNumber = function(min, max) {
  const maxNumber = (max > min) ? Math.floor(max) : Math.ceil(min);
  const minNumber = (max > min) ? Math.ceil(min) : Math.floor(max);

  return Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
}

const isEscEvent = function (evt) {
  return evt.key === ('Escape' || 'Esc');
};

export {getRandomNumber, isEscEvent};
