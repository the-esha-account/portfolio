// Mobile nav toggle
const burger = document.getElementById('burger');
const nav = document.querySelector('.nav');

if (burger && nav) {
  burger.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('is-open');
    burger.setAttribute('aria-expanded', String(isOpen));
  });

// Close menu after tapping a link (mobile)
nav.querySelectorAll('.nav__links a, .nav__cta').forEach((link) => {
  link.addEventListener('click', () => {
    nav.classList.remove('is-open');
    burger.setAttribute('aria-expanded', 'false');
  });
});

// Footer year
const yearEl = document.getElementById('year');
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

// Update URL hash based on which section is in view
const sections = document.querySelectorAll('section[id]');

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      if (entry.target.id === 'home') {
        history.replaceState(null, '', window.location.pathname);
      } else {
        history.replaceState(null, '', `#${entry.target.id}`);
      }
    }
  });
}, {
  rootMargin: '-50% 0px -50% 0px'
});

sections.forEach((section) => observer.observe(section));
