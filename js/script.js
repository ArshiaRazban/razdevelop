const links = document.querySelectorAll('.menu-link');
const sections = [...document.querySelectorAll('section')];
const header = document.getElementById('header');

// active link on scroll
const setActive = () => {
    const y = window.scrollY + window.innerHeight / 2;
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
    const githubInput = document.getElementById('githubInput');
    const orderForm = document.getElementById('orderForm');

    // باز کردن مودال + ست پروژه و لینک گیت
    orderBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            projectInput.value = btn.dataset.project;
            githubInput.value = btn.dataset.github || ""; // اگر لینک نبود خالی میشه
            modal.style.display = 'block';
            document.body.style.overflow = 'hidden';
        });
    });

    // بستن مودال
    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    });

    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });

    // ارسال فرم به واتساپ
    orderForm.addEventListener("submit", function (e) {
        e.preventDefault();

        let name = orderForm.querySelector("input[name='name']").value.trim();
        let phone = orderForm.querySelector("input[name='phone']").value.trim();
        let message = orderForm.querySelector("textarea[name='message']").value.trim();
        let project = projectInput.value.trim();
        let github = githubInput.value.trim();

        if (!name || !phone) {
            alert("لطفاً نام و شماره تماس را وارد کنید");
            return;
        }

        let finalMessage =
            "🔰 *سفارش جدید* \n\n" +
            "👤 *نام:* " + name + "\n" +
            "📞 *شماره تماس:* " + phone + "\n" +
            "📌 *پروژه انتخابی:* " + project + "\n" +
            "💻 *لینک GitHub:* " + github + "\n" +
            "📝 *توضیحات:* " + message;

        let encoded = encodeURIComponent(finalMessage);

        let whatsappNumber = "989001721385"; // شماره بدون + و صفر

        let url = `https://wa.me/${whatsappNumber}?text=${encoded}`;

        window.open(url, "_blank");
    });

});


