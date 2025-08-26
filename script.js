// Form validation and submission simulation
const form = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');


form.addEventListener('submit', (e) => {
e.preventDefault();
formMessage.classList.remove('hidden');
formMessage.textContent = 'Submitting...';
formMessage.style.color = 'blue';


// Simulate server request
setTimeout(() => {
formMessage.textContent = 'Thank you! Your message has been received.';
formMessage.style.color = 'green';
form.reset();
}, 1500);
});


// Back to Top Button
const backToTop = document.getElementById('backToTop');
window.addEventListener('scroll', () => {
if (window.scrollY > 200) {
backToTop.style.display = 'block';
} else {
backToTop.style.display = 'none';
}
});


backToTop.addEventListener('click', () => {
window.scrollTo({ top: 0, behavior: 'smooth' });
});