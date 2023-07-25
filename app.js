
const carousel = document.querySelector('.carousel')
const next = document.querySelector("[data-js ='carousel__button--next']")
const previous = document.querySelector("[data-js ='carousel__button--prev']")

let acc = 0;

const increaseAccumulatorValue = (acc, imageAmount) => {
  acc < imageAmount ? acc++ : acc = 0;
  return acc
}

const decreaseAccumulatorValue = (acc, imageAmount) => {
  acc--
  acc < 0 ? acc = imageAmount : acc;
  return acc
}

const showImage = (getImages, acc) => {
  getImages.forEach((images, index) => {

    images.classList.add(`${index}`)
    images.classList.remove('carousel__item--visible')

    if (images.classList.contains(acc)) {
      images.classList.add('carousel__item--visible')
    }

  })
}

next.addEventListener('click', () => {
  const getImages = document.querySelectorAll('.carousel__item');
  const imageAmount = getImages.length - 1;

  acc = increaseAccumulatorValue(acc, imageAmount)
  showImage(getImages, acc)
})


previous.addEventListener('click', () => {
  const getImages = document.querySelectorAll('.carousel__item')
  const imageAmount = getImages.length - 1;

  acc = decreaseAccumulatorValue(acc, imageAmount)
  showImage(getImages, acc)
})





