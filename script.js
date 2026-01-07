// DOM Elements
const menuToggle = document.getElementById('menuToggle');
const navMenu = document.querySelector('.nav-menu ul');
const navLinks = document.querySelectorAll('.nav-link');
const backToTopBtn = document.getElementById('backToTop');
const skillLevelBars = document.querySelectorAll('.level-bar');
const sections = document.querySelectorAll('section');
const currentYear = document.querySelector('.footer p:first-child');

// Mobile Menu Toggle
menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('show');
    menuToggle.innerHTML = navMenu.classList.contains('show') 
        ? '<i class="fas fa-times"></i>' 
        : '<i class="fas fa-bars"></i>';
});

// Close mobile menu when clicking a nav link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('show');
        menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
    });
});

// Back to Top Button
window.addEventListener('scroll', () => {
    // Show/hide back to top button
    if (window.scrollY > 300) {
        backToTopBtn.classList.add('show');
    } else {
        backToTopBtn.classList.remove('show');
    }
    
    // Update active nav link based on scroll position
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Back to Top functionality
backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Animate skill level bars on scroll
function animateSkillBars() {
    skillLevelBars.forEach(bar => {
        const level = bar.getAttribute('data-level');
        const isInViewport = isElementInViewport(bar);
        
        if (isInViewport && !bar.hasAttribute('data-animated')) {
            bar.style.width = `${level}%`;
            bar.setAttribute('data-animated', 'true');
        }
    });
}

// Check if element is in viewport
function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.8 &&
        rect.bottom >= 0
    );
}

// Animate skill bars on load and scroll
window.addEventListener('load', animateSkillBars);
window.addEventListener('scroll', animateSkillBars);

// Add current year to footer
if (currentYear) {
    const year = new Date().getFullYear();
    currentYear.innerHTML = `&copy; ${year} Aya Azid Bustomi. Semua hak dilindungi.`;
}

// Add hover effect to project cards
const projectCards = document.querySelectorAll('.project-card');
projectCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});

// Add scroll reveal animation for sections
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Apply fade-in animation to sections
sections.forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(section);
});

// Form submission simulation (if we had a form)
const contactButtons = document.querySelectorAll('.btn.primary-btn');
contactButtons.forEach(button => {
    button.addEventListener('click', function(e) {
        if (this.getAttribute('href') === '#contact') {
            e.preventDefault();
            document.getElementById('contact').scrollIntoView({
               
