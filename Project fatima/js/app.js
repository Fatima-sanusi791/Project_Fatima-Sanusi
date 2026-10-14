const menuToggle = document.querySelector('.menu-toggle');
const navbar = document.querySelector('.navbar');

if (menuToggle && navbar) {
    menuToggle.addEventListener('click', () => {
        navbar.classList.toggle('open');
    });
}

document.querySelectorAll('.navbar a').forEach(link => {
    link.addEventListener('click', () => {
        navbar?.classList.remove('open');
    });
});

const contactForm = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

if (contactForm) {
    contactForm.addEventListener('submit', (event) => {
        event.preventDefault();
        formMessage.textContent = 'Message ready to send! Connect this form to a backend or email service to receive messages.';
        contactForm.reset();
    });
}

console.log('Fatima portfolio loaded successfully.');
