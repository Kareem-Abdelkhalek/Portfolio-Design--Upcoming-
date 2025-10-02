const themeToggle = document.querySelector(".theme-toggle");
const body = document.body;
const moonIcon = document.querySelector(".moon-icon");
const sunIcon = document.querySelector(".sun-icon");

// Check for saved theme preference
const currentTheme = localStorage.getItem("theme");
if (currentTheme === "light") {
  body.classList.add("light-mode");
  moonIcon.style.display = "none";
  sunIcon.style.display = "block";
}

themeToggle.addEventListener("click", () => {
  body.classList.toggle("light-mode");

  if (body.classList.contains("light-mode")) {
    localStorage.setItem("theme", "light");
    moonIcon.style.display = "none";
    sunIcon.style.display = "block";
  } else {
    localStorage.setItem("theme", "dark");
    moonIcon.style.display = "block";
    sunIcon.style.display = "none";
  }
});
