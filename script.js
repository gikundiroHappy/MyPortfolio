let nav = document.querySelector(".nav-bar");
let link = document.querySelector(".nav-list");
let lo = document.querySelector("li");

window.addEventListener("scroll", function () {
  if (window.pageYOffset > 5) {
    nav.classList.add("scrolled");
    nav.backgroudColor = "grey";
    link.color = "white";
  } else {
    nav.classList.remove("scrolled");
    nav.backgroudColor = "none";
    link.color = "black";
  }
});
