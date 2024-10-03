let currentIndex = 0;

function moveSlide(n) {
    const slides = document.querySelectorAll('.carousel-slide');
    currentIndex += n;

    if (currentIndex >= slides.length) {
        currentIndex = 0;
    } else if (currentIndex < 0) {
        currentIndex = slides.length - 1;
    }

    const carouselContainer = document.querySelector('.carousel-container');
    const slideWidth = slides[0].clientWidth;
    carouselContainer.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
}
