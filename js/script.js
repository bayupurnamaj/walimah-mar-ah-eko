// --------------------------scroll Navbar------------------------
var navbar = document.querySelector(".navbar");
var isMouseDown = false;
var startX;
var scrollLeft;

navbar.addEventListener("mousedown", function (e) {
  isMouseDown = true;
  startX = e.pageX - navbar.offsetLeft;
  scrollLeft = navbar.scrollLeft;
});

navbar.addEventListener("mouseleave", function () {
  isMouseDown = false;
});

navbar.addEventListener("mouseup", function () {
  isMouseDown = false;
});

navbar.addEventListener("mousemove", function (e) {
  if (!isMouseDown) return;
  e.preventDefault();
  var x = e.pageX - navbar.offsetLeft;
  var walk = (x - startX) * 3; // adjust scrolling speed here
  navbar.scrollLeft = scrollLeft - walk;
});

var navbar = document.querySelector(".navbar");
var menuItems = document.querySelectorAll(".navbar-nav a");

menuItems.forEach(function (menuItem) {
  menuItem.addEventListener("click", function (e) {
    e.preventDefault();
    var target = e.target.getAttribute("href");
    var targetElement = document.querySelector(target);
    var targetPosition = targetElement.offsetLeft - navbar.offsetLeft;
    navbar.scrollTo({ left: targetPosition, behavior: "smooth" });
  });
});
// -----------------Klik pembukaan--------------------
const pembukaan = document.querySelector(".pembukaan");
const isi = document.querySelector(".isi");
const audio = document.querySelector("#myAudio");
document.querySelector("#buka").onclick = () => {
  pembukaan.classList.add("off");
  isi.classList.remove("isi");
  audio.autoplay = true;
  audio.load();
};
// Audio Autoplay
const play = document.querySelector(".play");
const pause = document.querySelector(".pause");

play.onclick = () => {
  audio.play();
  play.style.display = "none";
  pause.style.display = "block";
};
pause.onclick = () => {
  audio.pause();
  pause.style.display = "none";
  play.style.display = "block";
};

const inputElement = document.querySelector("#myInput");
const copyButton = document.querySelector(".copy-btn");

copyButton.addEventListener("click", function (event) {
  event.preventDefault();
  inputElement.select();
  document.execCommand("copy");
  alert("Teks sudah disalin!");
});
