new Swiper(".swiper-container", {
  // Optional parameters
  //   direction: "",
  loop: true,
  slidesPerView: "auto",
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
  },

  // If we need pagination
  //   pagination: {
  //     el: ".swiper-pagination",
  //   },

  // Navigation arrows
  //   navigation: {
  //     nextEl: ".swiper-button-next",
  //     prevEl: ".swiper-button-prev",
  //   },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
    // hide: true,
  },
});

const sliderContainer = document.querySelector(".swiper-container");
const desktopPortfolio = document.querySelector(".desktop-portfolio");
console.log(sliderContainer);

const hiddenSlider = () => {
  console.log(window.innerWidth);
  if (window.innerWidth >= 1200) {
    sliderContainer.classList.add("visually-hidden");
  } else {
    desktopPortfolio.classList.add("visually-hidden");
  }
};

window.addEventListener("load", hiddenSlider);
