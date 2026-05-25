const header = document.querySelector('.header');
const toggleButton = document.querySelector('.header__toggle');
const navMenu = document.querySelector('.header__nav');
const navLinks = document.querySelectorAll('.header__link');
const yearElement = document.getElementById('year');

function updateYear() {
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
}

function closeMenu() {
    if (toggleButton && navMenu) {
        toggleButton.setAttribute('aria-expanded', 'false');
        navMenu.classList.remove('header__nav--open');
        toggleButton.classList.remove('header__toggle--open');
    }
}

function toggleMenu() {
    if (toggleButton && navMenu) {
        const expanded = toggleButton.getAttribute('aria-expanded') === 'true';
        toggleButton.setAttribute('aria-expanded', String(!expanded));
        navMenu.classList.toggle('header__nav--open');
        toggleButton.classList.toggle('header__toggle--open');
    }
}

function handleScroll() {
    if (!header) return;
    if (window.scrollY > 80) {
        header.classList.add('header--scrolled');
    } else {
        header.classList.remove('header--scrolled');
    }
}

function bindEvents() {
    if (toggleButton) {
        toggleButton.addEventListener('click', toggleMenu);
    }

    navLinks.forEach((link) => {
        link.addEventListener('click', () => {
            if (window.innerWidth < 768) {
                closeMenu();
            }
        });
    });

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
            closeMenu();
        }
    });

    window.addEventListener('scroll', handleScroll);
}

window.addEventListener('DOMContentLoaded', () => {
    updateYear();
    bindEvents();
    handleScroll();
});
