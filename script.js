var currentIndex = 0;
var slides = document.querySelectorAll('.gallery-image');

function showSlide(index) {
    if (index < 0 || index >= slides.length) {
        console.error('Invalid slide index:', index);
        return;
    }

    slides.forEach(function (slide) {
        slide.style.display = 'none';
    });

    slides[index].style.display = 'block';
}

function showNext() {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
}

function showPrevious() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(currentIndex);
}


function startAutoSlide() {
    setInterval(function () {
        showNext();
    }, 2000);
}


showSlide(currentIndex);


startAutoSlide();
