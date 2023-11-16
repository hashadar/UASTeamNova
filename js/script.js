// Example JavaScript to toggle a mobile navigation menu
function toggleMenu() {
    const nav = document.querySelector('nav ul');
    nav.classList.toggle('active');
}
document.addEventListener('DOMContentLoaded', (event) => {
    const scrollIndicator = document.querySelector('.scroll-indicator');

    scrollIndicator.addEventListener('click', () => {
        window.scrollTo({
            top: window.innerHeight,
            behavior: 'smooth'
        });
    });
});
