const whatsappBtn = document.getElementById('whatsappBtn');

window.addEventListener('scroll', () => {
    if (window.scrollY >= window.innerHeight * 0) {
        whatsappBtn.classList.add('visible');
    } else {
        whatsappBtn.classList.remove('visible');
    }
});