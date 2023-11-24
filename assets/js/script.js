"use strict";

/**
 * PRELOAD
 *
 * loading will be end after document is loaded
 */

const preloader = document.querySelector("[data-preaload]");

const chatBot = document.querySelector(".chatBot");
const chatMain = document.querySelector(".chatMain");

chatMain.style.height = "0px";
chatMain.style.width = "0px";
chatMain.style.visibility = "hidden";
var state = "Closed";

//Remove the pre-loader when the page has loaded
window.addEventListener("load", () => {
  preloader.classList.add("loaded");
  document.body.classList.add("loaded");
});

/**
 * add event on element
 */

const addEventOnElem = function (elem, type, callback) {
  if (elem.length > 1) {
    for (let i = 0; i < elem.length; i++) {
      elem[i].addEventListener(type, callback);
    }
  } else {
    elem.addEventListener(type, callback);
  }
};

/**
 * navbar toggle
 */

const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const navLinks = document.querySelectorAll("[data-nav-link]");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
};

addEventOnElem(navTogglers, "click", toggleNavbar);

const closeNavbar = function () {
  navbar.classList.remove("active");
};

addEventOnElem(navLinks, "click", closeNavbar);

/**
 * header & back top btn active
 */

const header = document.querySelector("[data-header]");
// const backTopBtn = document.querySelector("[data-back-top-btn]");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 100) {
    header.classList.add("active");
    // backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    // backTopBtn.classList.remove("active");
  }
});

chatBot.addEventListener("click", () => {
  chatBot.classList.remove("animate");
  if (state == "Closed") {
    state = "Opened";
    setTimeout(() => {
      chatMain.style.visibility = "visible";
      // chatMain.style.height = "31em";
      chatMain.style.height = "";
      chatMain.style.width = "";
      // chatMain.src = "http://127.0.0.1:5500/frontend/";
      chatMain.src = "https://fitness-bot.netlify.app/";
    }, 100);
  } else {
    state = "Closed";
    setTimeout(() => {
      chatMain.style.visibility = "hidden";
      chatMain.style.height = "0px";
      chatMain.style.width = "0px";
      chatMain.src = "";
    }, 100);
  }
});
