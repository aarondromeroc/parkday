import Swiper from 'swiper'

const createSwiper = function (swiperEl, loop, desktopSlides, desktopSpace) {
    return new Swiper(swiperEl.querySelector('.swiper'), {
        direction: 'horizontal',
        speed: 800,
        mousewheel: true,
        keyboard: true,
        loop: loop,
        slidesPerView: desktopSlides,
        spaceBetween: desktopSpace
    })
}

export default function initSwipers() {
    createSwiper(document.querySelector('[data-grid-swiper]'), true, 1, 24)
}