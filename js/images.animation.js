const animContainer = document.querySelector('.anim-container');

window.addEventListener('scroll', () => {
    const triggerPoint = window.innerHeight / 1.0;
    const top = animContainer.getBoundingClientRect().top;
    const bottom = animContainer.getBoundingClientRect().bottom;

    if (top < triggerPoint && bottom > 0) {
        animContainer.classList.add('visible');
    }
});