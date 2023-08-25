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