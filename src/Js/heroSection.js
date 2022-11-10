// tu budem pracovat jednoducho len s classami , ideckami a elementami co su v HERO sekcii

// logo animation
// window.addEventListener('DOMContentLoaded', () => {
//     const path = document.querySelector('#logo path'); // selected logo painting path (children of 'logo')

//     console.log(path.getTotalLenght());
// })


let leftSlider = document.querySelector('#left_slider');
let rightSlider = document.querySelector('#right_slider');
let rightSlider2 = document.querySelector('#right_slider2');

let upperheading = document.querySelector('#upperheading');
let heading = document.querySelector('#heading');
let subheading = document.querySelector('#subheading');

let links_txt_animation = document.querySelector('.nav_section');

window.addEventListener('scroll', () => {
    let scrollValue = window.scrollY;
    // let scrollPosition = window.pageYOffset;

    leftSlider.style.marginTop = scrollValue * 1 + 'px';
    rightSlider.style.marginTop = scrollValue * 2.815 + 'px';
    rightSlider2.style.marginTop = scrollValue * 2.815 + 'px';

    upperheading.style.left = scrollValue * 3 + 'px';
    heading.style.right = scrollValue * 2 + 'px';
    subheading.style.left = scrollValue * 5 + 'px';
});

