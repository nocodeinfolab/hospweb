// Reveal animations on scroll
function animateOnScroll() {
  const animatedEls = document.querySelectorAll('.animated');
  const triggerMargin = 100;
  animatedEls.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - triggerMargin) {
      el.classList.add('visible');
    }
  });
}

window.addEventListener('scroll', animateOnScroll);
window.addEventListener('DOMContentLoaded', animateOnScroll);

// Smooth scroll for navbar
document.querySelectorAll('.navbar a').forEach(link => {
  link.addEventListener('click', function(e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      window.scrollTo({
        top: target.offsetTop - 75,
        behavior: 'smooth'
      });
    }
  });
});
