// script.js
document.addEventListener('DOMContentLoaded', () => {
  // set year
  document.getElementById('year').textContent = new Date().getFullYear();

  // nav toggle for mobile
  const nav = document.getElementById('mainNav');
  const toggle = document.getElementById('navToggle');
  toggle.addEventListener('click', () => {
    nav.classList.toggle('open');
  });

  // close nav on link click (mobile)
  nav.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => nav.classList.remove('open'));
  });

  // Smooth scroll behaviour for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', e => {
      const target = document.querySelector(link.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({behavior: 'smooth', block: 'start'});
      }
    });
  });

  // Animate skill bars when section visible using IntersectionObserver
  const fills = document.querySelectorAll('.fill');
  const obs = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        fills.forEach(f => {
          const val = getComputedStyle(f).getPropertyValue('--level') || '80%';
          f.style.width = val.trim();
        });
        obs.disconnect(); // only animate once
      }
    });
  }, {threshold: 0.25});

  const resumeSection = document.querySelector('#resume');
  if (resumeSection) obs.observe(resumeSection);
});
