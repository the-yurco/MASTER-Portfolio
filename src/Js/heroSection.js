// tu budem pracovat jednoducho len s classami , ideckami a elementami co su v HERO sekcii

// logo animation
// window.addEventListener('DOMContentLoaded', () => {
//     const path = document.querySelector('#logo path'); // selected logo painting path (children of 'logo')

//     console.log(path.getTotalLenght());
// })

let leftSlider = document.querySelector('#left_slider');
let rightSlider = document.querySelector('#right_slider');
let rightSlider2 = document.querySelector('#right_slider2');

let heading = document.querySelector('#heading');
let subheading = document.querySelector('#subheading');

window.addEventListener('scroll', () => {
    let scrollValue = window.scrollY;
    // let scrollPosition = window.pageYOffset;

    leftSlider.style.marginTop = scrollValue * 1 + 'px';
    rightSlider.style.marginTop = scrollValue * 2.815 + 'px';
    rightSlider2.style.marginTop = scrollValue * 2.815 + 'px';

    // rightSlider.style.transform = 'translateY(' + scrollPosition * -1 + 'px)';

    console.log(scrollY);

    if(scrollY > 136){
        leftSlider.style.backgroundColor = '#0d1b36';
        rightSlider.style.backgroundColor = '#0d1b36';
        rightSlider2.style.backgroundColor = '#0d1b36';

        leftSlider.style.marginTop = scrollValue * 1.125 +'px';
        rightSlider.style.marginTop = scrollValue * 1.5 + 'px';
        rightSlider2.style.marginTop = scrollValue * 1.5 + 'px';
    }

    else if(scrollY < 136){
        leftSlider.style.backgroundColor = 'white';
        rightSlider.style.backgroundColor = 'white';
        rightSlider2.style.backgroundColor = 'white';
    }
});