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
    disableOnInteraction: false,
  },
  breakpoints: {
    512: {
      slidesPerView: 1,
    },
    640: {
      slidesPerView: 2,
    },
    896: {
      slidesPerView: 3,
    },
  },
});

gsap.from(".cont-link", { opacity: 0, duration: 1, delay: 1, x: -45 });
gsap.from(".logo1", { opacity: 0, duration: 1, delay: 1, y: -10 });
gsap.from(".scroll-link", { opacity: 0, duration: 1, delay: 1, y: -10 });
gsap.from(".hamburger", { opacity: 0, duration: 1, delay: 1.2, x: 20 });
gsap.from(".glide", { opacity: 0, duration: 2, delay: 1, x: -200 });
gsap.from(".banner-content h2", { opacity: 0, duration: 1, delay: 1, y: -50 });
gsap.from(".banner-content h1", {
  opacity: 0,
  duration: 1,
  delay: 1.5,
  y: -45,
});
gsap.from(".banner-content a", { opacity: 0, duration: 1, delay: 1.5, y: 50 });

gsap.from(".contact", { opacity: 0, duration: 1, delay: 2, y: -50 });
gsap.from(".galleryunit", { opacity: 0, duration: 1, delay: 2, y: -50 });
gsap.from(".heading", { opacity: 0, duration: 1, delay: 1.2, y: -45 });
gsap.from(".row", { opacity: 0, duration: 1, delay: 1.2, x: 20 });
gsap.from(".social-menu", { opacity: 0, duration: 1, delay: 2.5, x: -200 });

gsap.from(".grid-item", { opacity: 0, duration: 1, delay: 1.2, y: -45 });
gsap.from(".top h1", { opacity: 0, duration: 1, delay: 1.2, x: -50 });
gsap.from(".top form", { opacity: 0, duration: 1, delay: 1.2, x: 50 });
gsap.from(".condoinfo", { opacity: 0, duration: 1, delay: 1.2, x: 50 });

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs((slideIndex += n));
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = x.length;
  }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex - 1].style.display = "block";
}
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
