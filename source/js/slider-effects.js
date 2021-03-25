let imgFilters = document.querySelectorAll('.effects__radio');
const imageUpload = document.querySelector('.img-upload__preview');
const filterSlider = document.querySelector('.effect-level__slider');
const filterBar = document.querySelector('.img-upload__effect-level');
const filterValue = document.querySelector('.effect-level__value');

const effects = {
  NONE: 'effects__preview--none',
  CHROME: 'effects__preview--chrome',
  SEPIA: 'effects__preview--sepia',
  MARVIN: 'effects__preview--marvin',
  PHOBOS: 'effects__preview--phobos',
  HEAT: 'effects__preview--heat',
}

const sliderOptions = {
  CHROME: {
    range: {
      min: 0,
      max: 1,
    },
    start: 1,
    step: 0.1,
    connect: true,
  },
  SEPIA: {
    range: {
      min: 0,
      max: 1,
    },
    start: 1,
    step: 0.1,
    connect: true,
  },
  MARVIN: {
    range: {
      min: 0,
      max: 100,
    },
    start: 100,
    step: 1,
    connect: true,
  },
  PHOBOS: {
    range: {
      min: 0,
      max: 3,
    },
    start: 3,
    step: 0.1,
    connect: true,
  },
  HEAT: {
    range: {
      min: 0,
      max: 3,
    },
    start: 3,
    step: 0.1,
    connect: true,
  },
}

const removeFilters = function () {
  imageUpload.classList.remove(...Object.values(effects));
}

const resetSliderEffects = function () {
  filterSlider.noUiSlider.reset();
  removeFilters();
  imageUpload.classList.add(effects.NONE)
  imageUpload.style.filter = 'none';
  filterBar.style.display = 'none';
}

imgFilters.forEach((filter, index) => {
  filter.addEventListener('click', function() {
    removeFilters();
    imageUpload.classList.add(effects[index])
  })
})

filterBar.style.display = 'none'

imgFilters[0].addEventListener('change', function (evt) {
  if (evt.target.checked) {
    filterBar.style.display = 'none';
    imageUpload.style.filter = 'none';
  }
})

imgFilters[1].addEventListener('change', function (evt) {
  if (evt.target.checked) {
    filterBar.style.display = 'block';
    
    filterSlider.noUiSlider.updateOptions(sliderOptions.CHROME)

    filterSlider.noUiSlider.on('update', function (_, handle, unencoded) {
      filterValue.value = unencoded[handle];
      imageUpload.style.filter = `grayscale(${filterValue.value})`;
    })
  }
})

imgFilters[2].addEventListener('change', function (evt) {
  if (evt.target.checked) {
    filterBar.style.display = 'block';
    
    filterSlider.noUiSlider.updateOptions(sliderOptions.SEPIA)

    filterSlider.noUiSlider.on('update', function (_, handle, unencoded) {
      filterValue.value = unencoded[handle];
      imageUpload.style.filter = `sepia(${filterValue.value})`;
    })
  }
})

imgFilters[3].addEventListener('change', function (evt) {
  if (evt.target.checked) {
    filterBar.style.display = 'block';
    
    filterSlider.noUiSlider.updateOptions(sliderOptions.MARVIN)

    filterSlider.noUiSlider.on('update', function (_, handle, unencoded) {
      filterValue.value = unencoded[handle];
      imageUpload.style.filter = `invert(${filterValue.value}%)`;
    })
  }
})

imgFilters[4].addEventListener('change', function (evt) {
  if (evt.target.checked) {
    filterBar.style.display = 'block';
    
    filterSlider.noUiSlider.updateOptions(sliderOptions.PHOBOS)

    filterSlider.noUiSlider.on('update', function (_, handle, unencoded) {
      filterValue.value = unencoded[handle];
      imageUpload.style.filter = `blur(${filterValue.value}px)`;
    })
  }
})

imgFilters[5].addEventListener('change', function (evt) {
  if (evt.target.checked) {
    filterBar.style.display = 'block';
    
    filterSlider.noUiSlider.updateOptions(sliderOptions.HEAT)

    filterSlider.noUiSlider.on('update', function (_, handle, unencoded) {
      filterValue.value = unencoded[handle];
      imageUpload.style.filter = `brightness(${filterValue.value})`;
    })
  }
})

export {resetSliderEffects}

