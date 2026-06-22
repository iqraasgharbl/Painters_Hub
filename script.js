// ===== NAVBAR SCROLL EFFECT =====
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

const ticker = document.querySelector('.ticker-wrap');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
  ticker.style.top = navbar.offsetHeight + 'px';
});

// On page load bhi set karo
window.addEventListener('load', () => {
  ticker.style.top = navbar.offsetHeight + 'px';
});

// ===== MOBILE MENU =====
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');

hamburger.addEventListener('click', () => {
  mobileMenu.classList.toggle('open');
});

function closeMobileMenu() {
  mobileMenu.classList.remove('open');
}

// ===== CONTACT FORM =====
const form = document.getElementById('contactForm');
const formSuccess = document.getElementById('formSuccess');

form.addEventListener('submit', function(e) {
  e.preventDefault();

  const btn = form.querySelector('button[type="submit"]');
  btn.textContent = 'Sending...';
  btn.disabled = true;

  emailjs.sendForm('service_4lj2ois', 'template_stui1b9', this)
    .then(() => {
      form.reset();
      btn.textContent = 'Send Message';
      btn.disabled = false;
      formSuccess.style.display = 'block';
      setTimeout(() => {
        formSuccess.style.display = 'none';
      }, 5000);
    })
    .catch((err) => {
      console.error('EmailJS error:', err);
      btn.textContent = 'Send Message';
      btn.disabled = false;
      alert('Something went wrong. Please try again!');
    });
});

// ===== SCROLL REVEAL =====
const reveals = document.querySelectorAll('.service-card, .gallery-item, .stat, .highlight');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.1 });

reveals.forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  observer.observe(el);
});


