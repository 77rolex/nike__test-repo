// --------- добавление классов слайдера
function addSliderSt() {
    const sliderSt = document.querySelector('.sports-time__grid');
    const slidesSt = document.querySelector('.sports-time__list');
    const slideSt = document.querySelectorAll('.sports-time__item');

    if (!sliderSt || !slidesSt) return;

    if (window.innerWidth <= 800) {
        sliderSt.classList.add("slider-st");
        slidesSt.classList.add("slides-st");

        slideSt.forEach(li => {
            const hasLink = li.querySelector('a');
            if (hasLink) {
                li.classList.add("slide-st");
            } else {
                li.classList.remove("slide-st");
            }
        });

    } else {
        sliderSt.classList.remove("slider-st");
        slidesSt.classList.remove("slides-st");
        slideSt.forEach(li => li.classList.remove("slide-st"));
    }
}

// --------- зачистка классов с оставшимися стилями
let sliderInitialized = false;
let autoSlideInterval = null;

function destroySlider() {
    if (!sliderInitialized) return;

    const slidesList = document.querySelector('.sports-time__list');
    if (slidesList) {
        slidesList.style.transform = 'none';
        slidesList.style.transition = "transform 0.5s ease-in-out";
    }

    clearInterval(autoSlideInterval);
    autoSlideInterval = null;
    sliderInitialized = false;
}

// --------- инициализация слайдера
function initSlider() {
    if (window.innerWidth > 800) {
        destroySlider();
        return;
    }

    if (sliderInitialized) return;

    const sliderViewport = document.querySelector('.slider-st');
    const slidesList = document.querySelector('.slides-st');
    const slides = document.querySelectorAll('.slide-st');

    if (!sliderViewport || !slidesList || slides.length === 0) return;

    sliderInitialized = true;

    let currentIndex = 0;
    const totalSlides = slides.length;

    const SLIDE_WIDTH = 320;
    const GAP = 50;

    function updateSliderPosition() {
        const step = SLIDE_WIDTH + GAP;
        slidesList.style.transform = `translateX(-${currentIndex * step}px)`;
    }

    autoSlideInterval = setInterval(() => {
        currentIndex = (currentIndex + 1) % totalSlides;
        updateSliderPosition();
    }, 3000);

    updateSliderPosition();
}

// --------- управление всеми функциями
function handleResize() {
    if (window.innerWidth > 800) {
        destroySlider();
        addSliderSt();
    } else {
        addSliderSt();
        initSlider();
    }
}

window.addEventListener('load', handleResize);
window.addEventListener('resize', handleResize);
