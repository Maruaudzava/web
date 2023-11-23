new Swiper(".swiper-container", {
  // Optional parameters
  //   direction: "",
  loop: true,
  // slidesPerView: "auto",
  keyboard: {
    enabled: true,
  },
  // mousewheel: true,

  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 40,
    },
    850: {
      slidesPerView: 2,
      spaceBetween: 0,
    },
    1200: {
      slidesPerView: 3,
      // spaceBetween: 40,
    },
  },

  // If we need pagination
  //   pagination: {
  //     el: ".swiper-pagination",
  //   },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
    // hide: true,
  },
});

const sliderContainer = document.querySelector(".swiper-container");
const desktopPortfolio = document.querySelector(".desktop-portfolio");
// console.log(sliderContainer);

// const hiddenSlider = () => {
//   // console.log(window.innerWidth);
//   if (window.innerWidth >= 1200) {
//     sliderContainer.classList.add("visually-hidden");
//   } else {
//     desktopPortfolio.classList.add("visually-hidden");
//   }
// };

// window.addEventListener("load", hiddenSlider);

const hiddenSlider = () => {
  if (window.innerWidth > 1200) {
    sliderContainer.style.display = "none";
    desktopPortfolio.style.display = "flex";
  } else {
    sliderContainer.style.display = "flex";
    desktopPortfolio.style.display = "none";
  }
};

window.addEventListener("resize", hiddenSlider);
