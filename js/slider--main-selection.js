const sliderViewport = document.querySelector('.slider');
const slidesList = document.querySelector('.slides');
const slides = document.querySelectorAll('.slide');

const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let currentIndex = 0;
const totalSlides = slides.length;

const SLIDE_WIDTH = 320;
const GAP = 40;

function getVisibleSlides() {
    if (window.innerWidth <= 800) return 1;
    if (window.innerWidth <= 1250) return 2;
    return 3;
}

let visibleSlides = getVisibleSlides();

function updateViewportWidth() {
    const step = SLIDE_WIDTH + GAP;
    const viewportWidth = visibleSlides * step - GAP;
    sliderViewport.style.maxWidth = viewportWidth + 'px';
    sliderViewport.style.margin = '0 auto';
}

function clampIndex() {
    const maxIndex = totalSlides - visibleSlides;
    if (currentIndex > maxIndex) currentIndex = maxIndex;
    if (currentIndex < 0) currentIndex = 0;
}

function updateSliderPosition() {
    const step = SLIDE_WIDTH + GAP;
    slidesList.style.transform = `translateX(-${currentIndex * step}px)`;
}

nextBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const maxIndex = totalSlides - visibleSlides;

    if (currentIndex < maxIndex) {
        currentIndex++;
    } else {
        currentIndex = 0;
    }

    updateSliderPosition();
});

prevBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const maxIndex = totalSlides - visibleSlides;

    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = maxIndex;
    }

    updateSliderPosition();
});

window.addEventListener('resize', () => {
    visibleSlides = getVisibleSlides();
    updateViewportWidth();
    clampIndex();
    updateSliderPosition();
});

window.addEventListener('load', () => {
    visibleSlides = getVisibleSlides();
    updateViewportWidth();
    clampIndex();
    updateSliderPosition();
});


// autoplay
let autoSlideInterval = setInterval(() => {
    if (currentIndex < totalSlides - 1) {
        currentIndex++;
    } else {
        currentIndex = 0;
    }
    updateSliderPosition();
}, 3000);

nextBtn.addEventListener('click', () => {
    clearInterval(autoSlideInterval);
    autoSlideInterval = setInterval(() => {
        if (currentIndex < totalSlides - 1) {
            currentIndex++;
        } else {
            currentIndex = 0;
        }
        updateSliderPosition();
    }, 3000);
});

prevBtn.addEventListener('click', () => {
    clearInterval(autoSlideInterval);
    autoSlideInterval = setInterval(() => {
        if (currentIndex < totalSlides - 1) {
            currentIndex++;
        } else {
            currentIndex = 0;
        }
        updateSliderPosition();
    }, 5000);
});