import "../style.css";
import "../header1.scss";
import "../main.scss";
import "../header2.scss";
import "../menu2.scss";
import "../title.scss";
import "../sidemenu.scss";
import "../section.scss";
import "../software.scss";
import "../softwaretable.scss";
import "../services.scss";
import "../softwaretable2.scss";
import "../sidebar.scss";
import "../price.scss";
import "../aboutprice.scss";
import "../pricetable.scss";
import "../footer.scss";
import "../modalcall.scss";
import "../modalchat.scss";
import "../wrapperservices.scss";

const swiper1 = new Swiper(".swiper-1", {
  loop: true,
  slidesPerView: 1.25,
  breakpoints: {
    400: {
      slidesPerView: 1.4,
    },
    450: {
      slidesPerView: 1.6,
    },
    500: {
      slidesPerView: 1.8,
    },
    550: {
      slidesPerView: 1.9,
    },
    600: {
      slidesPerView: 2.2,
    },
    680: {
      slidesPerView: 2.4,
    },
    720: {
      slidesPerView: 2.8,
    },
  },
  pagination: {
    el: ".swiper-pagination-1",
    clickable: true,
  },
});

const swiper2 = new Swiper(".swiper-2", {
  loop: true,
  slidesPerView: 1.25,
  breakpoints: {
    400: {
      slidesPerView: 1.4,
    },
    450: {
      slidesPerView: 1.6,
    },
    500: {
      slidesPerView: 1.8,
    },
    550: {
      slidesPerView: 1.9,
    },
    600: {
      slidesPerView: 2.2,
    },
    680: {
      slidesPerView: 2.4,
    },
    720: {
      slidesPerView: 2.8,
    },
  },
  pagination: {
    el: ".swiper-pagination-2",
    clickable: true,
  },
});

const swiper3 = new Swiper(".swiper-3", {
  loop: true,
  slidesPerView: 1.2,
  breakpoints: {
    400: {
      slidesPerView: 1.4,
    },
    450: {
      slidesPerView: 1.6,
    },
    500: {
      slidesPerView: 1.8,
    },
    550: {
      slidesPerView: 1.9,
    },
    600: {
      slidesPerView: 2.2,
    },
    680: {
      slidesPerView: 2.4,
    },
    720: {
      slidesPerView: 2.8,
    },
  },
  pagination: {
    el: ".swiper-pagination-3",
    clickable: true,
  },
});

const button = document.querySelector(".show-more__text");
const wrapperBrands = document.querySelector(".software-table");
const arrow = document.querySelector(".show-more__picture");
const wrapperServices = document.querySelector(".software-table-2");
const button2 = document.querySelector(".show-more-2__text");

button.addEventListener("click", function () {
  wrapperBrands.classList.toggle("software-table-height");

  arrow.classList.toggle("show-more__picture-rotate");
  if (button.textContent === "Показать все") {
    button.innerHTML = "Скрыть";
  } else {
    button.innerHTML = "Показать все";
  }
  if (window.innerWidth >= 1120) {
    wrapperBrands.classList.toggle("software-table-height-laptop");
  }
});

button2.addEventListener("click", function () {
  wrapperServices.classList.toggle("software-table-height-2");

  arrow.classList.toggle("show-more__picture-rotate");
  if (button2.textContent === "Показать все") {
    button2.innerHTML = "Скрыть";
  } else {
    button2.innerHTML = "Показать все";
  }
  if (window.innerWidth >= 1120) {
    wrapperServices.classList.toggle("software-table-height-laptop-2");
  }
});

const openBtn = document.querySelector(".icon__call");
const modalOverlay = document.querySelector(".modal-call");
const closeBtn = document.querySelector(".modal-call__button");
const openBtn2 = document.querySelector(".contacts-icon__call");
const wrapper = document.querySelector(".wrapper__sidebar-wrapper");

openBtn.addEventListener("click", () => {
  modalOverlay.classList.add("active");
  background.style.opacity = "10%";
  wrapper.style.opacity = "10%";
});

openBtn2.addEventListener("click", () => {
  modalOverlay.classList.add("active");
  background.style.opacity = "10%";
  wrapper.style.opacity = "10%";
});

modalOverlay.addEventListener("click", (event) => {
  if (event.target === modalOverlay) {
    modalOverlay.classList.remove("active");
  }
});
closeBtn.addEventListener("click", () => {
  modalOverlay.classList.remove("active");
  background.style.opacity = "1";
  wrapper.style.opacity = "1";
});

modalOverlay.addEventListener("click", (e) => {
  if (e.target === modalOverlay) {
    modalOverlay.classList.remove("active");
    background.style.opacity = "1";
    wrapper.style.opacity = "1";
  }
});

const openChat = document.querySelector(".icon__chat");
const modalOverlayChat = document.querySelector(".modal-chat");
const closeChat = document.querySelector(".modal-chat__button");
const openChat2 = document.querySelector(".contacts-icon__chat");

openChat.addEventListener("click", () => {
  modalOverlayChat.classList.add("active-2");
  background.style.opacity = "10%";
});

openChat2.addEventListener("click", () => {
  modalOverlayChat.classList.add("active-2");
  background.style.opacity = "10%";
  wrapper.style.opacity = "10%";
});

closeChat.addEventListener("click", () => {
  modalOverlayChat.classList.remove("active-2");
  background.style.opacity = "1";
  wrapper.style.opacity = "1";
});

modalOverlayChat.addEventListener("click", (e) => {
  if (e.target === modalOverlayChat) {
    modalOverlayChat.classList.remove("active-2");
    background.style.opacity = "1";
    wrapper.style.opacity = "1";
  }
});


const openSideBar = document.querySelector(".icon__burger");
const sideBar = document.querySelector(".wrapper__sidebar");
const closeSideBar = document.querySelector(".image__close");
const background = document.querySelector(".wrapper__services");

openSideBar.addEventListener("click", () => {
  sideBar.classList.add("open");
  background.style.opacity = "10%";
});
closeSideBar.addEventListener("click", () => {
  sideBar.classList.remove("open");
  background.style.opacity = "1";
});
sideBar.addEventListener("click", (e) => {
  if (e.target === sideBar) {
    sideBar.classList.remove("open");
    background.style.opacity = "1";
  }
});