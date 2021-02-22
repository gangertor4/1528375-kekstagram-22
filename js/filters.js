let imgFilters = document.querySelectorAll('.effects__radio');
const imageUpload = document.querySelector('.img-upload__preview');
const filterSlider = document.querySelector('.effect-level__slider');
const filterValue = document.querySelector('.effect-level__value');

const filtersArr = [
  'effects__preview--none',
  'effects__preview--chrome',
  'effects__preview--sepia',
  'effects__preview--marvin',
  'effects__preview--phobos',
  'effects__preview--heat',
]

const removeFilters = function () {
  imageUpload.classList.remove(...filtersArr);
}

for (let i = 0; i < imgFilters.length; i++) {
  imgFilters[i].addEventListener('click', function() {
    removeFilters();
    imageUpload.classList.add(filtersArr[i])
  })
}

// eslint-disable-next-line no-undef
noUiSlider.create(filterSlider, {
  range: {
    min: 0,
    max: 100,
  },
  start: 80,
  step: 1,
});

filterSlider.classList.add('hidden')

filterSlider.noUiSlider.on('update', function (_, handle, unencoded) {
  filterValue.value = unencoded[handle];
});

imgFilters[0].addEventListener('change', function (evt) {
  if (evt.target.checked) {
    filterSlider.classList.add('hidden');
  }
})

imgFilters[1].addEventListener('change', function (evt) {
  if (evt.target.checked) {
    filterSlider.classList.remove('hidden');
    document.querySelector('.effects__preview--chrome').style.filter = 'grayscale(' + filterValue.value + ')';
    filterSlider.noUiSlider.updateOptions({
      range: {
        min: 0,
        max: 1,
      },
      start: 1,
      step: 0.1,
    })
    
  }
})

