const menu = document.querySelector(".menu");
const navOpen = document.querySelector(".hamburger");
const navClose = document.querySelector(".close");
const navBar = document.querySelector(".nav");
const navHeight = navBar.getBoundingClientRect().height;

const navLeft = menu.getBoundingClientRect().left;
navOpen.addEventListener("click", () => {
  if (navLeft < 0) {
    menu.classList.add("show");
    document.body.classList.add("show");
    navBar.classList.add("show");
  }
});

navClose.addEventListener("click", () => {
  if (navLeft < 0) {
    menu.classList.remove("show");
    document.body.classList.remove("show");
    navBar.classList.remove("show");
  }
});
window.addEventListener("scroll", function () {
  var header = document.querySelector("nav");
  header.classList.toggle("fix-nav", window.scrollY > 0);
});

var swiper = new Swiper(".review-slider", {
  spaceBetween: 20,
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: true,
  },
  breakpoints: {
    384: {
      slidesPerView: 1,
    },
    512: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
  },
});
/*
older scroll fix nav
window.addEventListener("scroll", () => {
  const scrollHeight = window.pageYOffset;
  if (scrollHeight > navHeight) {
    navBar.classList.add("fix-nav");
  } else {
    navBar.classList.remove("fix-nav");
  }
});
*/

const links = [...document.querySelectorAll(".scroll-link")];
links.map((link) => {
  if (!link) return;
  link.addEventListener("click", (e) => {
    e.preventDefault();

    const id = e.target.getAttribute("href").slice(1);

    const element = document.getElementById(id);
    const fixNav = navBar.classList.contains("fix-nav");
    let position = element.offsetTop - navHeight;

    window.scrollTo({
      top: position,
      left: 0,
    });

    navBar.classList.remove("show");
    menu.classList.remove("show");
    document.body.classList.remove("show");
  });
});
gsap.from(".cont-link", { opacity: 0, duration: 1, delay: 1, y: -45 });
gsap.from(".logo1", { opacity: 0, duration: 1, delay: 1, y: -10 });
gsap.from(".scroll-link", { opacity: 0, duration: 1, delay: 1.2, y: -45 });
gsap.from(".hamburger", { opacity: 0, duration: 1, delay: 1.2, x: 20 });
gsap.from(".special_01", { opacity: 0, duration: 1, delay: 2.5, x: -200 });
gsap.from(".banner-content h2", { opacity: 0, duration: 1, delay: 2, y: -50 });
gsap.from(".banner-content h1", {
  opacity: 0,
  duration: 1,
  delay: 2.5,
  y: -45,
});
gsap.from(".banner-content a", { opacity: 0, duration: 1, delay: 3.5, y: 50 });
