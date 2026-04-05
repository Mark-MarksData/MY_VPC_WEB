
// Intersection Observer — fade-in + stagger
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.fade-in').forEach((el) => observer.observe(el));

// Mobile hamburger toggle with aria-expanded
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
if (hamburger && navLinks) {
  hamburger.addEventListener('click', () => {
    const isOpen = hamburger.classList.toggle('active');
    navLinks.classList.toggle('open');
    hamburger.setAttribute('aria-expanded', isOpen);
  });
  // Close menu when a link is tapped
  navLinks.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('active');
      navLinks.classList.remove('open');
      hamburger.setAttribute('aria-expanded', 'false');
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

// Back-to-top button
const backToTop = document.querySelector('.back-to-top');
if (backToTop) {
  window.addEventListener('scroll', () => {
    backToTop.classList.toggle('visible', window.scrollY > 400);
  }, { passive: true });
  backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// Contact form — inline success message
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    contactForm.style.display = 'none';
    const successMsg = document.querySelector('.form-success');
    if (successMsg) successMsg.classList.add('show');
  });
}
