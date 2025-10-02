window.addEventListener("load", () => {
  const subtitle = document.querySelector(".hero-subtitle");
  const text = "BUILDING DIGITAL EXPERIENCES";
  subtitle.textContent = "";

  let index = 0;

  setTimeout(() => {
    const typeInterval = setInterval(() => {
      if (index < text.length) {
        subtitle.textContent += text.charAt(index);
        index++;
      } else {
        clearInterval(typeInterval);
        subtitle.classList.add("typing-complete");
      }
    }, 80);
  }, 1800);
});
