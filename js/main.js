// Взял с https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random
// Постарался разобраться

const getRandomNumber = function(min, max) {
  const maxNumber = (max > min) ? Math.floor(max) : Math.ceil(min);
  const minNumber = (max > min) ? Math.ceil(min) : Math.floor(max);

  return Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
}

const checkCommentLength = function (comment, maxLength) {
  maxLength = 140;

  return comment.length <= maxLength;
}

checkCommentLength();

const DESC = [
  'Моя любимая фотография.',
  'Это фото сделано в городе Ессентуки.',
  'Я не знаю как это вышло.',
  'Я хотел заснять НЛО, но вышло тоже не плохо.',
  'Это. Не. Можыд. Быт.',
  'Фотограф из меня просто гениальный.',
  'Думаю на стенку повесить. Как вам кажется?',
  'Вот куплю новое оборудование, всё сразу лучше станет',
  'Если присмотреться, то можно увидеть там Дурова',
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
  for (let k = 1; k <= 100; k++) {
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
  const messageQty = getRandomNumber(1, 3);
  let messageArr = []

  for (let p = 1; p <= messageQty; p++) {
    const messageIndex = getRandomNumber(0, MESSAGE_LIST.length - 1);
    messageArr.push(MESSAGE_LIST[messageIndex]);
  }

  return messageArr.join(' ')
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
  let photoInfo = [];

  for (let i = 1; i <= 25; i++) {
    const randomLikes = getRandomNumber(15, 200);
    const randomDesc = getRandomNumber(0, DESC.length - 1);
    const photoInfoObj = {
      id: i,
      url: 'photos/' + i + '.jpg',
      description: DESC[randomDesc],
      likes: randomLikes,
      comments: getCommentArr(),
    }
    photoInfo.push(photoInfoObj)
  }
  return photoInfo;
}

getPhotoInfo();


// const photoInfoArray = new Array(25).fill(null).map(() => getPhotoInfo());