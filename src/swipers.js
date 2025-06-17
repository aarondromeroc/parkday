import Swiper from "swiper";

const createSwiper = function (swiperEl, loop, desktopSlides, desktopSpace) {
  return new Swiper(swiperEl.querySelector(".swiper"), {
    direction: "horizontal",
    speed: 800,
    mousewheel: true,
    keyboard: true,
    loop: loop,
    slidesPerView: desktopSlides,
    spaceBetween: desktopSpace,
  });
};

function initGridSwiper() {
  const gridSwiperEl = document.querySelector("[data-grid-swiper]");
  if (gridSwiperEl) {
    createSwiper(gridSwiperEl.querySelector(".swiper"), true, 1, 24);
  }
}

function initFeaturesSwipers() {
  document.querySelectorAll("[data-features-swiper]").forEach((element) => {
    const swiperEl = element.querySelector(".swiper");
    if (swiperEl) {
      createSwiper(swiperEl, false, 3, 16);
    }
  });
}

export { initGridSwiper, initFeaturesSwipers };

export default function initSwipers() {
  initGridSwiper();
  initFeaturesSwipers();
}
