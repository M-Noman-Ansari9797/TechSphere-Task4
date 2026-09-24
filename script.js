// ============ Mobile nav toggle ============
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

navToggle.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('is-open');
  navToggle.classList.toggle('is-open', isOpen);
  navToggle.setAttribute('aria-expanded', String(isOpen));
});

// Close mobile menu after tapping a link
navLinks.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('is-open');
    navToggle.classList.remove('is-open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

// ============ Header shadow on scroll ============
const siteHeader = document.getElementById('siteHeader');
window.addEventListener('scroll', () => {
  siteHeader.classList.toggle('is-scrolled', window.scrollY > 8);
});

// ============ Contact form validation (front-end only, no backend) ============
const form = document.getElementById('contactForm');
const formSuccess = document.getElementById('formSuccess');

const validators = {
  fullName: (value) => value.trim().length >= 2 || 'Please enter your full name.',
  email: (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) || 'Please enter a valid email address.',
  phone: (value) => /^[0-9+\-\s()]{7,15}$/.test(value) || 'Please enter a valid phone number.',
  message: (value) => value.trim().length >= 10 || 'Please add a few details about your order.',
};

function showError(fieldName, message) {
  const errorEl = form.querySelector(`[data-error-for="${fieldName}"]`);
  if (errorEl) errorEl.textContent = message || '';
}

form.addEventListener('submit', (event) => {
  event.preventDefault();
  let isValid = true;

  Object.keys(validators).forEach((fieldName) => {
    const field = form.elements[fieldName];
    const result = validators[fieldName](field.value);
    if (result === true) {
      showError(fieldName, '');
    } else {
      showError(fieldName, result);
      isValid = false;
    }
  });

  if (isValid) {
    form.style.display = 'none';
    formSuccess.classList.add('is-visible');
  }
});
