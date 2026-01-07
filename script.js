/* =====================
   LOADER
===================== */
window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  loader.style.opacity = "0";
  setTimeout(() => loader.style.display = "none", 500);
});

/* =====================
   AOS INIT
===================== */
AOS.init({
  duration: 900,
  once: true
});

/* =====================
   TYPING EFFECT
===================== */
const texts = [
  "Web Developer",
  "UI/UX Designer",
  "Mahasiswa Informatika"
];

let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type() {
  if (count === texts.length) {
    count = 0;
  }

  currentText = texts[count];
  letter = currentText.slice(0, ++index);

  const typingEl = document.getElementById("typing");
  if (typingEl) typingEl.textContent = letter;

  if (letter.length === currentText.length) {
    setTimeout(() => count++, 1500);
    index = 0;
  }

  setTimeout(type, 120);
})();

/* =====================
   ACTIVE NAV ON SCROLL
===================== */
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 120;
    if (pageYOffset >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});
