// Page Loader
window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  if (loader) loader.style.display = "none";
});

//Scroll Reveal Sections
const sections = document.querySelectorAll(".section");
function revealSections() {
  const triggerBottom = window.innerHeight * 0.85;
  sections.forEach(section => {
    if (section.getBoundingClientRect().top < triggerBottom) {
      section.classList.add("visible");
    }
  });
}
window.addEventListener("scroll", revealSections);
window.addEventListener("load", revealSections);

//Scroll To Top Button
const scrollBtn = document.createElement("button");
scrollBtn.innerHTML = "⬆";
scrollBtn.id = "scrollTopBtn";
document.body.appendChild(scrollBtn);

scrollBtn.style.position = "fixed";
scrollBtn.style.bottom = "25px";
scrollBtn.style.right = "25px";
scrollBtn.style.padding = "10px 14px";
scrollBtn.style.fontSize = "1.2rem";
scrollBtn.style.background = "#4aa3ff";
scrollBtn.style.border = "none";
scrollBtn.style.borderRadius = "50%";
scrollBtn.style.color = "#fff";
scrollBtn.style.cursor = "pointer";
scrollBtn.style.display = "none";
scrollBtn.style.zIndex = "1000";

window.addEventListener("scroll", () => {
  scrollBtn.style.display = window.scrollY > 300 ? "block" : "none";
});
scrollBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

//Typing Effect
const typedText = document.querySelector(".type-effect");
const titles = ["Front-End Developer", "CS Student"];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
  const current = titles[wordIndex];
  const displayText = current.substring(0, charIndex);
  if (typedText) typedText.textContent = displayText;

  if (!isDeleting && charIndex < current.length) {
    charIndex++;
    setTimeout(typeEffect, 120);
  } else if (isDeleting && charIndex > 0) {
    charIndex--;
    setTimeout(typeEffect, 60);
  } else {
    isDeleting = !isDeleting;
    if (!isDeleting) wordIndex = (wordIndex + 1) % titles.length;
    setTimeout(typeEffect, 1000);
  }
}
document.addEventListener("DOMContentLoaded", typeEffect);

const toggleBtn = document.createElement("button");
toggleBtn.innerHTML = "🌙";
toggleBtn.id = "modeToggle";
document.body.appendChild(toggleBtn);

toggleBtn.style.position = "fixed";
toggleBtn.style.top = "20px";
toggleBtn.style.right = "25px";
toggleBtn.style.padding = "6px 10px";
toggleBtn.style.borderRadius = "8px";
toggleBtn.style.border = "none";
toggleBtn.style.background = "#1f1f33";
toggleBtn.style.color = "#fff";
toggleBtn.style.zIndex = "1000";
toggleBtn.style.cursor = "pointer";
toggleBtn.style.boxShadow = "0 2px 6px rgba(0,0,0,0.3)";

let dark = true;
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("light-mode");
  dark = !dark;
  toggleBtn.innerHTML = dark ? "🌙" : "☀️";

  const heroName = document.querySelector(".hero-text h1");
  const heroTag = document.querySelector(".hero-text .type-effect");
  if (heroName && heroTag) {
    heroName.style.color = dark ? "#f0f0f0" : "#111";
    heroTag.style.color = dark ? "#ccc" : "#222";
  }
});