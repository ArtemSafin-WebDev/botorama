import Masonry from 'masonry-layout';
import imagesLoaded from 'imagesloaded';

export default function() {
    const grids = Array.from(document.querySelectorAll('.js-portfolio-masonry'))

    grids.forEach(grid => {
        const masonry = new Masonry(grid, {
            itemSelector: ".portfolio__grid-item",
            percentPosition: true
        });

        imagesLoaded(grid).on("progress", function() {
            masonry.layout();
        });
    })
}