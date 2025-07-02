import Swiper from "swiper";
import { Navigation, Pagination, EffectCards } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-cards";

const createSwiper = function (
  swiperEl,
  loop,
  speed = 600,
  desktopSlides,
  desktopSpace,
  effect = null
) {
  const parentElement = swiperEl.closest(
    "[data-grid-swiper], [data-features-swiper], [data-restaurant-swiper]"
  );
  const navElement = parentElement
    ? parentElement.querySelector("[data-swiper-nav]")
    : null;
  const prevButton = navElement
    ? navElement.querySelector("[data-swiper-prev]")
    : null;
  const nextButton = navElement
    ? navElement.querySelector("[data-swiper-next]")
    : null;

  const config = {
    modules: [Navigation, Pagination, EffectCards],
    direction: "horizontal",
    speed: speed,
    mousewheel: true,
    keyboard: true,
    loop: loop,
    slidesPerView: desktopSlides,
    spaceBetween: desktopSpace,
  };

  if (effect) {
    config.effect = effect;
  }

  if (prevButton && nextButton) {
    config.navigation = {
      nextEl: nextButton,
      prevEl: prevButton,
    };
  }

  try {
    const swiper = new Swiper(swiperEl, config);
    return swiper;
  } catch (error) {
    return null;
  }
};

function initGridSwiper() {
  const gridSwiperEl = document.querySelector("[data-grid-swiper]");

  if (gridSwiperEl) {
    const swiperContainer = gridSwiperEl.querySelector(".swiper");
    if (swiperContainer) {
      createSwiper(swiperContainer, true, 600, 1, 24);
    }
  }
}

function initFeaturesSwipers() {
  const featuresElements = document.querySelectorAll("[data-features-swiper]");

  featuresElements.forEach((element, index) => {
    const swiperEl = element.querySelector(".swiper");
    if (swiperEl) {
      createSwiper(swiperEl, false, 600, 3, 16);
    }
  });
}

function initRestaurantSwipers(
  loop = true,
  speed = 300,
  slidesPerView = 1,
  spaceBetween = 0,
  effect = null
) {
  const restSwiper = document.querySelector("[data-restaurant-swiper]");

  if (restSwiper) {
    const swiperContainer = restSwiper.querySelector(".swiper");
    if (swiperContainer) {
      createSwiper(
        swiperContainer,
        false,
        speed,
        slidesPerView,
        spaceBetween,
        "cards"
      );
    }
  }
}

export { initGridSwiper, initFeaturesSwipers, initRestaurantSwipers };

export default function initSwipers() {
  initGridSwiper();
  initFeaturesSwipers();
  initRestaurantSwipers();
}
