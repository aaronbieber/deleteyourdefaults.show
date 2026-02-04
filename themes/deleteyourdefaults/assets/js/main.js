// Close mobile menu when clicking outside
document.addEventListener('click', function(e) {
  const nav = document.querySelector('.site-nav');
  const toggle = document.querySelector('.menu-toggle');
  if (nav && toggle && !nav.contains(e.target) && !toggle.contains(e.target)) {
    nav.classList.remove('open');
  }
});
