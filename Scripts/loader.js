window.addEventListener("load", () => {
  const loader = document.querySelector(".loader-wrapper");
  setTimeout(() => {
    loader.classList.add("fade-out");
  }, 1000);
});
