const slides = document.querySelectorAll('[data-js = carousel__item]');
const next = document.querySelector('[data-js = carousel__button--next]')
const previous = document.querySelector('[data-js = carousel__button--prev]')
const img = document.querySelectorAll('img')


const lastItem = slides.length - 1
let currentSlideIndex = 0;


const manipulateSlidesClasses = (currentSlideIndex) => {
    slides.forEach((slide) => slide.classList.remove('carousel__item--visible'))
    slides[currentSlideIndex].classList.add('carousel__item--visible')
}


next.addEventListener('click', () => {
    currentSlideIndex++

    currentSlideIndex < slides.length ?
        currentSlideIndex
        : currentSlideIndex = 0;

    manipulateSlidesClasses(currentSlideIndex)
})


previous.addEventListener('click', () => {
    currentSlideIndex--

    currentSlideIndex < 0 ?
        currentSlideIndex = lastItem
        : currentSlideIndex


    manipulateSlidesClasses(currentSlideIndex)
})

