// DatingOS Landing Page - Minimal JS for polish

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// Nav background on scroll
const nav = document.querySelector('.nav');
if (nav) {
  const handleScroll = () => {
    nav.style.background = window.scrollY > 50 
      ? 'rgba(13, 17, 23, 0.95)' 
      : 'rgba(13, 17, 23, 0.9)';
  };
  window.addEventListener('scroll', handleScroll, { passive: true });
}
