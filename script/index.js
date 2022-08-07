"use strict";

const homePageBtn = document.querySelector(".homepage-button");
homePageBtn.addEventListener("click", function (e) {
  e.preventDefault();
  window.location.pathname = "/home.html";
  console.log(window.location.pathname);
});
