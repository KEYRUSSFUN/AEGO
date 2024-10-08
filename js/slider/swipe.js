    const questionSlider = document.querySelector('.questions-slider');
    const questionSliders = document.getElementById('SliderQuestions');
    const slidesSelector = questionSliders.querySelectorAll('.slider-switcher');
    const slideWidthOne = document.querySelector('.often-questions-items');
    const reviewsSlider = document.getElementById('ReviewSlider');
    const reviewSlides = reviewsSlider.querySelectorAll('.slider-swticher');
    const userReviewSlider = document.querySelector('.user-reviews-slider');

    questionSlider.addEventListener('touchstart', handleTouchStart, false);
    questionSlider.addEventListener('touchmove', handleTouchMove, false);
    userReviewSlider.addEventListener('touchstart', handleTouchStart, false);
    userReviewSlider.addEventListener('touchmove', handleTouchMove, false);
    

    let x1 = null; 
    let y1 = null;

    let slider = questionSlider;
    let slidesSwipe = document.querySelectorAll('.often-questions-items');
    let currentSlideSwipe = 0; 
    
    const slideWidthSwipeOffset = slideWidthOne.offsetWidth;

    function handleTouchStart(event) { 
        
        const firstTouch = event.touches[0]; 
    
        x1 = firstTouch.clientX; 
        y1 = firstTouch.clientY; 
    } 
    
    function handleTouchMove(event) { 
        let x2 = event.touches[0].clientX; 
        let y2 = event.touches[0].clientY;

        if(!x1 || !x2) { 
            return false; 
        } 
    
        let xDiff = x2 - x1; 
        let yDiff = y2 - y1; 
    
        if (Math.abs(xDiff) > Math.abs(yDiff)) { 
            if (xDiff > 0) {
                nextSlide();
            }
            else {
                previousSlide();
            } 
        }
        x1 = null; 
        y1 = null;
    }

    function nextSlide() {
        currentSlideSwipe++;
    
        if (currentSlideSwipe >= slidesSwipe.length) {
        currentSlideSwipe = 0;
        }

        for(let i = 0; i < slidesSelector.length; i++) {
            slidesSelector[i].classList.remove('active');
        }

        slidesSelector[currentSlideSwipe].classList.add('active');
        updateSlider();
    
    }
    
    function previousSlide() {
        currentSlideSwipe--;
        if (currentSlideSwipe < 0) {
        currentSlideSwipe = slidesSwipe.length - 1;
        }

        for(let i = 0; i < slidesSelector.length; i++) {
            slidesSelector[i].classList.remove('active');
        }

        console.log(currentSlideSwipe);
        slidesSelector[currentSlideSwipe].classList.add('active');

        updateSlider();
    }
    
    function updateSlider() {
        let translateX = -currentSlideSwipe * slideWidthSwipeOffset;
        for(let i = 0; i < slidesSwipe.length; i++) {
            slidesSwipe[i].style.transform = `translateX(${translateX}px)`;
        }
       
    }