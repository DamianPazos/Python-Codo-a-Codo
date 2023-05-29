const carousel = document.querySelector('.carousel-container');
let interval = null;
let step = 0.5;
let maxScrollLeft = carousel.scrollWidth - carousel.clientWidth;

// buscar scroolLeft/right
// buscar setInterval

const start = () => {
    interval = setInterval(function () {
        carousel.scrollLeft = carousel.scrollLeft + step;
        if (carousel.scrollLeft === maxScrollLeft) {
            step = -0.5;
        }
        else if (carousel.scrollLeft === 0) {
            step = 0.5;
        }
    }, 10)
};

const stop = () => {
    clearInterval(interval);
};

carousel.addEventListener('mouseover', () => {
    stop();
});

carousel.addEventListener('mouseout', () => {
    start();
});

start();