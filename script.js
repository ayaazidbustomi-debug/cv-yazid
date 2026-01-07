// Inisialisasi AOS (animasi saat scroll)
document.addEventListener("DOMContentLoaded", () => {
  AOS.init({
    duration: 900,
    easing: "ease-out-quart",
    once: true,
    offset: 60,
  });
});

// Loading screen: sembunyikan setelah halaman siap
window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  setTimeout(() => loader.classList.add("hide"), 500);
});

// Typing animation: teks berganti (Web Developer | UI Designer | Frontend Enthusiast)
(function typingEffect() {
  const el = document.getElementById("typing");
  const roles = ["Web Developer", "UI Designer", "Frontend Enthusiast"];
  let idx = 0, pos = 0, del = false;

  function tick() {
    const text = roles[idx];
    if (!del) {
      pos++;
      el.textContent = text.slice(0, pos);
      if (pos === text.length) {
        del = true;
        setTimeout(tick, 1200);
        return;
      }
    } else {
      pos--;
      el.textContent = text.slice(0, pos);
      if (pos === 0) {
        del = false;
        idx = (idx + 1) % roles.length;
      }
    }
    const speed = del ? 40 : 70;
    setTimeout(tick, speed);
  }
  tick();
})();

// Scrollspy aktif: update link navbar sesuai section yang terlihat
(function setupScrollSpy() {
  const sections = Array.from(document.querySelectorAll("section[id]"));
  const links = Array.from(document.querySelectorAll(".navbar .nav-link"));
  const map = new Map(sections.map(s => [s.id, s]));

  function onScroll() {
    const scrollPos = window.scrollY + 100;
    let currentId = "home";
    for (const s of sections) {
      if (s.offsetTop <= scrollPos) currentId = s.id;
    }
    links.forEach(l => l.classList.toggle("active", l.getAttribute("href") === `#${currentId}`));
  }

  document.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
})();

// Smooth scroll dengan kompensasi tinggi navbar
(function smoothAnchors() {
  const links = document.querySelectorAll('a[href^="#"]');
  const navHeight = () => document.querySelector(".glass-nav")?.offsetHeight || 70;
  links.forEach(link => {
    link.addEventListener("click", (e) => {
      const href = link.getAttribute("href");
      if (!href || href === "#") return;
      const target = document.querySelector(href);
      if (!target) return;
      e.preventDefault();
      const top = target.getBoundingClientRect().top + window.scrollY - navHeight() + 6;
      window.scrollTo({ top, behavior: "smooth" });
    });
  });
})();

// Animasi progress bar skills ketika masuk viewport
(function animateSkills() {
  const fills = document.querySelectorAll(".skill-fill");
  const io = new IntersectionObserver((entries) => {
    entries.forEach(({ isIntersecting, target }) => {
      const percent = target.getAttribute("data-percent");
      if (isIntersecting) {
        requestAnimationFrame(() => { target.style.width = percent + "%"; });
      }
    });
  }, { threshold: 0.4 });
  fills.forEach(f => io.observe(f));
})();

// Tilt effect dinonaktifkan untuk tampilan lebih simpel

// Form contact: simulasi submit sukses
(function contactForm() {
  const form = document.getElementById("contactForm");
  if (!form) return;
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("name")?.value || "";
    const email = document.getElementById("email")?.value || "";
    const message = document.getElementById("message")?.value || "";
    console.log({ name, email, message });
    alert("Terima kasih! Pesan Anda telah terkirim.");
    form.reset();
  });
})();
