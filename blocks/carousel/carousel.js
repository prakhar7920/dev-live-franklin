import { createOptimizedPicture } from '../../scripts/lib-franklin.js';

$(document).ready(function(){
  $('.multiple-items').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3
  })
});

export default function decorate(block) {
    block.classList.add('multiple-items');
    const buttons = document.createElement('div');
    buttons.className = 'carousel-buttons';
    [...block.children].forEach((row, i) => {
      const classes = ['image', 'text'];
      classes.forEach((e, j) => {
        row.children[j].classList.add(`carousel-${e}`);
      });

      const button = document.createElement('button');
      button.title = 'Carousel Nav';
      if (!i) button.classList.add('selected');
      button.addEventListener('click', () => {
        block.scrollTo({ top: 0, left: row.offsetLeft - row.parentNode.offsetLeft, behavior: 'smooth' });
        [...buttons.children].forEach((r) => r.classList.remove('selected'));
        button.classList.add('selected');
      });
      buttons.append(button);
    });
    block.parentElement.append(buttons);
    console.log(block);
  }