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

filterSlider.classList.add('hidden');

imgFilters[0].addEventListener('change', function (evt) {
  if (evt.target.checked) {
    filterSlider.classList.add('hidden');
    imageUpload.style.filter = 'none';
  }
})

imgFilters[1].addEventListener('change', function (evt) {
  if (evt.target.checked) {
    filterSlider.classList.remove('hidden');
    
    filterSlider.noUiSlider.updateOptions({
      range: {
        min: 0,
        max: 1,
      },
      start: 1,
      step: 0.1,
    })

    filterSlider.noUiSlider.on('update', function (_, handle, unencoded) {
      filterValue.value = unencoded[handle];
      imageUpload.style.filter = 'grayscale(' + filterValue.value + ')';
    })
  }
})

imgFilters[2].addEventListener('change', function (evt) {
  if (evt.target.checked) {
    filterSlider.classList.remove('hidden');
    
    filterSlider.noUiSlider.updateOptions({
      range: {
        min: 0,
        max: 1,
      },
      start: 1,
      step: 0.1,
    })

    filterSlider.noUiSlider.on('update', function (_, handle, unencoded) {
      filterValue.value = unencoded[handle];
      imageUpload.style.filter = 'sepia(' + filterValue.value + ')';
    })
  }
})

imgFilters[3].addEventListener('change', function (evt) {
  if (evt.target.checked) {
    filterSlider.classList.remove('hidden');
    
    filterSlider.noUiSlider.updateOptions({
      range: {
        min: 0,
        max: 100,
      },
      start: 100,
      step: 1,
    })

    filterSlider.noUiSlider.on('update', function (_, handle, unencoded) {
      filterValue.value = unencoded[handle];
      imageUpload.style.filter = 'invert(' + filterValue.value + '%)';
    })
  }
})

imgFilters[4].addEventListener('change', function (evt) {
  if (evt.target.checked) {
    filterSlider.classList.remove('hidden');
    
    filterSlider.noUiSlider.updateOptions({
      range: {
        min: 0,
        max: 3,
      },
      start: 3,
      step: 0.1,
    })

    filterSlider.noUiSlider.on('update', function (_, handle, unencoded) {
      filterValue.value = unencoded[handle];
      imageUpload.style.filter = 'blur(' + filterValue.value + 'px)';
    })
  }
})

imgFilters[5].addEventListener('change', function (evt) {
  if (evt.target.checked) {
    filterSlider.classList.remove('hidden');
    
    filterSlider.noUiSlider.updateOptions({
      range: {
        min: 1,
        max: 3,
      },
      start: 3,
      step: 0.1,
    })

    filterSlider.noUiSlider.on('update', function (_, handle, unencoded) {
      filterValue.value = unencoded[handle];
      imageUpload.style.filter = 'brightness(' + filterValue.value + ')';
    })
  }
})

