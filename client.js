const open = document.getElementById("open");
const close = document.getElementById("close");
const menu = document.getElementById("menu");
const reviewscontainer = document.getElementById("reviewscontainer");
const slide = document.getElementById("slide");
const bcircles = document.getElementsByClassName("bcircle");
const inbox = document.getElementById("inbox");
const btn = document.getElementById("btn");
const alert = document.querySelector(".alert");
const year = document.getElementById("year");
var count = 0;
var swipeStart;
var swipeEnd;

year.innerHTML = new Date().getFullYear().toString();

open.addEventListener("click", function() {
  this.style.display = "none";
  //menu.style.display = "flex";
  menu.style.transform = "translateX(0)";
  menu.style.opacity = "1";
});

close.addEventListener("click", function() {
  //menu.style.display = "none";
  menu.style.transform = "translateX(-100%)";
  menu.style.opacity = "0";
  open.style.display = "block";
});

reviewscontainer.addEventListener("touchstart", function(event) {
  swipeStart = parseInt(event.clientX);
});
reviewscontainer.addEventListener("touchend", function(event) {
  swipeEnd = parseInt(event.clientX);
  swipeEnd > swipeStart ? count++ : count--;
  if(count > 3) {
    count = 0;
  }else if (count < 0) {
    count = 3;
  }
  Array.from(slide.children).forEach(elem => {
    elem.classList.remove("active");
  });
  slide.children[count].classList.add("active");
});
const emailRegExp = /[a-z0-9]{3,}@[a-z]{3,}\.[a-z]{2,}/;
inbox.addEventListener("input", function() {
  alert.style.display = "none";
});

btn.addEventListener("click", function(event) {
  event.preventDefault();
  if(inbox.value == "" || inbox.value.match(/\s+/) || !emailRegExp.test(inbox.value)) {
    alert.innerHtml = "Please enter a valid email";
    alert.style.display = "block";
  }
});
