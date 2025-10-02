const hamburger = document.getElementById("hamburger");
const nav = document.getElementById("nav");

hamburger.addEventListener("click", () => {
  nav.classList.toggle("active");
});

document.querySelectorAll("nav a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("active");
  });
});
