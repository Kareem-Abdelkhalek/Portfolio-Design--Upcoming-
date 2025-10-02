const modal = document.getElementById("projectModal");
const modalClose = document.getElementById("modalClose");
const modalOverlay = document.querySelector(".modal-overlay");
const projectCards = document.querySelectorAll(".project-card");

const projectData = {
  portfolio: {
    title: "PORTFOLIO WEBSITE",
    category: "WEB APP",
    description:
      "A modern, fully responsive portfolio website built with cutting-edge web technologies. Features smooth animations, dark/light mode toggle, and optimized performance. Showcases my work and skills in an elegant, minimalist design.",
    tech: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
    liveLink: "#",
    githubLink: "https://github.com/Kareem-Abdelkhalek",
  },
  landing: {
    title: "LANDING PAGE",
    category: "MARKETING SITE",
    description:
      "High-converting product landing page with stunning animations and interactive elements. Built to capture attention and drive user engagement. Optimized for conversions with clear call-to-action buttons and compelling copy.",
    tech: ["HTML5", "CSS3", "JavaScript", "Animation"],
    liveLink: "#",
    githubLink: "https://github.com/Kareem-Abdelkhalek",
  },
  dashboard: {
    title: "ANALYTICS DASHBOARD",
    category: "WEB APP",
    description:
      "Dark-themed analytics dashboard with real-time data visualization. Features interactive charts, customizable widgets, and responsive design. Built for monitoring key metrics and making data-driven decisions.",
    tech: ["React", "Chart.js", "CSS3", "JavaScript"],
    liveLink: "#",
    githubLink: "https://github.com/Kareem-Abdelkhalek",
  },
  business: {
    title: "BUSINESS WEBSITE",
    category: "CORPORATE SITE",
    description:
      "Professional corporate website for a modern business. Clean design with focus on user experience and brand identity. Includes service pages, contact forms, and portfolio showcase.",
    tech: ["HTML5", "CSS3", "JavaScript", "Responsive"],
    liveLink: "#",
    githubLink: "https://github.com/Kareem-Abdelkhalek",
  },
};

projectCards.forEach((card) => {
  card.addEventListener("click", (e) => {
    if (e.target.classList.contains("project-link")) return;

    const projectType = card
      .querySelector(".project-title")
      .textContent.toLowerCase()
      .split(" ")[0];
    const data = projectData[projectType] || projectData.portfolio;

    document.getElementById("modalTitle").textContent = data.title;
    document.getElementById("modalCategory").textContent = data.category;
    document.getElementById("modalDescription").textContent = data.description;
    document.getElementById("modalLiveLink").href = data.liveLink;
    document.getElementById("modalGithubLink").href = data.githubLink;

    const techList = document.getElementById("modalTechList");
    techList.innerHTML = "";
    data.tech.forEach((tech) => {
      const span = document.createElement("span");
      span.className = "modal-tech-item";
      span.textContent = tech;
      techList.appendChild(span);
    });

    modal.classList.add("active");
    document.body.style.overflow = "hidden";
  });
});

modalClose.addEventListener("click", () => {
  modal.classList.remove("active");
  document.body.style.overflow = "";
});

modalOverlay.addEventListener("click", () => {
  modal.classList.remove("active");
  document.body.style.overflow = "";
});
