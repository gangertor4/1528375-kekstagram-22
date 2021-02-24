const SCALE_STEP = 25;
const SCALE_MAX_LEVEL = 100;
const SCALE_MIN_LEVEL = 25;
const imageUploadScale = document.querySelector('.img-upload__scale');
const scaleValue = imageUploadScale.querySelector('.scale__control--value');
const scaleValueMinus = imageUploadScale.querySelector('.scale__control--smaller');
const scaleValuePlus = imageUploadScale.querySelector('.scale__control--bigger');
const imageUpload = document.querySelector('.img-upload__preview');


const increaseImg = function () {
  let scaleValueData = parseInt(scaleValue.value, 10);

  if (scaleValueData === SCALE_MAX_LEVEL || scaleValueData + SCALE_STEP === SCALE_MAX_LEVEL) {
    imageUpload.style.transform = 'scale(1.0)';
    scaleValue.value = '100%';
  } else if (scaleValueData < SCALE_MAX_LEVEL) {
    imageUpload.style.transform = `scale(0.${(scaleValueData + SCALE_STEP)})`;
    scaleValue.value = `${scaleValueData + SCALE_STEP}%`;
  }
}

const decreaseImg = function () {
  let scaleValueData = parseInt(scaleValue.value, 10);

  if (scaleValueData > SCALE_MIN_LEVEL) {
    imageUpload.style.transform = `scale(0.${(scaleValueData - SCALE_STEP)})`;
    scaleValue.value = `${scaleValueData - SCALE_STEP}%`;
  } else if (scaleValueData === SCALE_MIN_LEVEL) {
    imageUpload.style.transform = 'scale(0.25)';
  }
}

scaleValuePlus.addEventListener('click', function () {
  increaseImg()
});

scaleValueMinus.addEventListener('click', function () {
  decreaseImg();
});