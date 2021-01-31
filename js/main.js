// Взял с https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random
// Постарался разобраться

const getRandomNumber = function(min, max) {
  if (max > min) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  } else {
    return Math.floor(Math.random() * (min - max + 1)) + max;
  }
}

getRandomNumber();

const checkCommentLength = function (comment, maxLength) {
  maxLength = 140;

  return comment.length <= maxLength;
}

checkCommentLength();