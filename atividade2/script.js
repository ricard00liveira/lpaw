document.addEventListener("DOMContentLoaded", function() {
    anime({
        targets: '.title',
        translateY: [-100, 0],
        opacity: [0, 1],
        duration: 1000,
        easing: 'easeOutElastic(1, .5)'
    });

    anime({
        targets: '.slogan',
        translateY: [100, 0],
        opacity: [0, 1],
        duration: 1000,
        delay: 500,
        easing: 'easeOutElastic(1, .5)'
    });

    anime({
        targets: '.start-button',
        scale: [0.8, 1],
        opacity: [0, 1],
        duration: 1000,
        delay: 1000,
        easing: 'easeOutElastic(1, .5)'
    });
});

const images = [
    "bgImg/1.png",
    "bgImg/2.png",
    "bgImg/3.png",
    "bgImg/4.png",
    "bgImg/5.png",
    "bgImg/6.png",
    "bgImg/7.png",
    "bgImg/8.png",
    "bgImg/9.png",
    "bgImg/10.png",
    "bgImg/11.png"
];

let imagesLoaded = 0;

images.forEach((src) => {
  const img = new Image();
  img.src = src;
  img.onload = () => {
    imagesLoaded++;
    if (imagesLoaded === images.length) {
      document.body.classList.remove('hidden');
    }
  };
});

const startButton = document.querySelector('.start-button');
startButton.addEventListener('click', () => {
    document.body.style.animationPlayState = 'paused';
})
