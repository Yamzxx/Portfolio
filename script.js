'use strict';

// Theme switching: remember the visitor's choice for the current browser.
const themeToggle = document.querySelector('#themeToggle');
const themeIcon = document.querySelector('#themeIcon');
const savedTheme = localStorage.getItem('portfolio-theme');
if (savedTheme === 'dark') applyTheme('dark');

themeToggle.addEventListener('click', () => {
  const nextTheme = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
  applyTheme(nextTheme);
  localStorage.setItem('portfolio-theme', nextTheme);
});

function applyTheme(theme) {
  if (theme === 'dark') {
    document.documentElement.dataset.theme = 'dark';
    themeIcon.textContent = '☀';
    themeToggle.setAttribute('aria-label', 'Switch to light theme');
    themeToggle.title = 'Switch to light theme';
  } else {
    delete document.documentElement.dataset.theme;
    themeIcon.textContent = '☾';
    themeToggle.setAttribute('aria-label', 'Switch to dark theme');
    themeToggle.title = 'Switch to dark theme';
  }
}

// Project filtering uses each card's data-category value.
const filterButtons = document.querySelectorAll('.filter-btn');
const projectItems = document.querySelectorAll('.project-item');
const noProjects = document.querySelector('#noProjects');

filterButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const selectedCategory = button.dataset.filter;
    let visibleCount = 0;

    filterButtons.forEach((item) => {
      const isSelected = item === button;
      item.classList.toggle('active', isSelected);
      item.setAttribute('aria-pressed', String(isSelected));
    });

    projectItems.forEach((project) => {
      const shouldShow = selectedCategory === 'all' || project.dataset.category === selectedCategory;
      project.hidden = !shouldShow;
      if (shouldShow) visibleCount += 1;
    });
    noProjects.hidden = visibleCount !== 0;
  });
});

// Client-side form validation. This demo does not send data to a server.
const contactForm = document.querySelector('#contactForm');
const formMessage = document.querySelector('#formMessage');
const emailInput = document.querySelector('#email');

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

contactForm.addEventListener('submit', (event) => {
  event.preventDefault();
  formMessage.textContent = '';
  formMessage.className = 'form-status mt-3';

  const nameInput = document.querySelector('#name');
  const subjectInput = document.querySelector('#subject');
  const messageInput = document.querySelector('#message');
  const fields = [nameInput, emailInput, subjectInput, messageInput];

  fields.forEach((field) => field.classList.remove('is-invalid', 'is-valid'));
  let isFormValid = true;

  if (nameInput.value.trim().length < 2) {
    nameInput.classList.add('is-invalid');
    isFormValid = false;
  } else nameInput.classList.add('is-valid');

  if (!isValidEmail(emailInput.value.trim())) {
    emailInput.classList.add('is-invalid');
    isFormValid = false;
  } else emailInput.classList.add('is-valid');

  if (!subjectInput.value) {
    subjectInput.classList.add('is-invalid');
    isFormValid = false;
  } else subjectInput.classList.add('is-valid');

  if (messageInput.value.trim().length < 10) {
    messageInput.classList.add('is-invalid');
    isFormValid = false;
  } else messageInput.classList.add('is-valid');

  if (isFormValid) {
    formMessage.textContent = `Thanks, ${nameInput.value.trim()}! Your form passed validation. This demo does not send messages yet.`;
    formMessage.classList.add('success');
  } else {
    formMessage.textContent = 'Please review the highlighted fields and try again.';
    formMessage.classList.add('error');
    const firstInvalidField = contactForm.querySelector('.is-invalid');
    if (firstInvalidField) firstInvalidField.focus();
  }
});

// Clear a field's error state as the visitor corrects it.
contactForm.querySelectorAll('input, select, textarea').forEach((field) => {
  field.addEventListener('input', () => {
    if (field.classList.contains('is-invalid')) {
      const valid = field.id === 'email' ? isValidEmail(field.value.trim())
        : field.id === 'name' ? field.value.trim().length >= 2
        : field.id === 'message' ? field.value.trim().length >= 10
        : Boolean(field.value);
      if (valid) {
        field.classList.remove('is-invalid');
        field.classList.add('is-valid');
      }
    }
  });
});

document.querySelector('#year').textContent = new Date().getFullYear();
