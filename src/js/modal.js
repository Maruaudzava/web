const openModalBtn = document.querySelector(".about__btn");

const modal = document.querySelector("#modal");

const backDrop = document.querySelector("#modalBackDrop");

const body = document.querySelector("body");

const closeBtn = document.querySelector(".modal__close");

const openModalHendler = () => {
  modal.classList.add("modal__visible");
  backDrop.classList.add("modal__backDrop");
  body.style.overflow = "hidden";
  //   console.log(modal.className);
  //   console.log(modal.classList);
  //   console.log(modal.className.includes("modal__visible"));
};

const closeModalhandler = () => {
  modal.classList.remove("modal__visible");
  backDrop.classList.remove("modal__backDrop");
  body.style.overflow = "auto";
};

const closeOnBackDrop = (e) => {
  if (e.target === e.currentTarget) {
    closeModalhandler();
  }
  console.log(e.target);
  console.log(e.currentTarget);
};

const closeModalByescape = (e) => {
  if (e.code === "Escape") {
    closeModalhandler();
  } else {
    return;
  }
};

openModalBtn.addEventListener("click", openModalHendler);

closeBtn.addEventListener("click", closeModalhandler);

backDrop.addEventListener("click", closeOnBackDrop);

document.addEventListener("keydown", closeModalByescape);
