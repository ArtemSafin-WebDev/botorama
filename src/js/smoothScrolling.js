import jump from 'jump.js'

export default function() {
    const anchors = Array.from(document.querySelectorAll('.js-anchor-link'));

    anchors.forEach(anchor => {
        anchor.addEventListener('click', event => {
            event.preventDefault();
            const hash = anchor.hash;
            const element = document.querySelector(hash);

            if (element) {
                jump(element);
            }
        });
    });
}
