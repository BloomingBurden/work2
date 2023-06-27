import './modules/functions.js';
import './modules/movingEffects.js';
import { Scrooth } from './modules/smoothScroll.js';

window.addEventListener('load', () => {

    if (document.body.classList.contains('index-body')) {
        const swiper = new Swiper('.swiper', {
            breakpoints: {
                '320': {
                    slidesPerView: 1.25,
                    spaceBetween: 20,
                },
                '820': {
                    slidesPerView: 'auto',
                },
            },

            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        });
    }

    const smoothScrolling = new Scrooth();
});


  