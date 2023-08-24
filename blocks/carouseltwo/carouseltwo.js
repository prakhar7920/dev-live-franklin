import { createOptimizedPicture } from '../../scripts/lib-franklin.js';

$(document).ready(function(){
  $('.story-multiple-items').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows:true
  })
});

export default function decorate(block) {
    block.classList.add('story-multiple-items');
    const buttons = document.createElement('div');
    buttons.className = 'carousel-buttons';
    [...block.children].forEach((row, i) => {
      const classes = ['image', 'text'];
      classes.forEach((e, j) => {
        row.children[j].classList.add(`carousel-${e}`);
      });
    });
    block.parentElement.append(buttons);
    console.log(block);
  }