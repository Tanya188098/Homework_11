let slidesContainer = document.getElementById('slides-container'),
    prevBtn = document.getElementById('prev'),
    nextBtn = document.getElementById('next'),
    slides = document.querySelectorAll('.slide');

let index = 0;

function activeSlide(n) {
    for (slide of slides) {
        if (n === 0) {
            prevBtn.style.display = 'none';
        } else {
            prevBtn.style.display = 'block';
        }

        if (n === slides.length - 1) {
            nextBtn.style.display = 'none';
        } else {
            nextBtn.style.display = 'block';
        }
        slide.classList.remove('active');
    }
    slides[n].classList.add('active');
}

activeSlide(0);

function nextSlide(n) {
    if (index === slides.length - 1) {
        index = 0;
        activeSlide(index);
    } else {
        index++;
        activeSlide(index);
    }
}

function prevSlide(n) {
    if (index === 0) {
        index = slides.length - 1;
        activeSlide(index);
    } else {
        index--;
        activeSlide(index);
    }
}

nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);