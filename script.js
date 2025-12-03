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
    header.style.background = 'rgba(24, 24, 27, 0.65)';
    header.style.backdropFilter = 'blur(20px)';
  } else {
    header.style.background = 'rgba(24, 24, 27, 0.65)';
    header.style.backdropFilter = 'blur(20px)';
  }
});

// for button portfolios

document.addEventListener('DOMContentLoaded', () => {
    const orderBtns = document.querySelectorAll('.order-btn');
    const modal = document.getElementById('orderModal');
    const closeBtn = document.querySelector('.modal .close');
    const projectInput = document.getElementById('projectInput');
    const orderForm = document.getElementById('orderForm');

    // باز کردن مودال
    orderBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            projectInput.value = btn.dataset.project;
            modal.style.display = 'block';
        });
    });

    // بستن مودال
    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', (e) => {
        if (e.target === modal) modal.style.display = 'none';
    });

    // ارسال فرم
    orderForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert(`سفارش پروژه "${projectInput.value}" ثبت شد!`);
        orderForm.reset();
        modal.style.display = 'none';
    });
});
