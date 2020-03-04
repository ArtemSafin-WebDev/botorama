import Colcade from 'colcade';

export default function() {
    const grids = Array.from(document.querySelectorAll('.js-portfolio-masonry'));

    grids.forEach(grid => {
        new Colcade(grid, {
            columns: '.portfolio__grid-column',
            items: '.portfolio__grid-item'
        });
    });
}
