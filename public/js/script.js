// import initParticles from "./particles.js";

let swiper = new Swiper(".mySwiper", {
  direction: "vertical",
  slidesPerView: 1,
  spaceBetween: 0,
  mousewheel: true,
  allowTouchMove: false,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    modifierClass: "my-pagination__",
    renderBullet: function (index, className) {
      const pages = ["Home", "SkillSet", "Projects", "About"];
      return `<span class="${className}">${pages[index]}</span>`;
    },
  },
});

let projectsSwiper = new Swiper(".projects-swiper", {
  loop: true,
  pagination: {
    el: ".swiper-proj-pag",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const menu = document.querySelector(".my-pagination__bullets");
document.addEventListener("DOMContentLoaded", () => {
  menu.classList.add("active");
});
