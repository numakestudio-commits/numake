// NuMake Studio — menú desplegable compartido
document.addEventListener('DOMContentLoaded', () => {
    const wrapper = document.getElementById('menuWrapper');
    const toggle = document.getElementById('menuToggle');
    if (wrapper && toggle) {
        toggle.addEventListener('click', () => wrapper.classList.toggle('open'));
    }
    document.body.classList.add('page-loaded');

    const selectors = [
        'section',
        '.project-card',
        '.faq-item',
        '.hero-actions',
        '.section-heading',
        '.project-overlay',
        '.about-section',
        '.tools-card',
        '.contacto',
        'footer'
    ];
    const revealItems = document.querySelectorAll(selectors.join(', '));
    revealItems.forEach(item => item.classList.add('reveal-item'));

    if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('reveal-visible');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.12 });

        revealItems.forEach(item => observer.observe(item));
    } else {
        revealItems.forEach(item => item.classList.add('reveal-visible'));
    }
});
