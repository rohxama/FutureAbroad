const header = document.querySelector('header');

window.addEventListener('scroll', () => {
    if (header && window.scrollY >= 100) {
        header.classList.add('scroll');
    } else if (header) {
        header.classList.remove('scroll');
    }
});


var swiper = new Swiper('.swiper-container', {
    slidesPerView: 'auto', 
    spaceBetween: 30,  
    loop: true,             
    speed: 900,           
    autoplay: {
        delay: 0, 
        disableOnInteraction: false, 
    },
});






