document.addEventListener('DOMContentLoaded', function () {
    const toggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelectorAll('.nav-links a');

    if (!toggle) return;

    // Toggle aria-expanded to show/hide menu (CSS reads this)
    toggle.addEventListener('click', function () {
        const expanded = this.getAttribute('aria-expanded') === 'true';
        this.setAttribute('aria-expanded', String(!expanded));
    });

    // Close menu when a link is clicked (mobile)
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth < 768) {
                toggle.setAttribute('aria-expanded', 'false');
            }
        });
    });

    // Optional: close when clicking outside
    document.addEventListener('click', (e) => {
        const isClickInside = e.target.closest('.nav');
        if (!isClickInside && window.innerWidth < 768) {
            toggle.setAttribute('aria-expanded', 'false');
        }
    });
});
