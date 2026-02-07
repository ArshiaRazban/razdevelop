// Header scroll effect
const header = document.querySelector('.glass-nav');

if (header) {
  window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 50);
  });
}


window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 50);
});


const links = document.querySelectorAll('.nav-link');

const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('section');

function setActiveLink() {
    const scrollPos = window.scrollY + 120;

    sections.forEach(section => {
        if (
            scrollPos >= section.offsetTop &&
            scrollPos < section.offsetTop + section.offsetHeight
        ) {
            navLinks.forEach(link => {
                link.classList.toggle(
                    'active',
                    link.getAttribute('href') === `#${section.id}`
                );
            });
        }
    });
}

window.addEventListener('scroll', setActiveLink);

const navbarCollapse = document.querySelector('.navbar-collapse');

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (navbarCollapse.classList.contains('show')) {
            new bootstrap.Collapse(navbarCollapse).hide();
        }
    });
});



// Portfolio order modal + WhatsApp
document.addEventListener('DOMContentLoaded', () => {

    const orderBtns = document.querySelectorAll('.order-btn');
    const modal = document.getElementById('orderModal');
    const closeBtn = document.querySelector('.modal .close');
    const projectInput = document.getElementById('projectInput');
    const githubInput = document.getElementById('githubInput');
    const orderForm = document.getElementById('orderForm');

    orderBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            projectInput.value = btn.dataset.project;
            githubInput.value = btn.dataset.github || "";
            modal.style.display = 'block';
            document.body.style.overflow = 'hidden';
        });
    });

    closeBtn.addEventListener('click', closeModal);
    window.addEventListener('click', e => e.target === modal && closeModal());

    function closeModal() {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }

    orderForm.addEventListener("submit", e => {
        e.preventDefault();

        const name = orderForm.name.value.trim();
        const phone = orderForm.phone.value.trim();
        const message = orderForm.message.value.trim();

        if (!name || !phone) {
            alert("لطفاً نام و شماره تماس را وارد کنید");
            return;
        }

        const finalMessage = `
🔰 سفارش جدید

👤 نام: ${name}
📞 تماس: ${phone}
📌 پروژه: ${projectInput.value}
💻 GitHub: ${githubInput.value}
📝 توضیحات: ${message}
        `;

        window.open(
            `https://wa.me/989001721385?text=${encodeURIComponent(finalMessage)}`,
            "_blank"
        );
    });

});

// text messages for contact page

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = contactForm.querySelector('input[type="text"]').value;
  const phone = contactForm.querySelector('input[type="tel"]').value;
  const email = contactForm.querySelector('input[type="email"]').value;
  const message = contactForm.querySelector("textarea").value;

  const text = `
نام: ${name}
شماره تماس: ${phone}
ایمیل: ${email}

پیام:
${message}
  `;

  const whatsappNumber = "989001721385"; // بدون +
  const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;

  window.open(url, "_blank");
});


// login of contact page

contactForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const btn = document.getElementById("submitBtn");
  btn.disabled = true;
  btn.querySelector(".btn-text").classList.add("d-none");
  btn.querySelector(".btn-loader").classList.remove("d-none");

  setTimeout(() => {
    // ارسال به واتساپ
    const name = contactForm.querySelector('input[type="text"]').value;
    const phone = contactForm.querySelector('input[type="tel"]').value;
    const email = contactForm.querySelector('input[type="email"]').value;
    const message = contactForm.querySelector("textarea").value;

    const text = `
نام: ${name}
شماره تماس: ${phone}
ایمیل: ${email}

پیام:
${message}
    `;

    const whatsappNumber = "989001721385";
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");

    btn.disabled = false;
    btn.querySelector(".btn-text").classList.remove("d-none");
    btn.querySelector(".btn-loader").classList.add("d-none");
  }, 600);
});

