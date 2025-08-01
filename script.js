// FAQ cookie image swap logic
function toggleFaq(faqItem) {
  const answer = faqItem.querySelector('.faq-answer');
  const arrow = faqItem.querySelector('.faq-arrow');
  const cookieImg = faqItem.querySelector('.faq-cookie-img');
  const isOpen = !answer.classList.contains('hidden');
  // Close all other FAQ items
  document.querySelectorAll('.faq-item').forEach(item => {
    if (item !== faqItem) {
      item.querySelector('.faq-answer').classList.add('hidden');
      item.querySelector('.faq-arrow').style.transform = '';
      const img = item.querySelector('.faq-cookie-img');
      if (img) img.src = img.dataset.full;
    }
  });
  if (isOpen) {
    answer.classList.add('hidden');
    arrow.style.transform = '';
    if (cookieImg) cookieImg.src = cookieImg.dataset.full;
  } else {
    answer.classList.remove('hidden');
    arrow.style.transform = 'rotate(180deg)';
    if (cookieImg) cookieImg.src = cookieImg.dataset.bitten;
  }
}
// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Simple fade-in animation on scroll
const elements = document.querySelectorAll('.fade-in');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.2 });

elements.forEach(el => observer.observe(el));

// Mobile menu toggle (if you later add a hamburger menu)
const menuBtn = document.querySelector('#menu-btn');
const navMenu = document.querySelector('#nav-menu');

if (menuBtn && navMenu) {
  menuBtn.addEventListener('click', () => {
    navMenu.classList.toggle('hidden');
  });
}
