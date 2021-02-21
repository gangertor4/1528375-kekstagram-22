const SCALE_STEP = 25;
const SCALE_MAX_LEVEL = 100;
const SCALE_MIN_LEVEL = 25;
const imageUploadScale = document.querySelector('.img-upload__scale');
const scaleValue = imageUploadScale.querySelector('.scale__control--value');
const scaleValueMinus = imageUploadScale.querySelector('.scale__control--smaller');
const scaleValuePlus = imageUploadScale.querySelector('.scale__control--bigger');
const imageUpload = document.querySelector('.img-upload__preview');


const increaseImg = function () {
  if (parseInt(scaleValue.value, 10) < SCALE_MAX_LEVEL) {
    imageUpload.style.transform = 'scale(0.' + (parseInt(scaleValue.value, 10) + SCALE_STEP) + ')';
    scaleValue.value = parseInt(scaleValue.value, 10) + SCALE_STEP + '%';
    console.log(imageUpload.style.transform);
    if (parseInt(scaleValue.value, 10) === SCALE_MAX_LEVEL) {
      imageUpload.style.transform = 'scale(1.0)';
      scaleValue.value = '100%';
    }
  }
}

const decreaseImg = function () {
  if (parseInt(scaleValue.value, 10) > SCALE_MIN_LEVEL) {
    imageUpload.style.transform = 'scale(0.' + (parseInt(scaleValue.value, 10) - SCALE_STEP) + ')';
    scaleValue.value = parseInt(scaleValue.value, 10) - SCALE_STEP + '%';
    console.log(imageUpload.style.transform);
  } else if (parseInt(scaleValue.value, 10) === SCALE_MIN_LEVEL) {
    imageUpload.style.transform = 'scale(0.25)';
  }
}

scaleValuePlus.addEventListener('click', function () {
  increaseImg()
});

scaleValueMinus.addEventListener('click', function () {
  decreaseImg();
});