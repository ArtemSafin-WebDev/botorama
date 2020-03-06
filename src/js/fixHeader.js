export default function() {
    const pageHeader = document.querySelector('.page-header');

    if (pageHeader) {
        window.addEventListener('scroll', function() {
            if (window.pageYOffset > 0) {
                pageHeader.classList.add('fixed');
            } else {
                pageHeader.classList.remove('fixed');
            }
        });
    }
}
