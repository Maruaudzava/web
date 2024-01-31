const sections = document.querySelectorAll("section");
console.log(sections);
const navLinks = document.querySelectorAll(".navLink");
console.log(navLinks);

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 300;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");
    if (top >= offset && top < offset + height) {
      navLinks.forEach((link) => {
        link.classList.remove("active");

        document
          .querySelector(".navLink[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });
};
