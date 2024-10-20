const header = document.querySelector('header');

window.addEventListener('scroll', () => {
    if (header && window.scrollY >= 100) {
        header.classList.add('scroll');
    } else if (header) {
        header.classList.remove('scroll');
    }
});