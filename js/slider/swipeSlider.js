
function createSlider(sliderElement,slider,slides) {
        if(!sliderElement) {
            return;
        }
        let x1 = null;
        let y1 = null;
        let currentSlide = 0;
        let slidesSwipe = slider;
        const slideWidthSwipeOffset = sliderElement.offsetWidth;
        const dots = slider;

        sliderElement.addEventListener('touchstart', handleTouchStart, false);
        sliderElement.addEventListener('touchmove', handleTouchMove, false);

        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                goToSlide(index);
            });
        });

        function handleTouchStart(event) {
            const firstTouch = event.touches[0];

            x1 = firstTouch.clientX;
            y1 = firstTouch.clientY;
        }

        function handleTouchMove(event) {
            let x2 = event.touches[0].clientX;
            let y2 = event.touches[0].clientY;

            if (!x1 || !x2 || !y1 || !y2) {
            return false;
            }

            let xDiff = x2 - x1;
            let yDiff = y2 - y1;

            if (Math.abs(xDiff) > Math.abs(yDiff)) {
            if (xDiff > 0) {
            previousSlide();
            } else {  
                nextSlide();
            }
            }
            x1 = null;
            y1 = null;
        }

        function nextSlide() {
            currentSlide++;
            const slidesSelector = slider;
            if (currentSlide >= slidesSwipe.length) {
            currentSlide = 0;
            }
            for (let i = 0; i < slidesSelector.length; i++) {
            slidesSelector[i].classList.remove('active');
            }
            slidesSelector[currentSlide].classList.add('active');
            updateSlider();
        }

        function previousSlide() {
            currentSlide--;
            const slidesSelector = slider;
            if (currentSlide < 0) {
            currentSlide = slidesSwipe.length - 1;
            }
            for (let i = 0; i < slidesSelector.length; i++) {
            slidesSelector[i].classList.remove('active');
            }
            slidesSelector[currentSlide].classList.add('active');
            updateSlider();
        }

        function goToSlide(index) {
            currentSlide = index;
            updateSlider();
            updateDots();
        }

        function updateSlider() {
            let translateX = -currentSlide * slideWidthSwipeOffset;
            for(let i = 0; i<slides.length; i++) {
            slides[i].style.transform = `translateX(${translateX}px)`;
            }
        }

        function updateDots() {
            dots.forEach((dot, index) => {
            if (index === currentSlide) {
                dot.classList.add('active');
            } else {
                dot.classList.remove('active');
            }
            });
        }
    }
    
     /* Константы для 1го слайдера */
     const repairSlider = document.querySelector('.main-about-block');
     const repairSliderSwitcher = document.getElementById('RepairSlider');
     const slidesSelectorRepair = repairSliderSwitcher.querySelectorAll('.slider-switcher.repair');
     const repairSlides = document.querySelectorAll('.about-block-container');

     /* Константы для 2го слайдера */
    const reviewsSlider = document.querySelector('.user-reviews-slider');
    const reviewSliderSwitcher = document.getElementById('ReviewSlider');
    const slidesSelectorReview = reviewSliderSwitcher.querySelectorAll('.slider-switcher');
    const reviewsSlides = document.querySelectorAll('.user-review-line');

    /* Константы для 3го слайдера */
    const questionSlider = document.querySelector('.questions-slider');
    const questionsSliderSwitcher = document.getElementById('SliderQuestions');
    const slidesSelectorQuestion = questionsSliderSwitcher.querySelectorAll('.slider-switcher');
    const questionsSlides = document.querySelectorAll('.often-questions-items');

    createSlider(questionSlider,slidesSelectorQuestion,questionsSlides);
    createSlider(reviewsSlider,slidesSelectorReview,reviewsSlides);
    createSlider(repairSlider,slidesSelectorRepair,repairSlides);

    window.addEventListener("resize", (event) => {
        createSlider(questionSlider,slidesSelectorQuestion,questionsSlides);
        createSlider(reviewsSlider,slidesSelectorReview,reviewsSlides);
        createSlider(repairSlider,slidesSelectorRepair,repairSlides);
    });