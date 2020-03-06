import polyfills from './polyfills';
import detectTouch from './detectTouch';
import masonry from './portfolioGrid';
import calculator from './calculator';
import forms from './forms';
import menu from './menu';
import smoothScrolling from './smoothScrolling';
import fixHeader from './fixHeader';
import parallax from './parallax';

document.addEventListener('DOMContentLoaded', function() {
    polyfills();
    detectTouch();
    masonry();
    calculator();
    forms();
    menu();
    smoothScrolling();
    fixHeader();
    parallax();
});

window.addEventListener('load', function() {
    document.body.classList.add('loaded');
})
