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

// const checkCommentLength = function (comment, maxLength) {
//   maxLength = 140;

//   return comment.length <= maxLength;
// }

// checkCommentLength();

const DESC = [
  'Моя любимая фотография.',
  'Это фото сделано в городе Ессентуки.',
  'Я не знаю как это вышло.',
  'Я хотел заснять НЛО, но вышло тоже не плохо.',
  'Это. Не. Можыд. Быт.',
  'Фотограф из меня просто гениальный.',
  'Думаю на стенку повесить. Как вам кажется?',
]

const MESSAGE_LIST = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
]

const COMMENT_NAME = [
  'Джефф Безос',
  'Билл Гейтс',
  'Бернар Арно',
  'Уоррен Баффет',
  'Марк Цукерберг',
  'Стив Балмер',
]

let arrId = [];

const getCommentId = function () {
  for (let k = 26; k <= 100; k++) {
    arrId.push(k);
  }

  const indexArrId = getRandomNumber(0, arrId.length - 1);
  const randomCommentId = arrId[indexArrId];
  const index = arrId.indexOf(randomCommentId);
  if (index > -1) {
    arrId.splice(index, 1);
  }

  return randomCommentId;
}

const getMessage = function () {
  const messageQty = getRandomNumber(1, 2);
  const messageIndex = getRandomNumber(0, MESSAGE_LIST.length - 1);
  const messageIndexTwo = getRandomNumber(0, MESSAGE_LIST.length - 1);

  if (messageQty === 2) {
    return MESSAGE_LIST[messageIndex] + ' ' + MESSAGE_LIST[messageIndexTwo]
  }

  return MESSAGE_LIST[messageIndex]
}

const getComment = function() {
  const randomAvatar = getRandomNumber(1, 6);
  const randomName = getRandomNumber(0, COMMENT_NAME.length - 1);

  return {
    id: getCommentId(),
    avatar: 'img/avatar-' + randomAvatar + '.svg',
    message: getMessage(),
    name: COMMENT_NAME[randomName],
  }
}

const getCommentArr = function() {
  let commentArr = [];
  const commentQty = getRandomNumber(1, 5)

  for (let j = 1; j <= commentQty; j++) {
    commentArr.push(getComment())
  }
  
  return commentArr
}



const getPhotoInfo = function() {
  const randomLikes = getRandomNumber(15, 200);
  const randomDesc = getRandomNumber(0, DESC.length - 1);

  for (let i = 1; i <= 25; i++) {
    return {
      id: i,
      url: 'photos/' + i + '.jpg',
      description: DESC[randomDesc],
      likes: randomLikes,
      comments: getCommentArr(),
    }
  }  
}

const photoInfoArray = new Array(25).fill(null).map(() => getPhotoInfo());

photoInfoArray