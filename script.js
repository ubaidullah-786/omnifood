"use strict";

const headerEl = document.querySelector(".header");
const btnMobileNav = document.querySelector(".btn-mobile-nav");
const yearEl = document.querySelector(".year");
const link = document.querySelectorAll("a:link");
const sectionHeroEl = document.querySelector(".section-hero");

yearEl.textContent = new Date().getFullYear();

btnMobileNav.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});

for (let i = 0; i < link.length; i++) {
  link[i].addEventListener("click", function () {
    if (link[i].classList.contains("main-nav-link"))
      headerEl.classList.toggle("nav-open");
  });
}

const observer = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    if (!ent.isIntersecting) document.body.classList.add("sticky");
    if (ent.isIntersecting) document.body.classList.remove("sticky");
  },
  {
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);
observer.observe(sectionHeroEl);
