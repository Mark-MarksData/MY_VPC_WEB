
// Intersection Observer — fade-in + stagger
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.fade-in').forEach((el) => observer.observe(el));

// Mobile hamburger toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
if (hamburger && navLinks) {
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('open');
  });
  // Close menu when a link is tapped
  navLinks.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('active');
      navLinks.classList.remove('open');
    });
  });
}

// Parallax-lite on header hero image
const hero = document.querySelector('.hero-img');
if (hero) {
  window.addEventListener('scroll', () => {
    const y = window.scrollY;
    if (y < 800) {
      hero.style.transform = 'translateY(' + y * 0.15 + 'px)';
    }
  }, { passive: true });
}

// Tilt effect on cards (mouse only)
document.querySelectorAll('.card').forEach((card) => {
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    card.style.transform = 'translateY(-8px) rotateY(' + x * 8 + 'deg) rotateX(' + -y * 8 + 'deg)';
  });
  card.addEventListener('mouseleave', () => {
    card.style.transform = '';
  });
});
