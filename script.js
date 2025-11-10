const links = document.querySelectorAll('.menu-link');
const sections = [...document.querySelectorAll('section')];
const header = document.getElementById('header');

// active link on scroll
const setActive = () => {
  const y = window.scrollY + window.innerHeight / 2 ;
  let current = 'home';
  for (const s of sections) {
    if (y >= s.offsetTop && y < s.offsetTop + s.offsetHeight) {
      current = s.id;
    }
  }
  links.forEach(a => a.classList.toggle('active', a.getAttribute('href') === `#${current}`));
};
window.addEventListener('scroll', setActive);
setActive();

// smooth scroll
links.forEach(a => a.addEventListener('click', e => {
  const target = document.querySelector(a.getAttribute('href'));
  if (target) {
    e.preventDefault();
    window.scrollTo({ top: target.offsetTop - 80, behavior: 'smooth' });
  }
}));

// header scroll effect
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) { 
    header.style.background = 'rgba(9, 9, 11, 0.95)';
    header.style.backdropFilter = 'blur(20px)';
  } else {
    header.style.background = '#09090b';
    header.style.backdropFilter = 'blur(10px)';
  }
});


