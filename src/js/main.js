import polyfills from './polyfills';
import detectTouch from './detectTouch';
import masonry from './portfolioGrid';
import calculator from './calculator';

document.addEventListener('DOMContentLoaded', function() {
    polyfills();
    detectTouch();
    masonry();
    calculator();
});

window.addEventListener('load', function() {
    document.body.classList.add('loaded');
})
