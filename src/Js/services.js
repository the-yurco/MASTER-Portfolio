// tu budem pracovat jednoducho len s classami , ideckami a elementami co su v SERVICES sekcii

let TopSlider = document.querySelector('#top_slider');
let TopSlider2 = document.querySelector('#top_slider2');
let BottomSlider = document.querySelector('#bottom_slider');

let service_Section = document.querySelector('.servicesSection');

let h4_first_text = document.querySelector('.first_text_container');
let h4_second_text = document.querySelector('.second_text_container');
let h4_third_text = document.querySelector('.third_text_container')

let h1_parallax_translateX = document.querySelector('.translateX_left_h1');
let h2_parallax_move = document.querySelector('.move_text_h2');

// let h2_text = document.querySelector('.text_h2');
const h2_text = document.querySelector('.text_h2');

window.addEventListener('scroll', () => {
    const scrollValue = window.scrollY;

    if(scrollValue > 600){
        service_Section.style.backgroundColor = 'white';
        h2_text.classList.remove('text_h2')
        h2_text.classList.add('fixed');

        if(scrollValue < 850){
            service_Section.style.backgroundColor = '#0d1b36';
            h2_text.classList.remove('fixed');
            h2_text.classList.add('text_h2');
        }
    }

    if(scrollValue > 1400){
        h4_first_text.classList.remove('first_text_container');
        h4_first_text.classList.add('fixed2');

        if(scrollValue > 2000){
            h4_first_text.classList.remove('fixed2');
        }
    }

    if(scrollValue > 2000){
        h4_first_text.classList.remove('fixed2');
        h4_first_text.classList.add('first_text_container');

        h4_second_text.classList.remove('second_text_container');
        h4_second_text.classList.add('fixed3');
    }

    if(scrollValue > 2600){
        h4_second_text.classList.remove('fixed3');
        h4_second_text.classList.add('second_text_container');

        h4_third_text.classList.remove('third_text_container');
        h4_third_text.classList.add('fixed2');
        h4_third_text.style.top = 500 + 'px';
    }

    if(scrollValue > 3200){
        h4_third_text.classList.remove('fixed2');
        h4_third_text.classList.add('third_text_container');


        // h1_parallax_translateX.style.right = scrollValue * 2 + 'px'; 
        h1_parallax_translateX.classList.remove('translateX_left_h1');
        h1_parallax_translateX.classList.add('translate_h1');


        //! it is not working from bottom to top IDK why -_-
        // if(scrollValue < 3199){
        //     h4_third_text.classList.remove('fixed2');
        //     h4_third_text.classList.add('third_text_container');
        // }
    }

    if(scrollValue > 3800){
        h1_parallax_translateX.classList.remove('translate_h1');
        // h1_parallax_translateX.classList.add('translateX_left_h1');

        h2_parallax_move.classList.remove('move_text_h2')
        h2_parallax_move.classList.add('move_h2');
    }

    if(scrollValue > 4400){
        h2_parallax_move.classList.remove('move_h2')

        
    }

    console.log(scrollValue);

});

