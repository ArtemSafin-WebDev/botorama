import { lockScroll, unlockScroll } from './scrollBlocker';

export default function() {
    const burger = document.querySelector('.js-burger');
    const menu = document.querySelector('.main-nav');
    const mainNavLinks = Array.from(document.querySelectorAll('.main-nav__link'));
    const mainNavContactBtn = document.querySelector('.main-nav__contact-btn')

    function toggleMenu() {
        const menuOpen = document.body.classList.contains('menu-open');
        if (menuOpen) {
            document.body.classList.remove('menu-open');
            unlockScroll();
        } else {
            document.body.classList.add('menu-open');
            lockScroll(menu, window.matchMedia('(max-width: 968px)').matches);
        }
    }
    if (burger && menu) {
        burger.addEventListener('click', event => {
            event.preventDefault();
            toggleMenu();
        });

        mainNavLinks.forEach(link => link.addEventListener('click', event => {
            toggleMenu();
        }))

        mainNavContactBtn.addEventListener('click', event => {
            toggleMenu();
        })
    }
}
