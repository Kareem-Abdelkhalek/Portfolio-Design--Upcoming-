const particlesContainer = document.querySelector(".particles-container");
const particleCount = 50;

function createParticle() {
  const particle = document.createElement("div");
  particle.classList.add("particle");

  // Random starting position
  const startX = Math.random() * 100;
  const drift = (Math.random() - 0.5) * 200;
  const duration = Math.random() * 10 + 10;
  const delay = Math.random() * 5;
  const size = Math.random() * 3 + 1;

  particle.style.left = startX + "%";
  particle.style.width = size + "px";
  particle.style.height = size + "px";
  particle.style.setProperty("--drift", drift + "px");
  particle.style.animationDuration = duration + "s";
  particle.style.animationDelay = delay + "s";

  particlesContainer.appendChild(particle);

  // Remove and recreate particle after animation
  setTimeout(() => {
    particle.remove();
    createParticle();
  }, (duration + delay) * 1000);
}

// Create initial particles
for (let i = 0; i < particleCount; i++) {
  setTimeout(() => createParticle(), i * 100);
}
